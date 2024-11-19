import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./ContextReducer";
import Cart from "../screens/Cart";
import Model from "../Model";
function Navbar() {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();
  const cartState = useCart();

  function handleLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/login");
  }

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
              <div className="d-flex align-items-center">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                  >
                    Home
                  </Link>
                </li>
                {localStorage.getItem("authToken") ? (
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to={"/myorder"}>
                      My Orders
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex align-items-center">
                {!localStorage.getItem("authToken") ? (
                  <>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to={"/login"}
                      >
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        aria-current="page"
                        to={"/signup"}
                      >
                        Sign Up
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className="btn nav-item"
                      onClick={() => setCartView(true)}
                    >
                      MyCart{" "}
                      {cartState.length > 0 && (
                        <span className="badge text-bg-danger">
                          {cartState.length}
                        </span>
                      )}                     
                    </li>
                    <li
                      className="btn nav-item text-danger"
                      onClick={handleLogout}
                    >
                      LogOut
                    </li>
                  </>
                )}
              </div>
            </ul>
            {cartView && (
              <Model onClose={()=>setCartView(false)}>
                <Cart />
              </Model>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
