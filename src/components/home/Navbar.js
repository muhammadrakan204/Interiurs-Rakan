import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState("container-navbar");

  return (
    <>
      <nav>
        <div className={toggle}>
          <div className="content-navbar">
            <ul>
              <li>
                <a href="/" className="link-nav">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="link-nav">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="link-nav">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="link-nav">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <i
        className="fa-solid fa-bars hamburger"
        onClick={() =>
          toggle === "container-navbar"
            ? setToggle("container-navbar full")
            : setToggle("container-navbar")
        }
      ></i>
    </>
  );
};

export default Navbar;
