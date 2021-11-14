import React from "react";
import "./footer.css";
import IconLN from "../images/linkdin.png";
import IconGH from "../images/gthub.png";
import IconBH from "../images/bh.png";

function Footer() {
  return (
    <div class="element">
      <footer className="footer">
        <a href="https://www.linkedin.com/in/melissa-v-769255105/">
          <img id="social" src={IconLN} alt="linkdin" />
        </a>

        <a href="https://github.com/Mvint2647">
          <img id="social" src={IconGH} alt="linkdin" />
        </a>

        <a href="https://www.behance.net/Melissasta10d9">
          <img id="social" src={IconBH} alt="linkdin" />
        </a>

        <h6> © 2021 MelsPortfolioReact</h6>
      </footer>
    </div>
  );
}

export default Footer;
