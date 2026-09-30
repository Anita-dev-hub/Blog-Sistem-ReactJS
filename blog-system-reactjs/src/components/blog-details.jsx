export default function BlogDetails() {
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
                                            className="nav-link dropdown-toggle active"
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
                                    <a href="contact.html" className="nav-item nav-link">
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
                                    Blog Detail
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
                                    <h4 className="m-0 text-white">Blog Detail</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Page Header End */}
                    {/* Blog Detail Start */}
                    <div className="container py-5 px-2 bg-white">
                        <div className="row px-4">
                            <div className="col-12">
                                <img className="img-fluid mb-4" src="img/detail.jpg" alt="Image" />
                                <h2 className="mb-3 font-weight-bold">
                                    Nonumy ipsum takimata et sanct
                                </h2>
                                <div className="d-flex">
                                    <p className="mr-3 text-muted">
                                        <i className="fa fa-calendar-alt" /> 01-Jan-2045
                                    </p>
                                    <p className="mr-3 text-muted">
                                        <i className="fa fa-folder" /> Web Design
                                    </p>
                                    <p className="mr-3 text-muted">
                                        <i className="fa fa-comments" /> 15 Comments
                                    </p>
                                </div>
                                <p>
                                    Clita duo sadipscing amet ea ut kasd amet dolore, sed erat at
                                    dolore vero tempor et sit amet, amet amet elitr et consetetur ea
                                    duo. Gubergren tempor rebum clita at sit diam. Ea sadipscing
                                    voluptua et sit diam diam sed, gubergren magna ipsum lorem clita
                                    dolores nonumy dolor. Gubergren duo invidunt elitr amet labore
                                    dolores justo sanctus nonumy. Accusam diam tempor at ea clita
                                    dolores dolor et ipsum, dolor voluptua consetetur gubergren sit,
                                    no consetetur kasd vero invidunt clita dolore elitr eos, accusam
                                    amet et labore sed sadipscing accusam labore dolores. Eirmod no
                                    lorem sed dolor nonumy consetetur tempor sed.
                                </p>
                                <h3 className="mb-3 font-weight-bold">Est dolor lorem et ea</h3>
                                <img
                                    className="w-50 float-left mr-4 mb-3"
                                    src="img/blog-1.jpg"
                                    alt="Image"
                                />
                                <p>
                                    Diam dolor est labore duo invidunt ipsum clita et, sed et lorem
                                    voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit
                                    kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos.
                                    Clita no magna no dolor erat diam tempor rebum consetetur, sanctus
                                    labore sed nonumy diam lorem amet eirmod. No at tempor sea diam
                                    kasd, takimata ea nonumy elitr sadipscing gubergren erat.
                                    Gubergren at lorem invidunt sadipscing rebum sit amet ut ut,
                                    voluptua diam dolores at sadipscing stet. Clita dolor amet dolor
                                    ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor
                                    dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed
                                    et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et.
                                    Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo
                                    est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos
                                    labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam
                                    takimata sea kasd dolores diam, amet et est accusam labore eirmod
                                    vero et voluptua. Amet labore clita duo et no. Rebum voluptua
                                    magna eos magna, justo gubergren labore sit voluptua eos. Dolores
                                    et no stet magna et gubergren amet dolor sit, lorem dolore est
                                    vero et.
                                </p>
                            </div>
                            <div className="col-12 py-4">
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                                <a href="" className="btn btn-sm btn-outline-primary mb-1">
                                    Lorem
                                </a>
                            </div>
                            <div className="col-12 py-4">
                                <div className="btn-group btn-group-lg w-100">
                                    <button type="button" className="btn btn-outline-primary">
                                        <i className="fa fa-angle-left mr-2" /> Previous
                                    </button>
                                    <button type="button" className="btn btn-outline-primary">
                                        Next
                                        <i className="fa fa-angle-right ml-2" />
                                    </button>
                                </div>
                            </div>
                            <div className="col-12 py-4">
                                <h3 className="mb-4 font-weight-bold">3 Comments</h3>
                                <div className="media mb-4">
                                    <img
                                        src="img/user.jpg"
                                        alt="Image"
                                        className="mr-3 mt-1 rounded-circle"
                                        style={{ width: 60 }}
                                    />
                                    <div className="media-body">
                                        <h4>
                                            John Doe{" "}
                                            <small>
                                                <i>01 Jan 2045 at 12:00pm</i>
                                            </small>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <button className="btn btn-sm btn-light">Reply</button>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <img
                                        src="img/user.jpg"
                                        alt="Image"
                                        className="mr-3 mt-1 rounded-circle"
                                        style={{ width: 60 }}
                                    />
                                    <div className="media-body">
                                        <h4>
                                            John Doe{" "}
                                            <small>
                                                <i>01 Jan 2045 at 12:00pm</i>
                                            </small>
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </p>
                                        <button className="btn btn-sm btn-light">Reply</button>
                                        <div className="media mt-4">
                                            <img
                                                src="img/user.jpg"
                                                alt="Image"
                                                className="mr-3 mt-1 rounded-circle"
                                                style={{ width: 60 }}
                                            />
                                            <div className="media-body">
                                                <h4>
                                                    John Doe{" "}
                                                    <small>
                                                        <i>01 Jan 2045 at 12:00pm</i>
                                                    </small>
                                                </h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua.
                                                </p>
                                                <button className="btn btn-sm btn-light">Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <h3 className="mb-4 font-weight-bold">Leave a comment</h3>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name *</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="website">Website</label>
                                        <input type="url" className="form-control" id="website" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            cols={30}
                                            rows={5}
                                            className="form-control"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            defaultValue="Leave Comment"
                                            className="btn btn-primary"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* Blog Detail End */}
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