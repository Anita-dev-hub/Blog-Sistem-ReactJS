
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "../lib/auth.jsx";
import { supabase } from "../auth/client.js";

const LayoutContext = createContext(null);

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);
  const [loadingSettings, setLoadingSettings] = useState(true);

  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const qc = useQueryClient();

  useEffect(() => {
    let active = true;

    async function loadSettings() {
      const { data, error } = await supabase
        .from("layout_settings")
        .select("*")
        .eq("id", 1)
        .maybeSingle();

      if (!active) return;

      if (error) {
        setError(error.message);
      } else if (!data) {
        setError("Layout settings have not been configured.");
      } else {
        setSettings(data);
      }

      setLoadingSettings(false);
    }

    loadSettings();

    return () => {
      active = false;
    };
  }, []);

  async function handleSignOut() {
    const { error } = await signOut();

    if (error) {
      console.error("Sign out failed:", error.message);
      return;
    }

    qc.clear();
    await navigate({ to: "/login", replace: true });
  }

  if (loadingSettings) {
    return (
      <main className="container py-5" aria-live="polite">
        <p>Loading...</p>
      </main>
    );
  }

  if (error || !settings) {
    return (
      <main className="container py-5">
        <p role="alert">
          {error || "Layout settings are unavailable."}
        </p>
      </main>
    );
  }

  const navLinks = Array.isArray(settings.nav_links)
    ? settings.nav_links
    : [];

  const socialLinks = Array.isArray(settings.social_links)
    ? settings.social_links
    : [];

  const navClass = "nav-item nav-link";

  function renderNavigation(className) {
    return (
      <>
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={className}
            activeProps={{ className: "active" }}
            activeOptions={{
              exact: item.exact === true,
            }}
          >
            {item.label}
          </Link>
        ))}

        {loading ? null : user ? (
          <button
            type="button"
            className={`${className} border-0 bg-transparent`}
            onClick={handleSignOut}
          >
            {settings.sign_out_label} ({user.email})
          </button>
        ) : (
          <Link to="/login" className={className}>
            {settings.sign_in_label}
          </Link>
        )}
      </>
    );
  }

  return (
    <LayoutContext.Provider value={settings}>
      <div className="wrapper">
        <aside className="sidebar">
          <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
            {settings.profile_image_url && (
              <img
                className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3"
                src={settings.profile_image_url}
                alt={settings.profile_image_alt || ""}
              />
            )}

            <h1 className="font-weight-bold">
              {settings.profile_name}
            </h1>

            <p className="mb-4">
              {settings.profile_description}
            </p>

            {socialLinks.length > 0 && (
              <div className="d-flex justify-content-center mb-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    className="btn btn-outline-primary mr-2"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <i
                      className={social.icon}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            )}

            <div className="d-flex flex-column mb-4">
              {renderNavigation("nav-link")}
            </div>

            <Link
              to="/new"
              className="btn btn-lg btn-block btn-primary mt-auto"
            >
              {settings.write_button_label}
            </Link>
          </div>

          <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
            <i className="fas fa-2x fa-angle-double-right text-primary" />
          </div>
        </aside>

        <div className="content">
          <div className="container p-0">
            <nav
              className="navbar navbar-expand-lg bg-secondary navbar-dark"
              style={{
                display: "flex",
                visibility: "visible",
              }}
            >
              <span className="navbar-brand d-block d-lg-none">
                {settings.mobile_nav_label}
              </span>

              <button
                type="button"
                className="navbar-toggler"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className={`collapse navbar-collapse justify-content-between ${open ? "show" : ""
                  }`}
              >
                <div className="navbar-nav m-auto">
                  {renderNavigation(navClass)}
                </div>
              </div>
            </nav>
          </div>

          {children}

          <footer className="container py-4 bg-secondary text-center">
            <p className="m-0 text-white">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                className="text-white font-weight-bold"
                to="/"
              >
                {settings.footer_brand}
              </Link>
              . {settings.footer_rights_text}

              {settings.footer_designer_name &&
                settings.footer_designer_url && (
                  <>
                    {" "}Designed by{" "}
                    <a
                      className="text-white font-weight-bold"
                      href={settings.footer_designer_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {settings.footer_designer_name}
                    </a>
                  </>
                )}
            </p>
            
            {settings.github_repository_url && (
              <p className="mt-2 mb-0">
                <a
                  className="text-white font-weight-bold"
                  href={settings.github_repository_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            )}

          </footer>
        </div>
      </div>
    </LayoutContext.Provider>
  );
}

export function PageHeader({ title }) {
  const settings = useContext(LayoutContext);

  if (!settings) return null;

  return (
    <div className="container py-5 px-2 bg-primary">
      <div className="row py-5 px-4">
        <div className="col-sm-6 text-center text-md-left">
          <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
            {title}
          </h1>
        </div>

        <div className="col-sm-6 text-center text-md-right">
          <div className="d-inline-flex pt-2">
            <h4 className="m-0 text-white">
              <Link className="text-white" to="/">
                {settings.home_label}
              </Link>
            </h4>

            <h4 className="m-0 text-white px-2">/</h4>

            <h4 className="m-0 text-white">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
