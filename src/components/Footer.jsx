import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="flex items-end">
        <Link to={"https://github.com/Tribhuvan-Web"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://leetcode.com/u/Tribhuvan_nath/"} target="_blank">
          <SiLeetcode />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/tribhuvan-nath-sagar/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.facebook.com/profile.php?id=100029378256493"}
          target="_blank"
        >
          <FaFacebook />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
