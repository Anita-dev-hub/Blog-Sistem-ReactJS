
import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { Layout } from "../components/layout";
import { PostRow } from "../components/PostRow";
import { formatDate, postsQuery } from "../lib/blog";
import { supabase } from "../auth/client.js";

export const Route = createFileRoute("/")({
    loader: ({ context }) =>
        context.queryClient.ensureQueryData(postsQuery),
    component: Home,
});

function Home() {
    const { data: posts } = useSuspenseQuery(postsQuery);

    const [settings, setSettings] = useState(null);
    const [settingsError, setSettingsError] = useState(null);
    const [settingsLoading, setSettingsLoading] = useState(true);
    const [i, setI] = useState(0);

    useEffect(() => {
        let active = true;

        async function loadSettings() {
            const { data, error } = await supabase
                .from("home_settings")
                .select("*")
                .eq("id", 1)
                .maybeSingle();

            if (!active) return;

            if (error) {
                setSettingsError(error.message);
            } else if (!data) {
                setSettingsError(
                    "Home page settings have not been configured."
                );
            } else {
                setSettings(data);
            }

            setSettingsLoading(false);
        }

        loadSettings();

        return () => {
            active = false;
        };
    }, []);

    const slides = settings
        ? posts.slice(0, settings.carousel_limit)
        : [];

    const visiblePosts = settings
        ? posts.slice(0, settings.posts_limit)
        : [];

    useEffect(() => {
        setI(0);
    }, [slides.length]);

    useEffect(() => {
        if (
            !settings ||
            slides.length < 2 ||
            settings.carousel_interval_ms <= 0
        ) {
            return;
        }

        const timer = setInterval(() => {
            setI((current) => (current + 1) % slides.length);
        }, settings.carousel_interval_ms);

        return () => clearInterval(timer);
    }, [slides.length, settings?.carousel_interval_ms]);

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
            {settingsLoading ? (
                <div className="container bg-white py-5" aria-live="polite">
                    Loading...
                </div>
            ) : settingsError || !settings ? (
                <div className="container bg-white py-5">
                    <p role="alert">
                        {settingsError || "Home page settings are unavailable."}
                    </p>
                </div>
            ) : (
                <>
                    {slides.length > 0 && (
                        <div className="container p-0">
                            <div className="carousel slide">
                                <div className="carousel-inner">
                                    {slides.map((post, index) => {
                                        const imageUrl =
                                            post.imageUrl || post.image_url;

                                        return (
                                            <div
                                                key={post.id}
                                                className={`carousel-item ${
                                                    index === i ? "active" : ""
                                                }`}
                                            >
                                                {imageUrl && (
                                                    <img
                                                        className="w-100"
                                                        src={imageUrl}
                                                        alt={post.title}
                                                    />
                                                )}

                                                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                                    <h2 className="mb-3 text-white font-weight-bold">
                                                        {post.title}
                                                    </h2>

                                                    <div className="d-flex text-white">
                                                        <small className="mr-2">
                                                            <i
                                                                className="fa fa-calendar-alt"
                                                                aria-hidden="true"
                                                            />
                                                            {" "}
                                                            {formatDate(post.created_at)}
                                                        </small>

                                                        <small className="mr-2">
                                                            <i
                                                                className="fa fa-folder"
                                                                aria-hidden="true"
                                                            />
                                                            {" "}
                                                            {post.topic}
                                                        </small>
                                                    </div>

                                                    <Link
                                                        to="/blog/$id"
                                                        params={{ id: post.id }}
                                                        className="btn btn-lg btn-outline-light mt-4"
                                                    >
                                                        {settings.read_more_label}
                                                    </Link>
                                                </div>
                                            </div>
                                        );
                                    })}
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
                            <p className="px-3 pb-5">
                                {settings.no_posts_message}
                            </p>
                        )}

                        {visiblePosts.map((post) => (
                            <PostRow key={post.id} post={post} />
                        ))}

                        {posts.length > settings.posts_limit && (
                            <div className="px-3 pb-5 text-center">
                                <Link
                                    to="/blog"
                                    className="btn btn-primary"
                                >
                                    {settings.see_all_posts_label}
                                </Link>
                            </div>
                        )}
                    </div>
                </>
            )}
        </Layout>
    );
}
