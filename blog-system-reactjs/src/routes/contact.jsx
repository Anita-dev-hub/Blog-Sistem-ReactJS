
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "../components/layout.jsx";
import { supabase } from "../auth/client.js";

export const Route = createFileRoute("/contact")({
    component: Contact,
});

function Contact() {
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadError, setLoadError] = useState("");
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    useEffect(() => {
        let active = true;

        async function loadSettings() {
            const { data, error } = await supabase
                .from("contact_settings")
                .select("*")
                .eq("id", 1)
                .maybeSingle();

            if (!active) return;

            if (error) {
                setLoadError(error.message);
            } else if (!data) {
                setLoadError(
                    "Contact page settings have not been configured."
                );
            } else {
                setSettings(data);
            }

            setLoading(false);
        }

        loadSettings();

        return () => {
            active = false;
        };
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setSending(true);
        setStatus(null);

        try {
            const message = {
                name: form.name.trim(),
                email: form.email.trim(),
                subject: form.subject.trim(),
                message: form.message.trim(),
            };

            const { error } = await supabase
                .from("contact_messages")
                .insert(message);

            if (error) throw error;

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            setStatus({
                type: "success",
                text: settings.success_message,
            });
        } catch (error) {
            console.error("Contact submission failed:", error);

            setStatus({
                type: "error",
                text: "The message could not be submitted. Please try again later.",
            });
        } finally {
            setSending(false);
        }
    }

    if (loading) {
        return (
            <Layout>
                <main className="container py-5" aria-live="polite">
                    <p>Loading...</p>
                </main>
            </Layout>
        );
    }

    if (loadError || !settings) {
        return (
            <Layout>
                <main className="container py-5">
                    <p role="alert">
                        {loadError || "Contact settings are unavailable."}
                    </p>
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageHeader title={settings.page_title} />

            <main className="container bg-white pt-5">
                <div className="row px-3 pb-2">
                    {[
                        {
                            key: "address",
                            label: settings.address_label,
                            value: settings.address,
                            icon: "fa fa-2x fa-map-marker-alt",
                        },
                        {
                            key: "phone",
                            label: settings.phone_label,
                            value: settings.phone,
                            icon: "fa fa-2x fa-phone-alt",
                        },
                        {
                            key: "email",
                            label: settings.email_label,
                            value: settings.email,
                            icon: "far fa-2x fa-envelope",
                        },
                    ].filter((item) => item.value).map((item) => (
                        <div
                            key={item.key}
                            className="col-sm-4 text-center mb-3"
                        >
                            <i
                                className={`${item.icon} mb-3 text-primary`}
                                aria-hidden="true"
                            />

                            <h4 className="font-weight-bold">
                                {item.label}
                            </h4>

                            {item.key === "phone" ? (
                                <p>
                                    <a href={`tel:${item.value}`}>
                                        {item.value}
                                    </a>
                                </p>
                            ) : item.key === "email" ? (
                                <p>
                                    <a href={`mailto:${item.value}`}>
                                        {item.value}
                                    </a>
                                </p>
                            ) : (
                                <p>{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                <section className="col-md-12 pb-5">
                    <div className="contact-form">
                        {status && (
                            <div
                                className={`alert ${
                                    status.type === "success"
                                        ? "alert-success"
                                        : "alert-danger"
                                }`}
                                role="status"
                            >
                                {status.text}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="control-group mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder={settings.name_placeholder}
                                    aria-label={settings.name_placeholder}
                                    autoComplete="name"
                                    maxLength={120}
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="control-group mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder={settings.email_placeholder}
                                    aria-label={settings.email_placeholder}
                                    autoComplete="email"
                                    maxLength={254}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="control-group mb-3">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder={settings.subject_placeholder}
                                    aria-label={settings.subject_placeholder}
                                    maxLength={200}
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="control-group mb-3">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows={8}
                                    placeholder={settings.message_placeholder}
                                    aria-label={settings.message_placeholder}
                                    maxLength={10000}
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={sending}
                            >
                                {sending
                                    ? "Sending..."
                                    : settings.submit_label}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
