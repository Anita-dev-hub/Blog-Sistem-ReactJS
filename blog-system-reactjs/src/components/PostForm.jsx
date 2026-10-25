import { useEffect, useRef, useState } from "react";

export function PostForm({ initial, busy, error, submitLabel, onSubmit }) {
    const [form, setForm] = useState(
        initial ?? { title: "", topic: "", imageUrl: "", blog_text: "" },
    );
    const [localErr, setLocalErr] = useState(null);
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

    function submit(e) {
        e.preventDefault();
        if (form.title.trim().length < 3) return setLocalErr("Title must be at least 3 characters.");
        if (form.blog_text.trim().length < 10) return setLocalErr("Post text must be at least 10 characters.");
        setLocalErr(null);
        onSubmit({
            title: form.title.trim(),
            topic: form.topic.trim() || "General",
            imageUrl: form.imageUrl.trim() || null,
            blog_text: form.blog_text.trim(),
        });
    }

    const msg = localErr || error;
    return (
        <form onSubmit={submit} noValidate>
            {msg && <div className="alert alert-danger">{msg}</div>}
            <input ref={titleRef} className="form-control mb-3" placeholder="Title" value={form.title} onChange={set("title")} maxLength={200} />
            <input className="form-control mb-3" placeholder="Topic (e.g. Travel)" value={form.topic} onChange={set("topic")} maxLength={50} />
            <input className="form-control mb-3" type="url" placeholder="Image URL (optional)" value={form.imageUrl ?? ""} onChange={set("imageUrl")} />
            <textarea className="form-control mb-3" rows={10} placeholder="Write your post… (blank line = new paragraph)" value={form.blog_text} onChange={set("blog_text")} />
            <button className="btn btn-primary" disabled={busy}>
                {busy ? "Saving…" : submitLabel}
            </button>
        </form>
    );
}
