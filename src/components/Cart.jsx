// Cart.js
import React from "react";
import { useCartContext } from "./CartContext";

function Cart() {
  const { cartItems } = useCartContext();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            <div>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <button>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      {}
      <p>Total: ${calcularTotal()}</p>
    </div>
  );
}

export default Cart;
