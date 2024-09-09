import "./EditInventoryComponent.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditInventoryComponent() {
  const [warehouses, setWarehouses] = useState([]);
  const [warehouseKey, setWarehouseKey] = useState({});
  const [warehouseName, setWarehouseName] = useState("");
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
      const response = await axios.get(
        `${baseUrl}/stock/inventories/${itemId}`
      );
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
  };

  //get current list of warehouses if any warehouse has been deleted
  const getWarehouses = async () => {
    try {
      //generate warehouseKey to convert name to id from current warehouses
      const warehouseList = await axios.get(`${baseUrl}/stock/warehouses`);
      const warehouses = warehouseList.data;
      setWarehouses(warehouseList.data);
  
      //makes array of object with warehouse name: warehouse id
      const warehouseArr = warehouses.map((warehouse) => ({
        [warehouse.warehouse_name]: warehouse.id,
      }));
  
      //converts array into object with key and value
      setWarehouseKey(
        warehouseArr.reduce((warehouseKey, warehouse) => {
          return { ...warehouseKey, ...warehouse };
        }, {})
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
    getWarehouses();
  }, [itemId]);

  //creates object to submit to server
  const formData = {
    warehouse_id: warehouseKey[warehouseName],
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

  // Handler for cancle button and back buttons --> navigates to the previous page
  const handleGoBack = (event) => {
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
    } else if (stockStatus == "In Stock" && quantityField == 0) {
      validationErrors.quantityField =
        "If 'In Stock' is checked quantity must be greater than 0";
    } else {
      setQuantityInvalid("");
    }

    //to account for when status goes from out of stock to in stock
    setItemQuantity(Number(quantityField));

    //if a key exists in validationErrors, update the errors state variable
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    //remove errors
    setErrors({});

    //put request to update item in server
    const editItem = async () => {
      try {
        const responses = await axios.get(`${baseUrl}/stock/warehouses`);
        if (
          responses.data.find(
            (warehouse) => warehouse.id === warehouseKey[warehouseName]
          )
        ) {
          await axios.put(`${baseUrl}/stock/inventories/${itemId}`, formData);
          alert("Item has been successfully updated!");
        } else {
          alert("Warehouse cannot be found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    editItem();
  };

  // Will render if axios call cannot find item
  if (notFound) {
    return <h1>{`Item with ID ${itemId} cannot be found`}</h1>;
  }

  if (!warehouseKey) {
    return <h1>{`Warehouses loading`}</h1>;
  }

  return (
    <>
      <form
        className="addInventory-form"
        id="warehouseEdit"
        onSubmit={handleSubmit}
      >
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
                  {...(itemCategory === "Accessories" && { selected: true })}
                >
                  Accessories
                </option>
                <option
                  value="Apparel"
                  {...(itemCategory === "Apparel" && { selected: true })}
                >
                  Apparel
                </option>
                <option
                  value="Electronics"
                  {...(itemCategory === "Electronics" && { selected: true })}
                >
                  Electronics
                </option>
                <option
                  value="Gear"
                  {...(itemCategory === "Gear" && { selected: true })}
                >
                  Gear
                </option>
                <option
                  value="Health"
                  {...(itemCategory === "Health" && { selected: true })}
                >
                  Health
                </option>
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
                  className={`addInventory-form__label addInventory-form__label--5 ${
                    hideQuantity && "addInventory-form__label--inactive"
                  }`}
                  htmlFor="inStock"
                >
                  <input
                    className={`addInventory-form__radio addInventory-form__radio--inStock ${
                      hideQuantity && "addInventory-form__radio--inactive"
                    }`}
                    type="radio"
                    name="status"
                    value="inStock"
                    checked={stockStatus === "In Stock"}
                    onChange={statusChange}
                  />
                  In Stock
                </label>
                <label
                  className={`addInventory-form__label addInventory-form__label--6 ${
                    !hideQuantity && "addInventory-form__label--inactive"
                  }`}
                  htmlFor="outOfStock"
                >
                  <input
                    className={`addInventory-form__radio addInventory-form__radio--outOfStock ${
                      !hideQuantity && "addInventory-form__radio--inactive"
                    }`}
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
                onChange={(e) => setWarehouseName(e.target.value)}
              >
                <option value="" disabled>
                  Please select
                </option>

                {/* create options based on current list of warehouses */}
                {warehouses.map((warehouse) => (
                  <option key={warehouse.id}
                  value={`${warehouse.warehouse_name}`}
                  {...(warehouseName === `${warehouse.warehouse_name}` && { selected: true })}
                >
                  {`${warehouse.warehouse_name}`}
                </option>
                ))}

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
            type="reset"
            form="warehouseEdit"
            onClick={handleGoBack}
          >
            Cancel
          </button>
          <button
            className="addInventory-form__button-add"
            form="warehouseEdit"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
export default EditInventoryComponent;
