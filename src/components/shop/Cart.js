import { useState } from "react";
import "./cart.css";

const Cart = ({ openCart, cart, setCart, totalPrice }) => {
  const [qty, setQty] = useState(1);

  console.log(cart);

  const plusQty = (item) => {
    let anjas = cart.find((ct) => ct.id === item.id);
    let tambah = anjas.qty++;
    setCart((cart[item].qty = tambah));
    console.log(tambah);
  };

  return (
    <>
      <div className={openCart}>
        <div className="cart-wrapper">
          <p className="title">Your Cart</p>
          <div className="items-cart-wrapper">
            {cart == 0 ? (
              <p className="empty-cart">Your cart is empty :( </p>
            ) : (
              cart.map((item) => (
                <div className="items">
                  <img src={item.image} />
                  <div className="description-item">
                    <p className="name-item">{item.name}</p>
                    <p className="price-item">${item.price}</p>
                    <div className="qty-wrapper">
                      <p className="plus" onClick={() => plusQty(item)}>
                        +
                      </p>
                      <p className="qty">{item.qty}</p>
                      <p className="minus">-</p>
                    </div>
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              ))
            )}

            {cart == 0 ? (
              false
            ) : (
              <div className="total">
                <p className="totalPrice">
                  Total : <span>${totalPrice}</span>
                </p>
                <button>
                  {" "}
                  Checkout <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;