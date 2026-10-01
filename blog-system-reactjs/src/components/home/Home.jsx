export default function Home() {
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
                    {/* Carousel Start */}
                    <div className="container p-0">
                        <div id="blog-carousel" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h2 className="mb-3 text-white font-weight-bold">
                                            Lorem ipsum dolor sit amet
                                        </h2>
                                        <div className="d-flex text-white">
                                            <small className="mr-2">
                                                <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder" /> Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments" /> 15 Comments
                                            </small>
                                        </div>
                                        <a href="" className="btn btn-lg btn-outline-light mt-4">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h2 className="text-white font-weight-bold">
                                            Lorem ipsum dolor sit amet
                                        </h2>
                                        <div className="d-flex">
                                            <small className="mr-2">
                                                <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder" /> Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments" /> 15 Comments
                                            </small>
                                        </div>
                                        <a href="" className="btn btn-lg btn-outline-light mt-4">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="w-100" src="img/carousel-3.jpg" alt="Image" />
                                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                        <h2 className="text-white font-weight-bold">
                                            Lorem ipsum dolor sit amet
                                        </h2>
                                        <div className="d-flex">
                                            <small className="mr-2">
                                                <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-folder" /> Web Design
                                            </small>
                                            <small className="mr-2">
                                                <i className="fa fa-comments" /> 15 Comments
                                            </small>
                                        </div>
                                        <a href="" className="btn btn-lg btn-outline-light mt-4">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#blog-carousel"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon" />
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#blog-carousel"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon" />
                            </a>
                        </div>
                    </div>
                    {/* Carousel End */}
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
                    </div>
                    {/* Blog List End */}
                    {/* Subscribe Start */}
                    <div className="container py-5 px-4 bg-secondary text-center">
                        <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
                        <p className="text-white">
                            Subscribe and get my latest article in your inbox
                        </p>
                        <form className="form-inline justify-content-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Subscribe End */}
                    {/* Blog List Start */}
                    <div className="container bg-white pt-5">
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