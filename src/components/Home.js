import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";
import "../css/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Home() {
  return (
    <div className="heading">
      <a href="https://www.youtube.com/">
        <div className="avatar" />
      </a>
      <h2>Nguyen Thanh Do</h2>
      <h5>Full-stack Web Developer</h5>
      <div className="contact">
        <a href="https:fb.com/p.tran3112" className="link">
          <Tooltip arrow title="fb.com/p.tran3112">
            <FacebookIcon fontSize="large" />
          </Tooltip>
        </a>
        <a href="https://github.com/taythaytu0905" className="icon link">
          <Tooltip arrow title="github.com/taythaytu0905">
            <GitHubIcon fontSize="large" />
          </Tooltip>
        </a>
        <a href="mailto:ntdo.13cdt1@gmail.com" className="link">
          <Tooltip arrow title="ntdo.13cdt1@gmail.com" placement="bottom">
            <EmailIcon fontSize="large" />
          </Tooltip>
        </a>
        <div className="mt-5">
          <a href="/about"> About </a>
          <a href="/blog"> Blog </a>
        </div>
        <hr className="mt-5" />

        <div className="text-black-50">
          <p>Copyright © Thanh Do 2020</p>
          <p>Design parameters: Language(Javascript) - Framework(React)</p>
        </div>
      </div>
    </div>
  );
}
