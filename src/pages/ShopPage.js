import Header from "../components/shop/Header";
import ListProducts from "../components/shop/Products";
import Footer from "../components/home/Footer";
import { useEffect, useState } from "react";

const Shop = () => {
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

  const [openCart, setOpenCart] = useState("container-cart");

  return (
    <div id="shop">
      <a href="/signup">
        <button className="signup-button">Sign Up</button>
      </a>
      <Header />
      <ListProducts openCart={openCart} setOpenCart={setOpenCart} />
      <Footer />
    </div>
  );
};

export default Shop;
