
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "../../components/layout";
import { PostForm } from "../../components/PostForm";
import { supabase } from "../../auth/client.js";

export const Route = createFileRoute("/authenticated/edit/$id")({
  component: EditPost,
});

function EditPost() {
  const { id } = Route.useParams();
  const { user } = Route.useRouteContext();
  const navigate = useNavigate();
  const qc = useQueryClient();

  const [post, setPost] = useState(undefined);
  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();

    setPost(undefined);
    setErr(null);

    supabase
      .from("blog")
      .select("*")
      .eq("id", id)
      .abortSignal(ctrl.signal)
      .maybeSingle()
      .then(({ data, error }) => {
        if (ctrl.signal.aborted) return;

        if (error) {
          setErr(error.message);
          setPost(null);
          return;
        }

        setPost(data ?? null);
      })
      .catch((error) => {
        if (ctrl.signal.aborted) return;

        setErr(error.message || "Failed to load post.");
        setPost(null);
      });

    return () => ctrl.abort();
  }, [id]);

  async function save(values) {
    setBusy(true);
    setErr(null);

    try {
      const { data, error } = await supabase
        .from("blog")
        .update({
          title: values.title,
          topic: values.topic,
          imageUrl: values.imageUrl,
          blog_text: values.blog_text,
        })
        .eq("id", id)
        .select("id");

      if (error) throw error;

      if (!data?.length) {
        throw new Error(
          "The post was not updated. Please check if you have permission to edit it."
        );
      }

      await qc.invalidateQueries({ queryKey: ["blog"] });

      await navigate({
        to: "/blog/$id",
        params: { id },
      });
    } catch (error) {
      setErr(error.message || "An error occurred while saving the post.");
    } finally {
      setBusy(false);
    }
  }

  let body;

  if (post === undefined) {
    body = <p>Loading...</p>;
  } else if (!post) {
    body = (
      <div>
        <p>{err || "The post was not found."}</p>
        <Link to="/blog">Back to the blog</Link>
      </div>
    );
  } else if (!user || post.author_id !== user.id) {
    body = (
      <div className="alert alert-warning">
        Only the author can edit this post.{" "}
        <Link to="/blog/$id" params={{ id }}>
          Back to the post
        </Link>
      </div>
    );
  } else {
    body = (
      <PostForm
        key={post.id}
        initial={{
          title: post.title,
          topic: post.topic,
          imageUrl: post.imageUrl ?? "",
          blog_text: post.blog_text,
        }}
        busy={busy}
        error={err}
        submitLabel="Save changes"
        onSubmit={save}
      />
    );
  }

  return (
    <Layout>
      <PageHeader title="Edit Post" />
      <div className="container bg-white py-5">
        <div className="col-md-10 mx-auto">{body}</div>
      </div>
    </Layout>
  );
}
