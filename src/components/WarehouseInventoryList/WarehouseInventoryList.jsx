import React from "react";
import "./WarehouseInventoryList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WarehouseInventoryList = () => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const [hasItems, setHasItems] = useState(true);

  const [inventory, setInventory] = useState([]);

  const { warehouseId, itemId, warehouseName } = useParams();

  async function getInventoryByWarehouse() {
    try {
      const getInventory = await axios.get(`${baseUrl}/stock/inventories`);
      const inventoryList = getInventory.data;
      const hasInventory = inventoryList.find(
        (item) => item.warehouse_name == warehouseName
      );
      if (hasInventory) {
        const inventory = await axios.get(
          `${baseUrl}/stock/warehouses/${warehouseId}/inventories`
        );
        setInventory(inventory.data);
      } else {
        setHasItems(false);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getInventoryByWarehouse();
  }, [warehouseId, itemId]);

  useEffect(() => {
    getInventoryByWarehouse();
  }, []);

  if (hasItems === false) {
    return <h1 className="inventory__no-item-message">Warehouse has no items</h1>;
  }

  if (!inventory) {
    return <div>Loading...</div>;
  }
  return (
    <main className="inventory1">
      <div className="inventory__headings">
        <div className="inventory__title">
          <p>INVENTORY ITEM</p>
          <img className="inventory__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory__title">
          <p>CATEGORY</p>
          <img className="inventory__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory__title">
          <p>STATUS</p>
          <img className="inventory__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory__title inventory__title--padding">
          <p>QUANTITY</p>
          <img className="inventory__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="inventory__title">
          <p className="inventory__title--padding">ACTIONS</p>
        </div>
      </div>

      {inventory.map((item) => (
        <div key={item.id} className="inventory">
          <div className="inventory__card">
            {/* This code will render at tablet/desktop breakpoints */}
            <Link
              className="inventory__link toggle-tabletdesktop"
              to={`/inventory/${item.id}`}
            >
              <p className="inventory__name--blue ">{item.item_name}</p>
              <img className="inventory__chevron" src={chevron} alt="chevron" />
            </Link>
            <p className="inventory__address toggle-tabletdesktop">
              {item.category}
            </p>
            <div className="inv__name toggle-tabletdesktop">
              <button
                className={`inv__name ${
                  item.status === "In Stock"
                    ? "inv__name--instock"
                    : "inv__name--outofstock"
                }`}
              >
                {item.status}
              </button>
            </div>
            <div className="inventory__container inventory__title--padding toggle-tabletdesktop">
              <p className="inventory__address">{item.quantity}</p>
            </div>
            <div className="inventory__alticons toggle-tabletdesktop">
              <Link
                className="inventory__link-delete"
                to={`/warehouse/${warehouseId}/${warehouseName}/${item.id}/${item.item_name}/delete`}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                <img
                  className="inventory__altimages"
                  src={deleteIcon}
                  alt="delete"
                />
              </Link>
              <Link to={`/inventory/${item.id}/edit`}>
                <img className="images" src={editIcon} alt="edit" />
              </Link>
            </div>
            {/* ---------------------------------------------------- */}

            {/* This code will render at mobile breakpoints */}
            <div className="inventory__na toggle-mobile">
              <div className="inventory__container">
                <p className="inventory__label">INVENTORY ITEM</p>
                <Link className="inventory__link" to={`/inventory/${item.id}`}>
                  <p className="inventory__name--blue">{item.item_name}</p>
                  <img
                    className="inventory__chevron"
                    src={chevron}
                    alt="chevron"
                  />
                </Link>
              </div>
              <div className="inventory__container">
                <p className="inventory__label">CATEGORY</p>
                <p className="inventory__address">{item.category}</p>
              </div>
            </div>

            <div className="inventory__contact toggle-mobile">
              <div className="inventory__container">
                <p className="inventory__label">STATUS</p>
                <div className="inv__name toggle-mobile">
                  <button
                    className={`inv__name ${
                      item.status === "In Stock"
                        ? "inv__name--instock"
                        : "inv__name--outofstock"
                    }`}
                  >
                    {item.status}
                  </button>
                </div>
              </div>
              <div className="inventory__container">
                <p className="inventory__label">QTY</p>
                <p className="inventory__info">{item.quantity}</p>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
          </div>

          <div className="inventory__icons toggle-mobile">
            <Link
              className="inventory__link-delete"
              to={`/warehouse/${warehouseId}/${warehouseName}/${item.id}/${item.item_name}/delete`}
              onClick={() => window.scrollTo({ top: 0 })}
            >
              <img src={deleteIcon} alt="delete" />
            </Link>
            <Link to={`/inventory/${item.id}/edit`}>
              <img src={editIcon} alt="edit" />
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
};

export default WarehouseInventoryList;
