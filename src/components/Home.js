import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import "../css/home.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <img
        src="https://res.cloudinary.com/echsd/image/upload/v1589721564/Do_ngv0eo.jpg"
        width="190"
        height="190"
        className="mt-2 mb-3 rounded-circle hover"
      />
      <h1 className="m-2 text-secondary font-weight-bolder">Nguyen Thanh Do</h1>
      <h5 className="mb-5 text-black-50 font-weight-normal">
        Full-stack Web Developer
      </h5>
      <div className="contact mt-100">
        <a href="https://www.facebook.com/ntdo2506/" className="link ">
          <Tooltip arrow title="fb.com/ntdo2506" className="text-info">
            <FacebookIcon fontSize="large" />
          </Tooltip>
        </a>
        <a href="https://github.com/taythaytu0905" className="icon link  ml-5">
          <Tooltip arrow title="github.com/taythaytu0905" className="text-info">
            <GitHubIcon fontSize="large" />
          </Tooltip>
        </a>
        <a href="mailto:ntdo.13cdt1@gmail.com" className="link  ml-5">
          <Tooltip
            arrow
            title="ntdo.13cdt1@gmail.com"
            placement="bottom"
            className="text-info"
          >
            <EmailIcon fontSize="large" />
          </Tooltip>
        </a>
        <div className="mt-5">
          <Link to="/blog" className="navbar-brand text-black-50">
            Blog
          </Link>
          <Link to="/about" className="navbar-brand text-black-50">
            About
          </Link>
        </div>
      </div>
      <footer>
        <hr className="mt-5" />
        <div className="text-black-50">
          <p>Copyright © Thanh Do 2020</p>
          <p>Design parameters: Language(Javascript) - Framework(React)</p>
        </div>
      </footer>
    </div>
  );
}
