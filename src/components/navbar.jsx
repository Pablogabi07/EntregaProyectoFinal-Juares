import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import CartWidget from "../components/cartWidget";

function Navbar({ onCategoryChange }) {
  return (
    <header>
      <nav>
        <ul>
          <h1 className="logo">TermoFusión</h1>
          <li>
            <Link
              to="/category/canos"
              onClick={() => onCategoryChange("canos")}
            >
              Caños
            </Link>
          </li>
          <li>
            <Link
              to="/category/codos"
              onClick={() => onCategoryChange("codos")}
            >
              Codos
            </Link>
          </li>
          <li>
            <Link
              to="/category/llaves-de-paso"
              onClick={() => onCategoryChange("llaves-de-paso")}
            >
              Llaves de Paso
            </Link>
          </li>
          <CartWidget />
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
