import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../auth/client.js";
import { useAuth } from "../lib/auth";
import { formatDate } from "../lib/blog";

export function Reactions({ postId }) {
    const { user } = useAuth();
    const [rows, setRows] = useState([]);
    const [err, setErr] = useState(null);

    const load = useCallback(
        async (signal) => {
            let q = supabase.from("reactions").select("user_id, value").eq("post_id", postId);
            if (signal) q = q.abortSignal(signal);
            const { data, error } = await q;
            if (signal?.aborted) return;
            if (error) return setErr(error.message);
            setRows(data);
        },
        [postId],
    );

    // Mount and update: reload whenever the post changes; abort on unmount/change.
    useEffect(() => {
        const ctrl = new AbortController();
        load(ctrl.signal);
        return () => ctrl.abort();
    }, [load]);

    const likes = rows.filter((r) => r.value === 1).length;
    const dislikes = rows.filter((r) => r.value === -1).length;
    const mine = user ? rows.find((r) => r.user_id === user.id)?.value : undefined;

    async function react(value) {
        if (!user) {
            return setErr("Please sign in to react.");
        }
        setErr(null);
        const res =
            mine === value
                ? await supabase.from("reactions").delete().eq("post_id", postId).eq("user_id", user.id)
                : await supabase
                    .from("reactions")
                    .upsert({ post_id: postId, user_id: user.id, value }, { onConflict: "post_id,user_id" });
        if (res.error) return setErr(res.error.message);
        await load();
    }

    return (
        <div className="mb-4">
            <button className={`btn mr-2 ${mine === 1 ? "btn-primary" : "btn-outline-primary"}`} disabled={!user} onClick={() => react(1)} aria-label="Like">
                <i className="fa fa-thumbs-up mr-1"></i> {likes}
            </button>
            <button className={`btn mr-2 ${mine === -1 ? "btn-primary" : "btn-outline-primary"}`} disabled={!user} onClick={() => react(-1)} aria-label="Dislike">
                <i className="fa fa-thumbs-down mr-1"></i> {dislikes}
            </button>
            {!user && <small className="text-muted"><Link to="/login">Sign in</Link> to react.</small>}
            {err && <div className="text-danger small mt-2">{err}</div>}
        </div>
    );
}

export function Comments({ postId }) {
    const { user } = useAuth();
    const [comments, setComments] = useState(null);
    const [body, setBody] = useState("");
    const [err, setErr] = useState(null);
    const [notice, setNotice] = useState(null);
    const [reload, setReload] = useState(0);

    // Mount + update on postId / reload; abort the pending request on unmount.
    useEffect(() => {
        const ctrl = new AbortController();
        supabase
            .from("comments")
            .select("*")
            .eq("post_id", postId)
            .order("created_at", { ascending: true })
            .abortSignal(ctrl.signal)
            .then(({ data, error }) => {
                if (ctrl.signal.aborted) return;
                if (error) setErr(error.message);
                else setComments(data);
            });
        return () => ctrl.abort();
    }, [postId, reload]);

    // Hide the "posted" notice after 3s; clear the timer on unmount.
    useEffect(() => {
        if (!notice) return;
        const t = setTimeout(() => setNotice(null), 3000);
        return () => clearTimeout(t);
    }, [notice]);

    async function add(e) {
        e.preventDefault();

        if (!user) {
            return setErr("Please sign in to comment.");
        }

        const text = body.trim();
        if (!text) return setErr("Comment cannot be empty.");
        if (text.length > 2000) return setErr("Comment is too long (max 2000 characters).");
        setErr(null);
        const { error } = await supabase.from("comments").insert({ post_id: postId, body: text, user_id: user.id });
        if (error) return setErr(error.message);
        setBody("");
        setNotice("Comment posted.");
        setReload((n) => n + 1);
    }

    async function remove(id) {
        const { error } = await supabase.from("comments").delete().eq("id", id);
        if (error) return setErr(error.message);
        setReload((n) => n + 1);
    }

    return (
        <div className="mb-4">
            <h3 className="mb-4 font-weight-bold">{comments ? comments.length : "…"} Comments</h3>
            {comments === null && !err && <p>Loading comments…</p>}
            {comments?.length === 0 && <p className="text-muted">No comments yet.</p>}
            {comments?.map((c) => (
                <div key={c.id} className="media mb-4">
                    {c.author_avatar_url ? (
                        <img
                            src={c.author_avatar_url}
                            alt=""
                            className="img-fluid mr-3 mt-1"
                            style={{ width: 45 }}
                        />
                    ) : (
                        <i
                            className="fa fa-user-circle fa-3x mr-3 mt-1 text-secondary"
                            aria-hidden="true"
                        />
                    )}
                    <div className="media-body">
                        <h6 className="font-weight-bold">
                            {c.author_email ?? "Reader"} <small><i>{formatDate(c.created_at)}</i></small>
                        </h6>
                        <p className="mb-1" style={{ whiteSpace: "pre-wrap" }}>{c.body}</p>
                        {user?.id === c.user_id && (
                            <button className="btn btn-sm btn-link text-danger p-0" onClick={() => remove(c.id)}>Delete</button>
                        )}
                    </div>
                </div>
            ))}
            {err && <div className="alert alert-danger">{err}</div>}
            {notice && <div className="alert alert-success">{notice}</div>}
            {user ? (
                <form onSubmit={add}>
                    <textarea className="form-control mb-2" rows={3} placeholder="Write a comment…" value={body} onChange={(e) => setBody(e.target.value)} />
                    <button className="btn btn-primary">Post comment</button>
                </form>
            ) : (
                <p><Link to="/login">Sign in</Link> to leave a comment.</p>
            )}
        </div>
    );
}
