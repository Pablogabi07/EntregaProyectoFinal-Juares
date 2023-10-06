import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Navbar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/itemList";
import { CartProvider } from "./components/CartContext";
import Cart from "./components/Cart";
import CartWidget from "./components/cartWidget";

function App() {
  const handleCategoryChange = (category) => {};

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar onCategoryChange={handleCategoryChange} />
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/ItemList" component={ItemList} />
            <Route path="/category/canos" component={ItemDetailContainer} />
            <Route path="/category/codos" component={ItemDetailContainer} />
            <Route
              path="/category/llaves-de-paso"
              component={ItemDetailContainer}
            />
            {CartWidget}
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
