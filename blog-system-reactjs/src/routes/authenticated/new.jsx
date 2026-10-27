
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Layout, PageHeader } from "../../components/layout";
import { PostForm } from "../../components/PostForm";
import { supabase } from "../../auth/client.js";

export const Route = createFileRoute("/authenticated/new")({
    component: NewPost,
});

function NewPost() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [settings, setSettings] = useState(null);
    const [settingsLoading, setSettingsLoading] = useState(true);
    const [settingsError, setSettingsError] = useState(null);
    const [err, setErr] = useState(null);
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        let active = true;

        async function loadSettings() {
            const { data, error } = await supabase
                .from("new_post_settings")
                .select("*")
                .eq("id", 1)
                .maybeSingle();

            if (!active) return;

            if (error) {
                setSettingsError(error.message);
            } else if (!data) {
                setSettingsError("Page settings have not been configured.");
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

    async function create(values) {
        if (!settings) return;

        setBusy(true);
        setErr(null);

        try {
            const { data, error } = await supabase
                .from("blogs")
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
            setErr(
                error.message || settings.publish_error_message
            );
        } finally {
            setBusy(false);
        }
    }

    return (
        <Layout>
            {settingsLoading ? (
                <main className="container py-5" aria-live="polite">
                    <p>Loading...</p>
                </main>
            ) : settingsError || !settings ? (
                <main className="container py-5">
                    <p role="alert">
                        {settingsError || "Page settings are unavailable."}
                    </p>
                </main>
            ) : (
                <>
                    <PageHeader title={settings.page_title} />

                    <main className="container bg-white py-5">
                        <div className="col-md-10 mx-auto">
                            <PostForm
                                busy={busy}
                                error={err}
                                submitLabel={
                                    busy
                                        ? settings.publishing_label
                                        : settings.submit_label
                                }
                                onSubmit={create}
                            />
                        </div>
                    </main>
                </>
            )}
        </Layout>
    );
}
