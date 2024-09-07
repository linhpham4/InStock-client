import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./InventoryDetails.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white-24px.svg";

const URL = import.meta.env.VITE_APP_BASE_URL;

function InventoryDetails() {
  const { itemId } = useParams();
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Item = "Television";
  const itemDescription =
    "50k wide T.V. with lots of features and vivid colors";
  const categoryDescription = "Electronics";
  const stock = "IN STOCK";
  const quantity = 500;
  const warehouse = "Manhattan";

  const getInventoryDetails = async () => {
    try {
      const results = await axios.get(`${URL}/stock/inventories/${itemId}`);
      setSelectedInventory(results.data);
    } catch (error) {
      setError("Unable to get inventory details");
      console.error("Unable to get inventory details:", error);
    } finally {
      setLoading(false);
    }
  };

  getInventoryDetails;

  useEffect(() => {
    if (itemId) {
      getInventoryDetails();
    }
  }, [itemId]);

  useEffect(() => {
    console.log(selectedInventory);
  }, [selectedInventory]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedInventory) {
    return <div>No inventory details available.</div>;
  }

  return (
    <>
      <section className="inventory-details">
        <div className="inventory-details__header">
          <div className="inventory-details__wrapper-1">
            <Link className="inventory-details__back-link" to="/inventory">
              <img src={backArrow} alt="back arrow" />
            </Link>

            <h2 className="inventory-details__title">
              {selectedInventory.item_name}
            </h2>
          </div>
          <div className="inventory-details__wrapper-2">
            <Link
              className="inventory-details__edit-link"
              to={`/inventory/${itemId}/edit`}
            >
              <button className="inventory-details__edit-button-mobile">
                <img
                  className="inventory-details__button-img-mobile"
                  src={edit}
                />
              </button>
              <button className="inventory-details__edit-button-tablet">
                <img
                  className="inventory-details__button-img-tablet"
                  src={edit}
                />
                Edit
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="inventory-body">
        <div className="inventory-body__container-1">
          <div className="inventory-body__description-wrapper">
            <h3 className="inventory-body__title inventory-body__description-title">
              ITEM DESCRIPTION:
            </h3>
            <p className="inventory-body__text inventory-body__description-text">
              {selectedInventory.description}
            </p>
          </div>
          <div className="inventory-body__category-wrapper">
            <h3 className="inventory-body__title inventory-body__category-title">
              CATEGORY:
            </h3>
            <p className="inventory-body__text inventory-body__category-text">
              {selectedInventory.category}
            </p>
          </div>
        </div>
        <div className="inventory-body__container-2">
          <div className="inventory-body__subcontainer">
            <div className="inventory-body__status-wrapper">
              <h3 className="inventory-body__title inventory-body__status-title">
                STATUS:
              </h3>
              <button
                className="inventory-body__status-button"
                style={
                  selectedInventory.status === "In Stock"
                    ? {
                        color: "rgb(16, 149, 78)",
                        backgroundColor: "rgba(227, 235, 227, 0.871)",
                      }
                    : {
                        color: "rgb(183, 52, 35)",
                        backgroundColor: "rgba(243, 217, 212, 0.831)",
                      }
                }
              >
                {selectedInventory.status.toUpperCase()}
              </button>
            </div>
            <div className="inventory-body__quantity-wrapper">
              <h3 className="inventory-body__title inventory-body__quantity-title">
                QUANTITY:
              </h3>
              <p className="inventory-body__text inventory-body__quantity-text">
                {selectedInventory.quantity}
              </p>
            </div>
          </div>
          <div className="inventory-body__warehouse-wrapper">
            <h3 className="inventory-body__title inventory-body__warehouse-title">
              WAREHOUSE:
            </h3>
            <p className="inventory-body__text inventory-body__warehouse-text">
              {selectedInventory.warehouse_name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryDetails;
