import "./AddInventoryComponent.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddInventoryComponent() {
  const [warehouseId, setWarehouseId] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [hideQuantity, setHideQuantity] = useState(false);
  const [warehouseInvalid, setWarehouseInvalid] = useState("");
  const [itemInvalid, setItemInvalid] = useState("");
  const [descriptionInvalid, setDescriptionInvalid] = useState("");
  const [categoryInvalid, setCategoryInvalid] = useState("");
  const [quantityInvalid, setQuantityInvalid] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const handleCancel = (event) => {
    navigate("/inventory");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

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

    // check for valid inputs in all fields
    const warehouseField = event.target.warehouseName.value;
    if (!warehouseField) {
      setWarehouseInvalid("addInventory-form__input--invalid");
      validationErrors.warehouseField = "This field is required";
    } else {
      setWarehouseInvalid("");
    }

    const itemField = event.target.itemName.value;
    if (!itemField) {
      setItemInvalid("addInventory-form__input--invalid");
      validationErrors.itemField = "This field is required";
    } else {
      setItemInvalid("");
    }

    const descriptionField = event.target.description.value;
    if (!descriptionField) {
      setDescriptionInvalid("addInventory-form__input--invalid");
      validationErrors.descriptionField = "This field is required";
    } else {
      setDescriptionInvalid("");
    }

    const categoryField = event.target.category.value;
    if (!categoryField) {
      setCategoryInvalid("addInventory-form__input--invalid");
      validationErrors.categoryField = "This field is required";
    } else {
      setCategoryInvalid("");
    }

    const statusField = stockStatus;
    if (!statusField) {
      validationErrors.statusField = "This field is required";
    }

    // Also checks if it is a number
    const quantityField = event.target.quantity.value;
    if (!quantityField && stockStatus !== "Out of Stock") {
      setQuantityInvalid("addInventory-form__input--invalid");
      validationErrors.quantityField = "This field is required";
    } else if (stockStatus !== "Out of Stock" && isNaN(quantityField)) {
      setQuantityInvalid("addInventory-form__input--invalid");
      validationErrors.quantityField = "Must be a number";
    } else {
      setQuantityInvalid("");
    }

    //if a key exists in validationErrors, update the errors state variable
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // update object with all values
    setWarehouseId(warehouseKey[warehouseField]);
    setItemName(itemField);
    setItemDescription(descriptionField);
    setItemCategory(categoryField);
    setItemQuantity(Number(quantityField));

    //reset from and remove errors
    setErrors({});
    event.target.reset();
  };

  // To check object to ensure correct post request ****REMOVE BEFORE SUBMISSION****
  useEffect(() => {
    console.log(formData);
  }, [warehouseId]);

  return (
    <>
      <div className="addInventory-header">
        <div className="addInventory-header__location">
          <Link className="addInventory-header__link" to="/inventory">
            <img src={backArrow} alt="back arrow" />
          </Link>

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
                className={`addInventory-form__input addInventory-form__input--1 ${itemInvalid}`}
                placeholder="Item Name"
                id="itemName"
                type="text"
                htmlFor="description"
              />
              {errors.itemField && (
                <p className="addInventory-form__error">{errors.itemField}</p>
              )}
            </label>
            <label
              className="addInventory-form__label addInventory-form__label--2"
              htmlFor="description"
            >
              Description
              <textarea
                className={`addInventory-form__input addInventory-form__input--2 ${descriptionInvalid}`}
                type="text"
                id="description"
                placeholder="Please enter a brief description..."
                rows="4"
              />
              {errors.descriptionField && (
                <p className="addInventory-form__error">
                  {errors.descriptionField}
                </p>
              )}
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
              {errors.categoryField && (
                <p className="addInventory-form__error">
                  {errors.categoryField}
                </p>
              )}
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
              {errors.statusField && (
                <p className="addInventory-form__error">{errors.statusField}</p>
              )}
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
                {errors.quantityField && (
                  <p className="addInventory-form__error">
                    {errors.quantityField}
                  </p>
                )}
              </label>
            </div>
            <label
              className="addInventory-form__label addInventory-form__label--8"
              htmlFor="warehouseName"
            >
              Warehouse
              <select
                className={`addInventory-form__input addInventory-form__input--5 ${warehouseInvalid}`}
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
              {errors.warehouseField && (
                <p className="addInventory-form__error">
                  {errors.warehouseField}
                </p>
              )}
            </label>
          </div>
        </div>
        <div className="addInventory-form__button-container">
          <button
            className="addInventory-form__button-cancel"
            onClick={handleCancel}
            type="reset"
          >
            Cancel
          </button>
          <button className="addInventory-form__button-add" type="submit">
            + Add Item
          </button>
        </div>
      </form>
    </>
  );
}
export default AddInventoryComponent;
