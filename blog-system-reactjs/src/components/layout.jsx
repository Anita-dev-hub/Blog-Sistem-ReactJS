import { Link, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useAuth } from "../lib/auth.jsx";
export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const email = user?.email ?? null;
  const navigate = useNavigate();
  const qc = useQueryClient();
  const nav = "nav-item nav-link";
  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
          <img
            className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3"
            src="/img/profile.jpg"
            alt="Profile"
          />
          <h1 className="font-weight-bold">Kate Glover</h1>
          <p className="mb-4">
            Stories about design, travel, food and the small things that make life good.
          </p>
          <div className="d-flex justify-content-center mb-5">
            <a className="btn btn-outline-primary mr-2" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-primary mr-2" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-primary mr-2" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-primary mr-2" href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <Link to="/new" className="btn btn-lg btn-block btn-primary mt-auto">
            Write a Post
          </Link>
        </div>
        <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
          <i className="fas fa-2x fa-angle-double-right text-primary"></i>
        </div>
      </div>
      <div className="content">
        <div className="container p-0">
          <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
            <span className="navbar-brand d-block d-lg-none">Navigation</span>
            <button type="button" className="navbar-toggler" onClick={() => setOpen(!open)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-between ${open ? "show" : ""}`}
            >
              <div className="navbar-nav m-auto">
                <Link
                  to="/"
                  className={nav}
                  activeProps={{ className: "active" }}
                  activeOptions={{ exact: true }}
                >
                  Home
                </Link>
                <Link to="/about" className={nav} activeProps={{ className: "active" }}>
                  About
                </Link>
                <Link to="/blog" className={nav} activeProps={{ className: "active" }}>
                  Blog
                </Link>
                <Link to="/new" className={nav} activeProps={{ className: "active" }}>
                  Write
                </Link>
                <Link to="/contact" className={nav} activeProps={{ className: "active" }}>
                  Contact
                </Link>
                {email ? (
                  <a
                    href="#"
                    className={nav}
                    onClick={(e) => {
                      e.preventDefault();
                      signOut().then(() => {
                        qc.invalidateQueries();
                        navigate({ to: "/login", replace: true });
                      });
                    }}
                  >
                    Sign out ({email})
                  </a>
                ) : (
                  <Link to="/login" className={nav} activeProps={{ className: "active" }}>
                    Sign in
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </div>
        {children}
        <div className="container py-4 bg-secondary text-center">
          <p className="m-0 text-white">
            &copy;{" "}
            <Link className="text-white font-weight-bold" to="/">
              Bloggy
            </Link>
            . All Rights Reserved. Designed by{" "}
            <a className="text-white font-weight-bold" href="https://htmlcodex.com">
              HTML Codex
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export function PageHeader({ title }) {
  return (
    <div className="container py-5 px-2 bg-primary">
      <div className="row py-5 px-4">
        <div className="col-sm-6 text-center text-md-left">
          <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">{title}</h1>
        </div>
        <div className="col-sm-6 text-center text-md-right">
          <div className="d-inline-flex pt-2">
            <h4 className="m-0 text-white">
              <Link className="text-white" to="/">
                Home
              </Link>
            </h4>
            <h4 className="m-0 text-white px-2">/</h4>
            <h4 className="m-0 text-white">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}