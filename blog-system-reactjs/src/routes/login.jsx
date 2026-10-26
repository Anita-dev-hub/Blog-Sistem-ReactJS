
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

import { Layout, PageHeader } from "../components/layout.jsx";
import { supabase } from "../auth/client.js";

export const Route = createFileRoute("/login")({
    component: Login,
});

function Login() {
    const navigate = useNavigate();

    const [mode, setMode] = useState("in");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState(null);
    const [busy, setBusy] = useState(false);

    async function submit(event) {
        event.preventDefault();
        setMsg(null);

        const normalizedEmail = email.trim();

        if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
            setMsg("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            setMsg("Password must be at least 6 characters.");
            return;
        }

        setBusy(true);

        try {
            if (mode === "in") {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: normalizedEmail,
                    password,
                });

                if (error) {
                    console.error("Supabase login error:", {
                    message: error.message,
                    status: error.status,
                    code: error.code,
                });
                    setMsg(error.message);
                    return;
                }

                if (!data.session) {
                setMsg("Login failed: no session was returned.");
                return;
                }

                await navigate({ to: "/new" });
            } else {
                const { data, error } = await supabase.auth.signUp({
                    email: normalizedEmail,
                    password,
                    options: {
                        emailRedirectTo: `${window.location.origin}/login`,
                    },
                });

                if (error) {
                    console.error("Supabase signup error:", error);
                    setMsg(error.message);
                    return;
                }

                if (data.session) {
                    await navigate({ to: "/new" });
                } else {
                    setMsg(
                        "Check your email to confirm your account, then sign in."
                    );
                }
            }
        } catch (error){
            console.error("Unexpected authentication error:", error);
        setMsg(error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.");
        } finally {
            setBusy(false);
        }
    }

    return (
        <Layout>
            <PageHeader title={mode === "in" ? "Sign In" : "Sign Up"} />

            <div className="container bg-white py-5">
                <div className="col-md-8 mx-auto">
                    {msg && (
                        <div className="alert alert-info" role="status">
                            {msg}
                        </div>
                    )}

                    <form onSubmit={submit} noValidate>
                        <input
                            className="form-control mb-3"
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            aria-label="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            disabled={busy}
                        />

                        <input
                            className="form-control mb-3"
                            type="password"
                            name="password"
                            placeholder="Password"
                            autoComplete={
                                mode === "in" ? "current-password" : "new-password"
                            }
                            aria-label="Password"
                            minLength={6}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            disabled={busy}
                        />

                        <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={busy}
                        >
                            {busy
                                ? "Please wait..."
                                : mode === "in"
                                    ? "Sign In"
                                    : "Create Account"}
                        </button>
                    </form>

                    <button
                        type="button"
                        className="btn btn-link mt-3 p-0"
                        disabled={busy}
                        onClick={() => {
                            setMode((current) => (current === "in" ? "up" : "in"));
                            setMsg(null);
                        }}
                    >
                        {mode === "in"
                            ? "No account? Sign up"
                            : "Already have an account? Sign in"}
                    </button>
                </div>
            </div>
        </Layout>
    );
}
