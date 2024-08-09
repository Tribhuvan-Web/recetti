import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}>
          <img src="/logo.png" alt="Recipes Finder" />
        </Link>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
