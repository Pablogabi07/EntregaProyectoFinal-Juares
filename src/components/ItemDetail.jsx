import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import ItemCount from "../components/itemCount";
import "../Styles/ItemDetail.css";

const Item = ({ product }) => {
  const { addToCart } = useCartContext();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 3
    });
    setAddedToCart(true);
  };

  return (
    <div className="item">
      <img src={product.image} alt={product.name} className="item-image" />
      <h3 className="item-name">{product.name}</h3>
      <p className="item-price">${product.price}</p>
      {addedToCart ? (
        <button className="finish-purchase">Terminar mi compra</button>
      ) : (
        <ItemCount initial={1} min={1} max={10} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default Item;
