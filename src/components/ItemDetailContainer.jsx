import React, { useEffect, useState } from "react";
import ItemList from "../components/itemList";

const ItemDetailContainer = ({ products, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products && selectedCategory) {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory, products]);

  return (
    <div className="item-list-container">
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemDetailContainer;
