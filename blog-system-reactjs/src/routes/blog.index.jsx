
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Layout, PageHeader } from "../components/layout";
import { PostRow } from "../components/PostRow";
import { postsQuery } from "../lib/blog";

export const Route = createFileRoute("/blog/")({
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(postsQuery),
  component: BlogList,
});

function BlogList() {
  const { data: posts } = useSuspenseQuery(postsQuery);
  const [topic, setTopic] = useState(null);

  const topics = [
    ...new Set(posts.map((post) => post.topic).filter(Boolean)),
  ];

  const shown = topic
    ? posts.filter((post) => post.topic === topic)
    : posts;

  return (
    <Layout>
      <PageHeader title="Blog" />

      <div className="container bg-white pt-5">
        <div className="px-3 pb-4">
          <button
            type="button"
            className={`btn btn-sm mb-1 mr-1 ${
              !topic ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setTopic(null)}
            aria-pressed={!topic}
          >
            All
          </button>

          {topics.map((item) => (
            <button
              type="button"
              key={item}
              className={`btn btn-sm mb-1 mr-1 ${
                topic === item
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setTopic(item)}
              aria-pressed={topic === item}
            >
              {item}
            </button>
          ))}
        </div>

        {shown.length > 0 ? (
          shown.map((post) => (
            <PostRow key={post.id} post={post} />
          ))
        ) : (
          <div className="px-3 pb-4">
            There are no posts on the selected topic.
          </div>
        )}
      </div>
    </Layout>
  );
}
