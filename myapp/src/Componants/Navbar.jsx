import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My App
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/productgallary"
              >
                Product Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/increment">
                Increment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/conditional">
                Conditional
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/passport">
                Passport
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/classcomp">
                Class Compnant
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifecycle">
                Life Cycle
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forms">
                Forms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todolist">
                TODO List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/todoform">
                TODO Form
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/redux">
                Redux
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
