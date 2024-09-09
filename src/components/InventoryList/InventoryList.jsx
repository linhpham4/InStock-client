import React from "react";
import "./InventoryList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryList = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [inventory, setInventory] = useState([]);

  const { itemId } = useParams();

  async function getInventoryByWarehouse() {
    const inventory = await axios.get(`${baseUrl}/stock/inventories`);
    setInventory(inventory.data);
  }

  useEffect(() => {
    getInventoryByWarehouse()
  }, [])

  useEffect(() => {
    getInventoryByWarehouse()
  }, [itemId])


  if (!inventory) {
    return <div>Loading...</div>;
  } else {
    return (
      <main>
        <div className="inv__headings">
          <div className="inv__title">
            <p>INVENTORY ITEM</p>
            <img className="inv__icon" src={sortIcon} alt="sort" />
          </div>
          <div className="inv__title">
            <p>CATEGORY</p>
            <img className="inv__icon" src={sortIcon} alt="sort" />
          </div>
          <div className="inv__title">
            <p>STATUS</p>
            <img className="inv__icon" src={sortIcon} alt="sort" />
          </div>
          <div className="inv__title inv__title--padding">
            <p>QTY</p>
            <img className="inv__icon" src={sortIcon} alt="sort" />
          </div>
          <div className="inv__title">
            <p>WAREHOUSE</p>
            <img className="inv__icon" src={sortIcon} alt="sort" />
          </div>
          <div className="inv__title">
            <p className="inv__title--padding">ACTIONS</p>
          </div>
        </div>

        {inventory.map((item) => (
          <div key={item.id} className="inv">
            <div className="inv__card">
              {/* This code will render at tablet/desktop breakpoints */}
              <Link
                className="inv__link toggle-tabletdesktop"
                to={`/inventory/${item.id}`}
              >
                <p className="inv__name--blue ">{item.item_name}</p>
                <img className="inv__chevron" src={chevron} alt="chevron" />
              </Link>
              <p className="inv__other-info toggle-tabletdesktop">
                {item.category}
              </p>
              <div className="inv__name toggle-tabletdesktop">
                <button className={`inv__name ${item.status === 'In Stock' ? 'instock' : 'outofstock' }`} >{item.status}</button>
              </div>
              <div className="inv__container toggle-tabletdesktop">
                <p className="inv__other-info inv__title--padding">{item.quantity}</p>
              </div>
              <div className="inv__container toggle-tabletdesktop">
                <p className="inv__other-info">{item.warehouse_name}</p>
              </div>
              <div className="inv__alticons toggle-tabletdesktop">
                <Link
                  to={`/inventory/${item.item_name}/${item.id}/delete`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <img
                    className="inv__altimages"
                    src={deleteIcon}
                    alt="delete"
                  />
                </Link>
                <Link>
                  <img className="images" src={editIcon} alt="edit" />
                </Link>
              </div>
              {/* ---------------------------------------------------- */}

              {/* This code will render at mobile breakpoints */}
              <div className="inv__na toggle-mobile">
                <div className="inv__container">
                  <p className="inv__label">INVENTORY ITEM</p>
                  <Link className="inv__link" to={`/inventory/${item.id}`}>
                    <p className="inv__name--blue">{item.item_name}</p>
                    <img className="inv__chevron" src={chevron} alt="chevron" />
                  </Link>
                </div>
                <div className="inv__container">
                  <p className="inv__label">CATEGORY</p>
                  <p className="inv__other-info">{item.category}</p>
                </div>
              </div>

              <div className="inv__contact toggle-mobile">
                <div className="inv__container">
                  <p className="inv__label">STATUS</p>
                  <div className="inv__name toggle-mobile">
                    <button className={`inv__name ${item.status === 'In Stock' ? 'instock' : 'outofstock' }`} >{item.status}</button>
                  </div>
                </div>
                <div className="inv__container">
                  <p className="inv__label">QTY</p>
                  <p className="inv__info">{item.quantity}</p>
                </div>
                <div className="inv__container">
                  <p className="inv__label">WAREHOUSE</p>
                  <p className="inv__info">{item.warehouse_name}</p>
                </div>
              </div>
            </div>

            <div className="inv__icons toggle-mobile">
              <Link
                to={`/inventory/${item.item_name}/${item.id}/delete`}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img src={deleteIcon} alt="delete" />
              </Link>
              <Link>
                <img src={editIcon} alt="edit" />
              </Link>
            </div>
            {/* ---------------------------------------------------- */}
          </div>
        ))}
      </main>
    );
  }
};

export default InventoryList;
