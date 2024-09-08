import "./EditInventoryComponent.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditInventoryComponent() {
  const [warehouseName, setWarehouseName] = useState ("");
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
  const { itemId } = useParams();
  const [notFound, setNotFound] = useState(null);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  // get data for the item with id matching itemId & update state variables
  const getItem = async () => {
    try {
      const response = await axios.get(`${baseUrl}/stock/inventories/${itemId}`);
      setWarehouseName(response.data.warehouse_name);
      setItemName(response.data.item_name);
      setItemDescription(response.data.description);
      setItemCategory(response.data.category);
      setItemQuantity(response.data.quantity);
      setStockStatus(response.data.status);
    } catch (error) {
      setNotFound(true);
      console.error(error);
    }
  }

  useEffect(() => {
    getItem();
  },[itemId]);

  // Convert warehouse name to warehouse ID
  const warehouseKey = {
    "Manhattan": 1,
    "Washington": 2,
    "Jersey": 3,
    "SF": 4,
    "SantaMonica": 5,
    "Seattle": 6,
    "Miami": 7,
    "Boston": 8
  };

  // on warehouseName change, converts it into warehouseId and sets state variable
  useEffect(() => {
    const warehouseId = warehouseKey[warehouseName];
    setWarehouseId(warehouseId);
  }, [warehouseName]);

  //creates object to submit to server
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
      setItemQuantity(0);
    } else {
      setHideQuantity(false);
    }
  }, [stockStatus]);

  // Handler for cancle button, navigates to the previous page
  const handleCancel = (event) => {
    navigate(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

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

    //remove errors
    setErrors({});

    const editItem = async () => {
    try {
      //  await axios.put(`${baseUrl}/stock/inventories/${itemId}`, formData);
      //  alert("Item has been successfully updated!");
       // navigate(-1);
       console.log(formData)
    } catch (error) {
      console.error(error);
    }
   }
// console.log(formData)
editItem();


// // To check object to ensure correct post request ****REMOVE BEFORE SUBMISSION****
// useEffect(() => {
//   console.log(formData);
// }, [warehouseId]);


  };

  // Will render if axios call cannot find item
  if (notFound) {
    return <h1>{`Item with ID ${itemId} cannot be found`}</h1>
  };

  return (
    <>
      <div className="addInventory-header">
        <div className="addInventory-header__location">
          <Link className="addInventory-header__link" to="/inventory">
            <img src={backArrow} alt="back arrow" />
          </Link>

          <h2 className="addInventory-header__heading">
            Edit Inventory Item
          </h2>
        </div>
      </div>
      <form className="addInventory-form" onSubmit={handleSubmit} >
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
                name="itemName"
                type="text"
                htmlFor="description"
                value={formData.item_name}
                onChange={(e) => setItemName(e.target.value)}
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
                name="description"
                placeholder="Please enter a brief description..."
                rows="4"
                value={formData.description}
                onChange={(e) => setItemDescription(e.target.value)}
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
                className={`addInventory-form__input addInventory-form__input--3 ${categoryInvalid}`}
                id="category"
                name="category"
                defaultValue=""
                onChange={(e) => setItemCategory(e.target.value)}
              >
                <option value="" disabled>
                  Please select
                </option>
                <option
                  className="addInventory-form__input-category-placeholder"
                  value="Accessories"
                  {...itemCategory === "Accessories" ? {selected:true} : ""}
                >
                  Accessories
                </option>
                <option value="Apparel" {...itemCategory === "Apparel" ? {selected:true} : ""}>Apparel</option>
                <option value="Electronics" {...itemCategory === "Electronics" ? {selected:true} : ""}>Electronics</option>
                <option value="Gear" {...itemCategory === "Gear" ? {selected:true} : ""}>Gear</option>
                <option value="Health" {...itemCategory === "Health" ? {selected:true} : ""}>Health</option>
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
                  className={`addInventory-form__input addInventory-form__input--4 ${quantityInvalid}`}
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="0"
                  defaultValue={formData.quantity}
                  onChange={(e) => setItemQuantity(Number(e.target.value))}
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
                onChange={(e) => setWarehouseName(e.target.value)}
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="Manhattan" {...warehouseName === "Manhattan" ? {selected:true} : ""}>Manhattan</option>
                <option value="Washington" {...warehouseName === "Washington" ? {selected:true} : ""}>Washington</option>
                <option value="Jersey" {...warehouseName === "Jersey" ? {selected:true} : ""}>Jersey</option>
                <option value="SF" {...warehouseName === "SF" ? {selected:true} : ""}>SF</option>
                <option value="SantaMonica" {...warehouseName === "SantaMonica" ? {selected:true} : ""}>Santa Monica</option>
                <option value="Seattle" {...warehouseName === "Seattle" ? {selected:true} : ""}>Seattle</option>
                <option value="Miami" {...warehouseName === "Miami" ? {selected:true} : ""}>Miami</option>
                <option value="Boston" {...warehouseName === "Boston" ? {selected:true} : ""}>Boston</option>
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
            Save
          </button>
        </div>
      </form>
    </>
  );
}
export default EditInventoryComponent;
