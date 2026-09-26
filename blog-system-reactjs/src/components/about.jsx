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
              <a href="about.html" className="nav-item nav-link active">
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
              About Me
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
              <h4 className="m-0 text-white">About Me</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* About Start */}
      <div className="container bg-white pt-5">
        <div className="row px-3 pb-5">
          <div className="col-md-12">
            <h2 className="mb-4 font-weight-bold">
              Article writer with 10 years of experience
            </h2>
            <img
              className="img-fluid float-left w-50 mr-4 mb-3"
              src="img/about.jpg"
              alt="Image"
            />
            <p className="m-0">
              Takimata lorem et ut et diam amet dolor gubergren, amet dolor
              eirmod sea sea invidunt, sed no sed diam ipsum ut et. Sit nonumy
              est ut consetetur sed, labore dolor ipsum sed ea dolor lorem erat
              et erat, consetetur sed labore duo voluptua rebum sed gubergren.
              Dolores nonumy sanctus erat clita stet sed, dolore justo diam eos
              aliquyam diam. Clita nonumy rebum dolor dolor eos takimata labore
              diam sed, et voluptua et invidunt sanctus, elitr dolor nonumy
              tempor dolor elitr lorem no dolor ipsum, ut at gubergren dolor est
              aliquyam stet, et sea takimata rebum labore erat duo invidunt
              lorem. At takimata stet diam dolore accusam, kasd at diam aliquyam
              diam sed est dolor takimata. Sadipscing rebum diam ea et tempor,
              eirmod et et invidunt voluptua et dolor sit. Labore labore clita
              et amet sea sit et, est ipsum eirmod amet voluptua dolore, diam
              eirmod kasd lorem gubergren clita at amet, sea accusam vero amet
              lorem eos sed diam sit amet, nonumy ipsum et tempor magna dolores
              aliquyam vero eos ipsum. Ipsum ipsum sadipscing diam aliquyam diam
              et ipsum eos vero, gubergren magna elitr elitr clita dolor.
              Aliquyam vero sed sanctus sed dolore sanctus elitr no amet, ea
              magna ipsum.
            </p>
          </div>
          <div className="col-md-12 pt-4">
            <div className="d-flex flex-column skills">
              <div className="progress w-100 mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Adaptability
                </div>
              </div>
              <div className="progress w-100 mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Research
                </div>
              </div>
              <div className="progress w-100">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  Editing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
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
