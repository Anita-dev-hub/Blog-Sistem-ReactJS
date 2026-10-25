
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout, PageHeader } from "../components/layout.jsx";

export const Route = createFileRoute("/contact")({
    component: Contact,
});

function Contact() {
    const [sent, setSent] = useState(false);

    return (
        <Layout>
            <PageHeader title="Contact" />

            <div className="container bg-white pt-5">
                <div className="row px-3 pb-2">
                    <div className="col-sm-4 text-center mb-3">
                        <i
                            className="fa fa-2x fa-map-marker-alt mb-3 text-primary"
                            aria-hidden="true"
                        />
                        <h4 className="font-weight-bold">Address</h4>
                        <p>123 Street, New York, USA</p>
                    </div>

                    <div className="col-sm-4 text-center mb-3">
                        <i
                            className="fa fa-2x fa-phone-alt mb-3 text-primary"
                            aria-hidden="true"
                        />
                        <h4 className="font-weight-bold">Phone</h4>
                        <p>+012 345 6789</p>
                    </div>

                    <div className="col-sm-4 text-center mb-3">
                        <i
                            className="far fa-2x fa-envelope mb-3 text-primary"
                            aria-hidden="true"
                        />
                        <h4 className="font-weight-bold">Email</h4>
                        <p>info@example.com</p>
                    </div>
                </div>

                <div className="col-md-12 pb-5">
                    <div className="contact-form">
                        {sent ? (
                            <div className="alert alert-info" role="status">
                                The form has been submitted locally, but the message has not been sent via email. Integration with a messaging service is required for actual delivery.
                            </div>
                        ) : (
                            <form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    setSent(true);
                                }}
                            >
                                <div className="control-group mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Your Name"
                                        aria-label="Your Name"
                                        autoComplete="name"
                                        required
                                    />
                                </div>

                                <div className="control-group mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        aria-label="Your Email"
                                        autoComplete="email"
                                        required
                                    />
                                </div>

                                <div className="control-group mb-3">
                                    <input
                                        type="text"
                                        name="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                        aria-label="Subject"
                                        required
                                    />
                                </div>

                                <div className="control-group mb-3">
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows={8}
                                        placeholder="Message"
                                        aria-label="Message"
                                        required
                                    />
                                </div>

                                <button className="btn btn-primary" type="submit">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
