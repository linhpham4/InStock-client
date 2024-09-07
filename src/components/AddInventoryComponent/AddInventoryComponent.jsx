import "./AddInventoryComponent.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";

function AddInventoryComponent() {
  const [warehouseId, setWarehouseId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [hideQuantity, setHideQuantity] = useState(false);

  const formData = {
    warehouse_id: warehouseId,
    item_name: itemName,
    description: itemDescription,
    category: itemCategory,
    status: stockStatus,
    quantity: itemQuantity,
  };

  // Function to access choice from radio and assign value
  const statusChange = (event) => {
    setStockStatus(
      event.target.value === "inStock" ? "In Stock" : "Out of Stock"
    );
  };

  // Changes status depending on which stock status is selected to hide quantity as per style guide
  useEffect(() => {
    if (stockStatus === "Out of Stock") {
      setHideQuantity(true);
    } else {
      setHideQuantity(false);
    }
  }, [stockStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert warehouse name to warehouse ID
    const warehouseKey = {
      manhattan: 1,
      washington: 2,
      jersey: 3,
      sf: 4,
      santaMonica: 5,
      seattle: 6,
      miami: 7,
    };

    setWarehouseId(warehouseKey[event.target.warehouseName.value]);
    setItemName(event.target.itemName.value);
    setItemDescription(event.target.description.value);
    setItemCategory(event.target.category.value);
    setItemQuantity(Number(event.target.quantity.value));
  };

  useEffect(() => {
    console.log(formData);
  }, [warehouseId]);

  return (
    <>
      <div className="addInventory-header">
        <div className="addInventory-header__location">
          <img src={backArrow} alt="back arrow" />

          <h2 className="addInventory-header__heading">
            Add New Inventory Item
          </h2>
        </div>
      </div>
      <form className="addInventory-form" onSubmit={handleSubmit}>
        <div className="addInventory-form__container-wrapper">
          <div className="addInventory-form__container addInventory-form__container--1">
            <h3 className="addInventory-form__title">Item Details</h3>
            <label
              className="addInventory-form__label addInventory-form__label--1"
              htmlFor="itemName"
            >
              Item Name
              <input
                className="addInventory-form__input addInventory-form__input--1"
                placeholder="Item Name"
                id="itemName"
                type="text"
                htmlFor="description"
              />
            </label>
            <label
              className="addInventory-form__label addInventory-form__label--2"
              htmlFor="description"
            >
              Description
              <textarea
                className="addInventory-form__input addInventory-form__input--2"
                type="text"
                id="description"
                placeholder="Please enter a brief description..."
                rows="4"
              />
            </label>
            <label
              className="addInventory-form__label addInventory-form__label--3"
              htmlFor="category"
            >
              Category
              <select
                className="addInventory-form__input addInventory-form__input--3"
                id="category"
                name="category"
                defaultValue=""
              >
                <option value="" disabled>
                  Please select
                </option>
                <option
                  className="addInventory-form__input-category-placeholder"
                  value="accessories"
                >
                  Accessories
                </option>
                <option value="apparel">Apparel</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="health">Health</option>
              </select>
            </label>
          </div>
          <div className="addInventory-form__container addInventory-form__container--2">
            <h3 className="addInventory-form__title">Item Availability</h3>
            <div className="addInventory-form__wrapper-stock">
              <label className="addInventory-form__label addInventory-form__label--4">
                Status
              </label>
              <div className="addInventory-form__wrapper-radio">
                <label
                  className="addInventory-form__label addInventory-form__label--5"
                  htmlFor="inStock"
                >
                  <input
                    className="addInventory-form__radio addInventory-form__radio--inStock"
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={stockStatus === "In Stock"}
                    onChange={statusChange}
                  />
                  In Stock
                </label>
                <label
                  className="addInventory-form__label addInventory-form__label--6"
                  htmlFor="outOfStock"
                >
                  <input
                    className="addInventory-form__radio addInventory-form__radio--outOfStock"
                    type="radio"
                    name="status"
                    value="outOfStock"
                    checked={stockStatus === "Out of Stock"}
                    onChange={statusChange}
                  />
                  Out of Stock
                </label>
              </div>
              <label
                className="addInventory-form__label addInventory-form__label--7"
                htmlFor="quantity"
                style={{ display: hideQuantity ? "none" : "block" }}
              >
                Quantity
                <input
                  className="addInventory-form__input addInventory-form__input--4"
                  type="text"
                  id="quantity"
                  placeholder="0"
                />
              </label>
            </div>
            <label
              className="addInventory-form__label addInventory-form__label--8"
              htmlFor="warehouseName"
            >
              Warehouse
              <select
                className="addInventory-form__input addInventory-form__input--5"
                id="warehouseName"
                name="warehouseName"
                defaultValue=""
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="manhattan">Manhattan</option>
                <option value="washington">Washington</option>
                <option value="jersey">Jersey</option>
                <option value="sf">SF</option>
                <option value="santaMonica">Santa Monica</option>
                <option value="seattle">Seattle</option>
                <option value="miami">Miami</option>
              </select>
            </label>
          </div>
        </div>
        <div className="addInventory-form__button-container">
          <button className="addInventory-form__button-cancel">Cancel</button>
          <button className="addInventory-form__button-add" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </>
  );
}
export default AddInventoryComponent;
