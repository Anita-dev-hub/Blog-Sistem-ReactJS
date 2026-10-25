
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Layout, PageHeader } from "../components/Layout";
import { PostForm } from "../components/PostForm";
import { supabase } from "../auth/client.js";

export const Route = createFileRoute("/_authenticated/new")({
  component: NewPost,
});

function NewPost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [err, setErr] = useState(null);
  const [busy, setBusy] = useState(false);

  async function create(values) {
    setBusy(true);
    setErr(null);

    try {
      const { data, error } = await supabase
        .from("blog")
        .insert(values)
        .select("id")
        .single();

      if (error) throw error;

      await queryClient.invalidateQueries({
        queryKey: ["blog"],
      });

      await navigate({
        to: "/blog/$id",
        params: { id: data.id },
      });
    } catch (error) {
      setErr(error.message || "An error occurred while publishing the post.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Layout>
      <PageHeader title="New Post" />

      <div className="container bg-white py-5">
        <div className="col-md-10 mx-auto">
          <PostForm
            busy={busy}
            error={err}
            submitLabel="Publish"
            onSubmit={create}
          />
        </div>
      </div>
    </Layout>
  );
}
