import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <footer className="flex items-end">
        <Link to={""}>
          <FaFacebook />
        </Link>
        <Link to={""}>
          <FaYoutube />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/tribhuvan-nath-sagar/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link to={""}>
          <RiInstagramFill />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
