import { useState } from "react";
import "./cart.css";

const Cart = ({ openCart, cart, setCart, removeItem }) => {
  // function untuk menambahkan kuantitas items
  const addItem = (productId, newQty) => {
    const updatedCartItems = cart.map((item) =>
      item.id === productId ? { ...item, qty: newQty + 1 } : item
    );
    setCart(updatedCartItems);
  };

  // function untuk mengurangi kuantitas item
  const reduceItem = (productId, newQty) => {
    if (newQty !== 1) {
      const updatedCartItems = cart.map((item) =>
        item.id === productId ? { ...item, qty: newQty - 1 } : item
      );
      setCart(updatedCartItems);
    }
  };

  //menghitung total harga semua items
  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
  const formatPrice = new Intl.NumberFormat().format(totalPrice);

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
                    <p className="price-item">
                      $
                      {new Intl.NumberFormat("en-US").format(
                        item.price * item.qty
                      )}
                    </p>
                    <div className="qty-wrapper">
                      <p
                        className="plus"
                        onClick={() => addItem(item.id, item.qty)}
                      >
                        +
                      </p>
                      <p className="qty">{item.qty}</p>
                      <p
                        className="minus"
                        onClick={() => reduceItem(item.id, item.qty)}
                      >
                        -
                      </p>
                    </div>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => removeItem(item.id)}
                    ></i>
                  </div>
                </div>
              ))
            )}

            {cart == 0 ? (
              false
            ) : (
              <div className="total">
                <p className="totalPrice">
                  Total : <span>${formatPrice}</span>
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
