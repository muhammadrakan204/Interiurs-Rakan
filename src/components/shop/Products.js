import { useEffect, useState } from "react";
import { beds, sofas, lamps, others } from "../../data/dataProducts";
import Navbar from "../home/Navbar";
import Cart from "./Cart";
import "./products.css";

const ListProducts = ({ openCart, setOpenCart }) => {
  const listBeds = beds.productItems;
  const listSofas = sofas.productItems;
  const listLamps = lamps.productItems;
  const listOthers = others.productItems;

  const bedTitle =
    "Climb into a comfy, bouncy, supportive, origanic mattress made to last.";

  const sofaTitle =
    "A nod to iconic mid-century design. combines sophistication, craftsmanship and convenience.";

  const lampsTitle = "Quality minimalist lamp design, we present to you";
  const othersTitle =
    "Your home is your palace, complete your palace with beautiful decorations";

  const [cart, setCart] = useState([]);
  const [hamburgerIcon, setHamburgerIcon] = useState(
    "fa-solid fa-bars hamburger"
  );
  const [xMark, setXMark] = useState("fa-solid fa-xmark xclose");

  const addToCart = (product) => {
    if (cart.find((ct) => ct.id === product.id)) {
      alert("This product is already in your cart");
      return false;
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  const handleCart = () => {
    if (openCart === "container-cart") {
      setOpenCart("container-cart full");
      setHamburgerIcon("fa-solid fa-bars hamburger ham-close");
      setXMark("fa-solid fa-xmark");
    } else {
      setOpenCart("container-cart");
      setHamburgerIcon("fa-solid fa-bars hamburger");
      setXMark("fa-solid fa-xmark xclose");
    }
  };

  const closeCart = () => {
    setOpenCart("container-cart");
    setHamburgerIcon("fa-solid fa-bars hamburger");
    setXMark("fa-solid fa-xmark xclose");
  };

  const handleXMark = () => {
    if (openCart === "container-cart full") {
      setOpenCart("container-cart");
      setXMark("fa-solid fa-xmark xclose");
      setHamburgerIcon("fa-solid fa-bars hamburger");
    }
  };

  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const [showProducts, setShowProducts] = useState(listBeds);
  const [titleHeader, setTitleHeader] = useState(bedTitle);

  useEffect(() => {
    if (showProducts === listSofas) {
      setTitleHeader(sofaTitle);
    } else if (showProducts === listBeds) {
      setTitleHeader(bedTitle);
    } else if (showProducts === listLamps) {
      setTitleHeader(lampsTitle);
    } else {
      setTitleHeader(othersTitle);
    }
  });

  return (
    <>
      <Cart
        openCart={openCart}
        cart={cart}
        setCart={setCart}
        totalPrice={totalPrice}
      />
      <i class={xMark} onClick={() => handleXMark()}></i>
      <i className="fa-solid fa-cart-shopping" onClick={() => handleCart()}></i>
      <div className="container-shop" onClick={() => closeCart()}>
        <Navbar
          hamburgerIcon={hamburgerIcon}
          setHamburgerIcon={setHamburgerIcon}
        />
        <p className="title-shop">{titleHeader}</p>
        <div className="link-wrapper">
          <a href="/" className="target-cursor">
            - Interiurs -{/* <i className="fa-solid fa-chevron-right"></i> */}
          </a>
        </div>

        <div className="navbar-shop">
          <p
            onClick={() => setShowProducts(listBeds)}
            className={showProducts === listBeds ? "active" : ""}
          >
            Beds
          </p>
          <p
            onClick={() => setShowProducts(listSofas)}
            className={showProducts === listSofas ? "active" : ""}
          >
            Sofas & Chairs
          </p>
          <p
            onClick={() => setShowProducts(listLamps)}
            className={showProducts === listLamps ? "active" : ""}
          >
            Lamps
          </p>
          <p
            onClick={() => setShowProducts(listOthers)}
            className={showProducts === listOthers ? "active" : ""}
          >
            Others
          </p>
        </div>
        <div className="container-products">
          <div className="wrapper-products">
            {showProducts.map((product) => (
              <div className="card-products" key={product.id}>
                <div className="wrapper-image-product">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  <h1 className="desc-product-image">
                    {product.desc}
                    <span>{product.luas}</span>
                  </h1>
                </div>
                <p className="title-product">{product.name}</p>
                <i
                  class="fa-solid fa-plus"
                  onClick={() => addToCart(product)}
                ></i>
                <p className="price-product">${product.price}</p>
              </div>
            ))}
          </div>
          <div className="body-cursor"></div>
          <div className="child-cursor"></div>
        </div>
      </div>
    </>
  );
};

export default ListProducts;
