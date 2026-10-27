
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "../components/layout.jsx";
import { supabase } from "../auth/client.js";

export const Route = createFileRoute("/about")({
    component: About,
});

function About() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true;

        async function loadAbout() {
            const { data, error } = await supabase
                .from("about_page")
                .select(
                    "page_title, heading, image_url, image_alt, description, skills"
                )
                .limit(1)
                .maybeSingle();

            if (!active) return;

            if (error) {
                setError(error.message);
            } else if (!data) {
                setError("No About page content has been configured.");
            } else {
                setAbout(data);
            }

            setLoading(false);
        }

        loadAbout();

        return () => {
            active = false;
        };
    }, []);

    return (
        <Layout>
            {loading ? (
                <main className="container py-5" aria-live="polite">
                    <p>Loading...</p>
                </main>
            ) : error ? (
                <main className="container py-5">
                    <p role="alert">{error}</p>
                </main>
            ) : (
                <>
                    <PageHeader title={about.page_title} />

                    <main className="container bg-white pt-5">
                        <div className="row px-3 pb-5">
                            <section className="col-md-12">
                                <h2 className="mb-4 font-weight-bold">
                                    {about.heading}
                                </h2>

                                {about.image_url && (
                                    <img
                                        className="img-fluid float-left w-50 mr-4 mb-3"
                                        src={about.image_url}
                                        alt={about.image_alt || ""}
                                    />
                                )}

                                <p className="m-0">
                                    {about.description}
                                </p>

                                <div className="clearfix" />
                            </section>

                            {Array.isArray(about.skills) &&
                                about.skills.length > 0 && (
                                    <section className="col-md-12 pt-4">
                                        <div className="d-flex flex-column skills">
                                            {about.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="progress w-100 mb-4"
                                                >
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${Math.min(
                                                                100,
                                                                Math.max(
                                                                    0,
                                                                    Number(skill.value) || 0
                                                                )
                                                            )}%`,
                                                        }}
                                                        aria-valuenow={Math.min(
                                                            100,
                                                            Math.max(
                                                                0,
                                                                Number(skill.value) || 0
                                                            )
                                                        )}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                    >
                                                        {skill.name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}
                        </div>
                    </main>
                </>
            )}
        </Layout>
    );
}
