import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img
            src="https://res.cloudinary.com/echsd/image/upload/v1589721564/Do_ngv0eo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle mr-2"
            alt=""
          />
          Do-Blog
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/" className="navbar-brand">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" className="navbar-brand">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="navbar-brand">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
