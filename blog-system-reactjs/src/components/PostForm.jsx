
import { useEffect, useRef, useState } from "react";

export function PostForm({
    initial,
    busy,
    error,
    submitLabel,
    onSubmit,
    settings,
}) {
    const [form, setForm] = useState(
        initial ?? {
            title: "",
            topic: "",
            imageUrl: "",
            blog_text: "",
        }
    );

    const [localErr, setLocalErr] = useState(null);
    const titleRef = useRef(null);

    useEffect(() => {
        titleRef.current?.focus();
    }, []);

    function set(field) {
        return (event) => {
            const value = event.target.value;

            setForm((previous) => ({
                ...previous,
                [field]: value,
            }));

            setLocalErr(null);
        };
    }

    function submit(event) {
        event.preventDefault();

        const title = form.title.trim();
        const content = form.blog_text.trim();
        const topic = form.topic.trim();

        if (title.length < settings.min_title_length) {
            setLocalErr(settings.title_validation_message);
            return;
        }

        if (content.length < settings.min_content_length) {
            setLocalErr(settings.content_validation_message);
            return;
        }

        setLocalErr(null);

        onSubmit({
            title,
            topic: topic || settings.default_topic,
            imageUrl: form.imageUrl.trim() || null,
            blog_text: content,
        });
    }

    const msg = localErr || error;

    return (
        <form onSubmit={submit} noValidate>
            {msg && (
                <div className="alert alert-danger" role="alert">
                    {msg}
                </div>
            )}

            <input
                ref={titleRef}
                className="form-control mb-3"
                placeholder={settings.title_placeholder}
                aria-label={settings.title_placeholder}
                value={form.title}
                onChange={set("title")}
                maxLength={settings.max_title_length}
                required
            />

            <input
                className="form-control mb-3"
                placeholder={settings.topic_placeholder}
                aria-label={settings.topic_placeholder}
                value={form.topic}
                onChange={set("topic")}
                maxLength={settings.max_topic_length}
            />

            <input
                className="form-control mb-3"
                type="url"
                placeholder={settings.image_placeholder}
                aria-label={settings.image_placeholder}
                value={form.imageUrl ?? ""}
                onChange={set("imageUrl")}
            />

            <textarea
                className="form-control mb-3"
                rows={settings.rows_count}
                placeholder={settings.content_placeholder}
                aria-label={settings.content_placeholder}
                value={form.blog_text}
                onChange={set("blog_text")}
                required
            />

            <button
                className="btn btn-primary"
                type="submit"
                disabled={busy}
            >
                {submitLabel}
            </button>
        </form>
    );
}

