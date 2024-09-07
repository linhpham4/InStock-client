import React from "react";
import "./Header.scss";
import logo2 from '../../assets/logo/InStock-Logo_2x.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header__background">

        <div className="header">
          <Link to={`/`}>
            <img className="header__logo" src={logo2} />
          </Link>

          <div className="header__container">
            <Link to={`/warehouse`}>
              <button className="header__buttons">Warehouses</button>
            </Link>
            <Link to={`/inventory`}>
              <button className="header__buttons">Inventory</button>
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;