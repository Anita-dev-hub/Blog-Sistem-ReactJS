export default function Blog() {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Bloggy - Personal Blog Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <meta content="Free Website Template" name="keywords" />
            <meta content="Free Website Template" name="description" />
            {/* Favicon */}
            <link href="img/favicon.ico" rel="icon" />
            {/* Google Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:300;400;600;700;800&display=swap"
                rel="stylesheet"
            />
            {/* Font Awesome */}
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                rel="stylesheet"
            />
            {/* Customized Bootstrap Stylesheet */}
            <link href="css/style.css" rel="stylesheet" />
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
                        <img
                            className="mx-auto d-block w-75 bg-primary img-fluid rounded-circle mb-4 p-3"
                            src="img/profile.jpg"
                            alt="Image"
                        />
                        <h1 className="font-weight-bold">Kate Glover</h1>
                        <p className="mb-4">
                            Justo stet no accusam stet invidunt sanctus magna clita vero eirmod,
                            sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam
                            justo
                        </p>
                        <div className="d-flex justify-content-center mb-5">
                            <a className="btn btn-outline-primary mr-2" href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="btn btn-outline-primary mr-2" href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="btn btn-outline-primary mr-2" href="#">
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="btn btn-outline-primary mr-2" href="#">
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                        <a href="" className="btn btn-lg btn-block btn-primary mt-auto">
                            Hire Me
                        </a>
                    </div>
                    <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
                        <i className="fas fa-2x fa-angle-double-right text-primary" />
                    </div>
                </div>
                <div className="content">
                    {/* Page Header Start */}
                    <div className="container py-5 px-2 bg-primary">
                        <div className="row py-5 px-4">
                            <div className="col-sm-6 text-center text-md-left">
                                <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
                                    My Blog
                                </h1>
                            </div>
                            <div className="col-sm-6 text-center text-md-right">
                                <div className="d-inline-flex pt-2">
                                    <h4 className="m-0 text-white">
                                        <a className="text-white" href="">
                                            Home
                                        </a>
                                    </h4>
                                    <h4 className="m-0 text-white px-2">/</h4>
                                    <h4 className="m-0 text-white">My Blog</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}
                    {/* Blog List Start */}
                    <div className="container bg-white pt-5">
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-1.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-2.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-3.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-4.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-5.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row blog-item px-3 pb-5">
                            <div className="col-md-5">
                                <img
                                    className="img-fluid mb-4 mb-md-0"
                                    src="img/blog-6.jpg"
                                    alt="Image"
                                />
                            </div>
                            <div className="col-md-7">
                                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                                    Lorem ipsum dolor sit amet
                                </h3>
                                <div className="d-flex mb-3">
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </small>
                                    <small className="mr-2 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </small>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                                    suscipit orci velit id libero
                                </p>
                                <a className="btn btn-link p-0" href="">
                                    Read More <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="row px-3 pb-5">
                            <nav aria-label="Page navigation">
                                <ul className="pagination m-0 mx-3">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* Blog List End */}
                </div>
            </div>
            {/* Back to Top */}
            <a href="#" className="back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
            {/* JavaScript Libraries */}
            {/* Contact Javascript File */}
            {/* Template Javascript */}
        </>
    )
}