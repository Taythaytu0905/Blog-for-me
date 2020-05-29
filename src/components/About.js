import React from "react";
import Header from "./Header";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Tooltip from "@material-ui/core/Tooltip";

export default function About() {
  return (
    <div>
      <Header />
      <div className="container text-muted">
        <h2>Giới thiệu</h2>
        <h4> Mở đầu</h4>
        <p className="font-weight-normal">
          Hello mọi người, mình là Nguyễn Thanh Đô - Mình thích công nghệ, chơi
          game và chia sẽ kiến thức. Mình tốt nghiệp trường đại học Bách Khoa Đà
          Nẵng ngành Cơ Điện Tử. Hiện đang làm ở một công ty Nhật về cơ khí.
          Nhưng mình rất thích công nghệ và đặc biệt là lập trình. Hiện tại mình
          đã học lập trình hơn một năm. Hướng tới trở thành một web developer
          trong tương lai.
        </p>
        <p className="font-weight-normal">
          Nhưng thứ mình biết bao gồm:
          <ul>
            <li> HTML </li>
            <li> CSS </li>
            <li> JS </li>
            <li> NodeJS </li>
            <li> ExpressJS </li>
            <li> ReactJS </li>
          </ul>
        </p>
        <h4>Blog nào sẽ giành cho việc</h4>
        <p className="font-weight-normal">
          Chia sẽ mọi thứ trên đời: Code, công nghệ, game, bida, khám phá ... Hy
          vọng được mọi người đóng góp.
        </p>
        <div>
          <h4>Liên lạc với tôi nhé</h4>
          <a href="https://www.facebook.com/ntdo2506/" className="link ">
            <Tooltip arrow title="fb.com/ntdo2506" className="text-info">
              <FacebookIcon fontSize="small" />
            </Tooltip>
          </a>
          <a
            href="https://github.com/taythaytu0905"
            className="icon link  ml-3"
          >
            <Tooltip
              arrow
              title="github.com/taythaytu0905"
              className="text-info"
            >
              <GitHubIcon fontSize="small" />
            </Tooltip>
          </a>
          <a href="mailto:ntdo.13cdt1@gmail.com" className="link  ml-3">
            <Tooltip
              arrow
              title="ntdo.13cdt1@gmail.com"
              placement="bottom"
              className="text-info"
            >
              <EmailIcon fontSize="small" />
            </Tooltip>
          </a>
        </div>
      </div>
    </div>
  );
}
