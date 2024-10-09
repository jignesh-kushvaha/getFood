import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fst-bold" to={"/"}>
            GetFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 d-flex justify-content-between mb-lg-0 px-3`">
              <div>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
              </div>
              <div className="d-flex">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={"/signup"}>
                    Sign Up
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
