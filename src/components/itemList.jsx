import React, { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import productData from "../data/products.json";

const imageBasePath = "/images/";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      try {
        const productsWithImages = productData.map((product) => ({
          ...product,
          image: `${imageBasePath}${product.image}`
        }));
        setProducts(productsWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setLoading(false);
      }
    }, 2000);
  }, []);

  if (loading) {
    return <div className="loading">Cargando productos...</div>;
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <ItemDetail key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
