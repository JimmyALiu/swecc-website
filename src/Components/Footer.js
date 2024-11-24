import React, { useEffect } from "react";
import "../CSS/Footer.css";
import { FaInstagram, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import discordLogo from "../Data/img/discord-logo.jpg";
import instaLogo from "../Data/img/insta-logo.jpg";
import LinkedInLogo from "../Data/img/LinkedInLogo.jpg";
import SWECClogo2 from "../Data/img/SWECClogo2.jpg";
import { links } from "./Utils";

const Footer = () => {
  const [currentYr, setCurrentYr] = React.useState("");

  useEffect(() => {
    const today = new Date();
    setCurrentYr(today.getFullYear());
  }, []);

  return (
    <footer className="og-footer">
      <div className="footer-contents-container">
        <a href="/instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="/discord" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
        </a>
        <span className="copyright-message">
          Copyright © UW SWECC {currentYr}
        </span>
        <a href="/linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
