
import {
  createFileRoute,
  Link,
  notFound,
  useNavigate,
} from "@tanstack/react-router";
import {
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useState } from "react";

import { Comments, Reactions } from "../components/PostInteractions";
import { supabase } from "../auth/client.js";
import { useAuth } from "../lib/auth.jsx";
import { Layout } from "../components/layout.jsx";
import {
  formatDate,
  imgOf,
  postQuery,
  postsQuery,
} from "../lib/blog";

export const Route = createFileRoute("/blog/$id")({
  loader: async ({ context, params }) => {
    const post = await context.queryClient.ensureQueryData(
      postQuery(params.id)
    );

    if (!post) throw notFound();

    await context.queryClient.ensureQueryData(postsQuery);

    return null;
  },
  notFoundComponent: PostNotFound,
  component: PostDetail,
});

function PostNotFound() {
  return (
    <Layout>
      <div className="container py-5 px-4 bg-white">
        <h2 className="font-weight-bold">Post not found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">
          Back to the blog
        </Link>
      </div>
    </Layout>
  );
}

function PostDetail() {
  const { id } = Route.useParams();
  const { data: post } = useSuspenseQuery(postQuery(id));
  const { data: posts } = useSuspenseQuery(postsQuery);

  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [delErr, setDelErr] = useState(null);
  const [deleting, setDeleting] = useState(false);

  if (!post) return <PostNotFound />;

  const isOwner = Boolean(user && user.id === post.author_id);

  async function remove() {
    if (deleting) return;
    if (!window.confirm("Are you sure you want to delete the post?")) {
      return;
    }

    setDeleting(true);
    setDelErr(null);

    try {
      const { data, error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", post.id)
        .select("id");

      if (error) throw error;

      if (!data?.length) {
        throw new Error(
          "You cannot delete this post. Please check your access rights."
        );
      }

      await queryClient.invalidateQueries({ queryKey: ["blog"] });

      await navigate({ to: "/blog" });
    } catch (error) {
      setDelErr(error.message || "An error occurred during deletion.");
    } finally {
      setDeleting(false);
    }
  }

  const idx = posts.findIndex((item) => item.id === id);
  const newer = idx > 0 ? posts[idx - 1] : null;
  const older = idx >= 0 && idx < posts.length - 1
    ? posts[idx + 1]
    : null;

  return (
    <Layout>
      <div className="container py-5 px-2 bg-white">
        <div className="row px-4">
          <div className="col-12">
            <img
              className="img-fluid mb-4 w-100"
              src={imgOf(post.imageUrl)}
              alt={post.title}
            />

            <h2 className="mb-3 font-weight-bold">{post.title}</h2>

            <div className="d-flex flex-wrap">
              <p className="mr-3 text-muted">
                <i className="fa fa-calendar-alt" aria-hidden="true" />{" "}
                {formatDate(post.created_at)}
              </p>

              <p className="mr-3 text-muted">
                <i className="fa fa-folder" aria-hidden="true" />{" "}
                {post.topic}
              </p>

              {post.author_email && (
                <p className="mr-3 text-muted">
                  <i className="fa fa-user" aria-hidden="true" />{" "}
                  {post.author_email}
                </p>
              )}
            </div>

            {isOwner && (
              <div className="mb-3">
                <Link
                  to="/edit/$id"
                  params={{ id: post.id }}
                  className="btn btn-sm btn-outline-primary mr-2"
                >
                  Edit
                </Link>

                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={remove}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            )}

            {delErr && (
              <div className="alert alert-danger" role="alert">
                {delErr}
              </div>
            )}

            {(post.blog_text || "")
              .split(/\n\s*\n/)
              .filter((paragraph) => paragraph.trim())
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

            <Reactions postId={post.id} />
            <Comments postId={post.id} />
          </div>

          <div className="col-12 py-4">
            <div className="btn-group btn-group-lg w-100">
              {older ? (
                <Link
                  to="/blog/$id"
                  params={{ id: older.id }}
                  className="btn btn-outline-primary"
                >
                  <i className="fa fa-angle-left mr-2" aria-hidden="true" />
                  Previous
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  disabled
                >
                  <i className="fa fa-angle-left mr-2" aria-hidden="true" />
                  Previous
                </button>
              )}

              {newer ? (
                <Link
                  to="/blog/$id"
                  params={{ id: newer.id }}
                  className="btn btn-outline-primary"
                >
                  Next
                  <i className="fa fa-angle-right ml-2" aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  disabled
                >
                  Next
                  <i className="fa fa-angle-right ml-2" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
