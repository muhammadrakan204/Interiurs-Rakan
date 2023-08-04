import NavbarAll from "../components/NavbarAll";
import HeaderAbout from "../components/about/HeaderAbout";
import AboutSec1 from "../components/about/AboutSec1";
import AboutSec2 from "../components/about/AboutSec2";
import Team from "../components/about/Team";
import AboutSec3 from "../components/about/AboutSec3";
import WorkWithUs from "../components/about/WorkWithUs";
import Footer from "../components/home/Footer";

import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    const bCursor = document.querySelector(".body-cursor");
    const cCursor = document.querySelector(".child-cursor");
    const targetCursor = document.querySelectorAll(".target-cursor");

    document.addEventListener("mousemove", moveCursor);

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;
      // console.log(x, y);

      bCursor.style.left = `${x}px`;
      bCursor.style.right = `${x}px`;
      bCursor.style.top = `${y}px`;
      bCursor.style.bottom = `${y}px`;
      cCursor.style.left = `${x}px`;
      cCursor.style.right = `${x}px`;
      cCursor.style.top = `${y}px`;
      cCursor.style.bottom = `${y}px`;
      cCursor.style.transition = "0.1s";
    }

    for (let i = 0; i < targetCursor.length; i++) {
      targetCursor[i].addEventListener("mouseover", function () {
        bCursor.classList.add("grow");
        cCursor.style.display = "none";
      });

      targetCursor[i].addEventListener("mouseleave", function () {
        bCursor.classList.remove("grow");
        cCursor.style.display = "block";
      });
    }
  });
  return (
    <div className="container-about">
      <NavbarAll />
      <HeaderAbout />
      <AboutSec1 />
      <AboutSec2 />
      <Team />
      <AboutSec3 />
      <WorkWithUs />
      <Footer />
    </div>
  );
};

export default AboutPage;
