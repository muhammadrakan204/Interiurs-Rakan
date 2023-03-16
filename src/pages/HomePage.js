import Navbar from "../components/home/Navbar";
import Header from "../components/home/Header";
import BigText from "../components/home/BigText";
import Sec3 from "../components/home/Sec3";
import Sec4 from "../components/home/Sec4";
import Map from "../components/home/Map";
import Promotion from "../components/home/Promotion";
import Discount from "../components/home/Discount";
import Footer from "../components/home/Footer";

import { useEffect } from "react";

const HomePage = () => {
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
    <>
      <Navbar />
      <Header />
      <BigText />
      <Sec3 />
      <Sec4 />
      <Map />
      <Promotion />
      <Discount />
      <Footer />
    </>
  );
};

export default HomePage;
