import React from "react";
import "./Header.scss";
import logo2 from '../../assets/logo/InStock-Logo_2x.png'

const Header = () => {
  return (
    <>
      <div className="header__background">

          <div className="header">

            <img className="header__logo" src={logo2}/>

            <div className="header__container">
              <button className="header__buttons">Warehouses</button>
              <button className="header__buttons">Inventory</button>
            </div>

          </div>

      </div>
    </>
  );
};

export default Header;