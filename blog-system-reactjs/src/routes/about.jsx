
import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHeader } from "../components/layout.jsx";

export const Route = createFileRoute("/about")({
    component: About,
});

const skills = [
    ["Adaptability", 80],
    ["Research", 90],
    ["Editing", 100],
];

function About() {
    return (
        <Layout>
            <PageHeader title="About Me" />

            <div className="container bg-white pt-5">
                <div className="row px-3 pb-5">
                    <div className="col-md-12">
                        <h2 className="mb-4 font-weight-bold">
                            Article writer with 10 years of experience
                        </h2>

                        <img
                            className="img-fluid float-left w-50 mr-4 mb-3"
                            src="/img/about.jpg"
                            alt="About"
                        />

                        <p className="m-0">
                            I write about the things I love: thoughtful design, slow travel,
                            good food and the books that shape how I think. This blog is my
                            notebook — a place to share what I learn along the way.
                        </p>
                    </div>

                    <div className="col-md-12 pt-4">
                        <div className="d-flex flex-column skills">
                            {skills.map(([name, value]) => (
                                <div key={name} className="progress w-100 mb-4">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${value}%` }}
                                        aria-valuenow={value}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        {name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
