import React from "react";
import "./Header.scss";
import logo2 from '../../assets/logo/InStock-Logo_2x.png'
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation()

  function isWarehouse() {
    const page = location.pathname
    
    if (page.includes("/warehouse")) {
      return "header__buttons--active"
    }
  }

  function isInventory() {
    const page = location.pathname
    
    if (page.includes("/inventory")) {
      return "header__buttons--active"
    }
  }

  return (
    <>
      <div className="header__background">

        <div className="header">
          <Link to={`/warehouse`} className="header__link">
            <img className="header__logo" src={logo2} />
          </Link>

          <div className="header__container">
            <Link to={`/warehouse`}>
              <button className={`header__buttons ${isWarehouse()}`}>Warehouses</button>
            </Link>
            <Link to={`/inventory`}>
              <button className={`header__buttons ${isInventory()}`}>Inventory</button>
            </Link>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;