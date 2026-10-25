
import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { Layout } from "../components/layout";
import { PostRow } from "../components/PostRow";
import { formatDate, postsQuery } from "../lib/blog";

export const Route = createFileRoute("/")({
    loader: ({ context }) =>
        context.queryClient.ensureQueryData(postsQuery),
    component: Home,
});

function Home() {
    const { data: posts } = useSuspenseQuery(postsQuery);
    const slides = posts.slice(0, 3);
    const [i, setI] = useState(0);

    useEffect(() => {
        if (slides.length < 2) {
            setI(0);
            return;
        }

        const timer = setInterval(() => {
            setI((current) => (current + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    function previousSlide() {
        setI((current) =>
            (current - 1 + slides.length) % slides.length
        );
    }

    function nextSlide() {
        setI((current) => (current + 1) % slides.length);
    }

    return (
        <Layout>
            {slides.length > 0 && (
                <div className="container p-0">
                    <div className="carousel slide">
                        <div className="carousel-inner">
                            {slides.map((post, index) => (
                                <div
                                    key={post.id}
                                    className={`carousel-item ${index === i ? "active" : ""
                                        }`}
                                >
                                    <img
                                        className="w-100"
                                        src={`/img/carousel-${(index % 3) + 1}.jpg`}
                                        alt={post.title}
                                    />

                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h2 className="mb-3 text-white font-weight-bold">
                                            {post.title}
                                        </h2>

                                        <div className="d-flex text-white">
                                            <small className="mr-2">
                                                <i className="fa fa-calendar-alt" aria-hidden="true" />
                                                {" "}{formatDate(post.created_at)}
                                            </small>

                                            <small className="mr-2">
                                                <i className="fa fa-folder" aria-hidden="true" />
                                                {" "}{post.topic}
                                            </small>
                                        </div>

                                        <Link
                                            to="/blog/$id"
                                            params={{ id: post.id }}
                                            className="btn btn-lg btn-outline-light mt-4"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {slides.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="carousel-control-prev"
                                    onClick={previousSlide}
                                    aria-label="Previous slide"
                                >
                                    <span
                                        className="carousel-control-prev-icon"
                                        aria-hidden="true"
                                    />
                                </button>

                                <button
                                    type="button"
                                    className="carousel-control-next"
                                    onClick={nextSlide}
                                    aria-label="Next slide"
                                >
                                    <span
                                        className="carousel-control-next-icon"
                                        aria-hidden="true"
                                    />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            <div className="container bg-white pt-5">
                {posts.length === 0 && (
                    <p className="px-3 pb-5">No posts yet.</p>
                )}

                {posts.slice(0, 5).map((post) => (
                    <PostRow key={post.id} post={post} />
                ))}

                {posts.length > 5 && (
                    <div className="px-3 pb-5 text-center">
                        <Link to="/blog" className="btn btn-primary">
                            See all posts
                        </Link>
                    </div>
                )}
            </div>
        </Layout>
    );
}
