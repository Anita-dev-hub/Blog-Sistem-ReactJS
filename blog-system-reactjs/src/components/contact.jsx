export default function Contact() {
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
                    {/* Navbar Start */}
                    <div className="container p-0">
                        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
                            <a href="" className="navbar-brand d-block d-lg-none">
                                Navigation
                            </a>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav m-auto">
                                    <a href="index.html" className="nav-item nav-link">
                                        Home
                                    </a>
                                    <a href="about.html" className="nav-item nav-link">
                                        About
                                    </a>
                                    <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages
                                        </a>
                                        <div className="dropdown-menu">
                                            <a href="blog.html" className="dropdown-item">
                                                Blog Grid
                                            </a>
                                            <a href="single.html" className="dropdown-item">
                                                Blog Detail
                                            </a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link active">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* Navbar End */}
                    {/* Page Header Start */}
                    <div className="container py-5 px-2 bg-primary">
                        <div className="row py-5 px-4">
                            <div className="col-sm-6 text-center text-md-left">
                                <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">
                                    Contact Me
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
                                    <h4 className="m-0 text-white">Contact Me</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}
                    {/* Contact Start */}
                    <div className="container bg-white pt-5">
                        <div className="row px-3 pb-2">
                            <div className="col-sm-4 text-center mb-3">
                                <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary" />
                                <h4 className="font-weight-bold">Address</h4>
                                <p>123 Street, New York, USA</p>
                            </div>
                            <div className="col-sm-4 text-center mb-3">
                                <i className="fa fa-2x fa-phone-alt mb-3 text-primary" />
                                <h4 className="font-weight-bold">Phone</h4>
                                <p>+012 345 6789</p>
                            </div>
                            <div className="col-sm-4 text-center mb-3">
                                <i className="far fa-2x fa-envelope mb-3 text-primary" />
                                <h4 className="font-weight-bold">Email</h4>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="col-md-12 pb-5">
                            <div className="contact-form">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            required="required"
                                            data-validation-required-message="Please enter your name"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Your Email"
                                            required="required"
                                            data-validation-required-message="Please enter your email"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder="Subject"
                                            required="required"
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control"
                                            rows={8}
                                            id="message"
                                            placeholder="Message"
                                            required="required"
                                            data-validation-required-message="Please enter your message"
                                            defaultValue={""}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            id="sendMessageButton"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Contact End */}
                    {/* Footer Start */}
                    <div className="container py-4 bg-secondary text-center">
                        <p className="m-0 text-white">
                            ©{" "}
                            <a className="text-white font-weight-bold" href="#">
                                Your Site Name
                            </a>
                            . All Rights Reserved. Designed by{" "}
                            <a
                                className="text-white font-weight-bold"
                                href="https://htmlcodex.com"
                            >
                                HTML Codex
                            </a>
                        </p>
                    </div>
                    {/* Footer End */}
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