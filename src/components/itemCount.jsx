import React, { useState } from "react";
import "../Styles/itemCount.css";

const ItemCount = ({ initial, min, max, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [isChanging, setIsChanging] = useState(false);

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
      setIsChanging(true);
      setTimeout(() => setIsChanging(false), 200);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
      setIsChanging(true);
      setTimeout(() => setIsChanging(false), 200);
    }
  };

  const handleAddToCart = () => {
    onAdd();
  };

  return (
    <div className="container">
      <div className="item-count">
        <button className="control-button" onClick={handleDecrement}>
          -
        </button>
        <span className={`count-display ${isChanging ? "changing" : "1"}`}>
          {count}
        </span>
        <button className="control-button" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="add-to-cart">
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
