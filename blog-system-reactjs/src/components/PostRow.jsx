import { Link } from "@tanstack/react-router";
import { excerpt, formatDate, imgOf } from "../lib/blog";
export function PostRow({ post }) {
    const authorName = post.author_email
        ? post.author_email
        //.split("@")[0]
        : null;

    return (
        <div className="row blog-item px-3 pb-5">
            <div className="col-md-5">
                <img className="img-fluid mb-4 mb-md-0" src={imgOf(post.imageUrl)} alt={post.title} />
            </div>
            <div className="col-md-7">
                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">{post.title}</h3>
                <div className="d-flex mb-3">
                    <small className="mr-2 text-muted">
                        <i className="fa fa-calendar-alt"></i> {formatDate(post.created_at)}
                    </small>
                    <small className="mr-2 text-muted">
                        <i className="fa fa-folder"></i> {post.topic}
                    </small>
                    {authorName && (
                        <small className="mr-2 text-muted">
                            <i className="fa fa-user"></i>{" "}
                            {authorName}
                        </small>
                    )}
                </div>
                <p>{excerpt(post.blog_text)}</p>
                <Link className="btn btn-link p-0" to="/blog/$id" params={{ id: post.id }}>
                    Read More <i className="fa fa-angle-right"></i>
                </Link>
            </div>
        </div>
    );
}
