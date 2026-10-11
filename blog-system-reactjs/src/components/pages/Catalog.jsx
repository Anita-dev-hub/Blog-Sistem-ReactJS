import { useEffect, useState } from 'react';
import request from '../../utils/request.js';
import { Blog } from './Blog.jsx';
//import "./Catalog.scss";

export default function Catalog({
    id,
    title,
    topic,
    imageUrl,
}) {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        request("/blogs?order=created_at.desc")
            .then(setBlogs)
            .catch((error) => alert(error))
    }, []);

    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    // useEffect(() => {
    // let active = true;

    // async function loadPosts() {
    //   try {
    //     setLoading(true);
    //     setError("");

    //     const data = await get("/posts");

    //     if (active) {
    //       setPosts(Array.isArray(data) ? data : data.content ?? []);
    //     }
    //   } catch (err) {
    //     if (active) {
    //       setError(err.message || "Failed to load posts.");
    //     }
    //   } finally {
    //     if (active) {
    //       setLoading(false);
    //     }
    //   }
    // }

    // loadPosts();

    // return () => {
    //   active = false;
    // };

    // }, []);

    return (<div className="wrapper"> <main className="content"> <section className="catalog-header"> <div className="container py-5"> <h1 className="text-white text-uppercase font-weight-bold">
        Blog Catalog </h1> </div> </section>

        <section className="container bg-white py-5">
            {loading && <p>Loading blogs...</p>}

            {error && (
                <p className="text-danger" role="alert">
                    {error}
                </p>
            )}

            {!loading && !error && blogs.length === 0 && (
                <p>No blogs available.</p>
            )}

            {!loading &&
                !error &&
                blogs.map((blog) => (
                    <article
                        className="row blog-item px-3 pb-5"
                        key={blog.id}
                    >
                        <div className="col-md-5">
                            {blog.imageUrl && (
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    loading="lazy"
                                />
                            )}
                        </div>

                        <div className="col-md-7">
                            <h3 className="font-weight-bold">
                                {blog.title}
                            </h3>

                            <div className="d-flex flex-wrap mb-3">
                                {blog.createdAt && (
                                    <small className="mr-3 text-muted">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </small>
                                )}

                                {blog.category?.name && (
                                    <small className="mr-3 text-muted">
                                        {blog.category.name}
                                    </small>
                                )}
                            </div>

                            <p>{blog.excerpt ?? blog.content}</p>

                            <a
                                className="btn btn-link p-0"
                                href={`/blogs/${blog.id}`}
                            >
                                Read More
                                <i className="fa fa-angle-right ml-1" />
                            </a>
                        </div>
                    </article>
                ))}
        </section>
    </main>
    </div>

    );
}
