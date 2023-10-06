import React from "react";
import "../Styles/itemListContainer.css";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1 className="titulo">Todo lo que buscas en TermoFusión</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default ItemListContainer;
