import { useEffect, useState } from "react";
import { beds, sofas, lamps, others } from "../../data/dataProducts";
import Navbar from "../home/Navbar";
import "./products.css";

const ListProducts = () => {
  const listBeds = beds.productItems;
  const listSofas = sofas.productItems;
  const listLamps = lamps.productItems;
  const listOthers = others.productItems;

  console.log(listLamps);

  const bedTitle =
    "Climb into a comfy, bouncy, supportive, origanic mattress made to last.";

  const sofaTitle =
    "A nod to iconic mid-century design. combines sophistication, craftsmanship and convenience.";

  const lampsTitle = "Quality minimalist lamp design, we present to you";
  const othersTitle =
    "Your home is your palace, complete your palace with beautiful decorations";

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
      <div className="container-shop">
        <Navbar />
        <p className="title-shop">{titleHeader}</p>
        <div className="link-wrapper">
          <a href="/" className="target-cursor">
            - Interiurs -{/* <i className="fa-solid fa-chevron-right"></i> */}
          </a>
        </div>
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
              <p className="price-product">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="body-cursor"></div>
        <div className="child-cursor"></div>
      </div>
    </>
  );
};

export default ListProducts;
