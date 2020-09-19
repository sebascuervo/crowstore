import React, { useState } from "react";
import { Link } from "react-router-dom";
import CrowLogo from "../../Svg/CrowLogo";
import "./NavBar.scss";

function NavBar({ setSearch }) {
  const [dataSearch, setDataSearch] = useState("");
  const searchProduct = (e) => {
    setDataSearch(e.target.value);
  };

  const submitData = () => {
    setSearch(dataSearch);
  };

  return (
    <>
      <div className="navbar__fake"></div>
      <nav className="navbar">
        <Link to="/">
          <CrowLogo />
        </Link>
        <div className="navbar__search">
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();

                submitData();
              }
            }}
            onChange={(e) => searchProduct(e)}
            type="text"
            placeholder="Busca los productos que deseas"
          />
          <Link
            to="/products"
            onClick={submitData}
            type="submit"
            className="navbar__button"
          >
            <i className="fas fa-search" />
          </Link>
        </div>
        <div className="navbar__links">
          <a href="/" className="navbar__links__item">
            Crear cuenta
          </a>
          <i className="fas fa-shopping-cart navbar__links__item"></i>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
