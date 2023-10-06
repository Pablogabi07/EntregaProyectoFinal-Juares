import React from "react";
import { useCartContext } from "./CartContext";
import "../Styles/cartwidget.css";
import Icon from "../image/pngwing.png";

function CartWidget() {
  const { cartItems } = useCartContext();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-widget">
      <img className="icon" src={Icon} alt="Icono" />
      {totalItems > 0 && (
        <span className="cart-notification">{totalItems}</span>
      )}
    </div>
  );
}

export default CartWidget;
