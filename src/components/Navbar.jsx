import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="position-absolute navbar navbar-expand-lg navbar-light  w-100">
        <div className="w-100">
          <div className="bg-light w-100 container p-2 d-lg-none px-4 ">
            <a className="navbar-brand d-lg-none d-sm-block " href="/">
              <img
                width="70px"
                src="https://seeklogo.com/images/S/supermoto-owner-group-chapter-galesong-logo-64375ADED8-seeklogo.com.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler mt-3  float-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* {{-- mobile --}} */}
          <div
            className="collapse navbar-collapse  bg-light "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 d-lg-none mb-lg-0 align-items-center text-light">
              <li className="nav-item mx-4">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/events"
                >
                  EVENTS
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/clients"
                >
                  CLIENTS
                </a>
              </li>
              <li className="nav-item mx-4 d-lg-block d-none bg-light rounded-circle">
                <a className="nav-link active " aria-current="page" href="#">
                  <img
                    width="70px"
                    src="https://seeklogo.com/images/S/supermoto-owner-group-chapter-galesong-logo-64375ADED8-seeklogo.com.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="nav-item mx-4">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/article"
                >
                  ARTICLE
                </a>
              </li>

              <li className="nav-item mx-4">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="/store"
                >
                  STORE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
