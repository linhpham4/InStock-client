import "./AddInventoryComponent.scss";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";

function AddInventoryComponent() {
  return (
    <>
      <div className="addInventory-header">
        <div className="addInventory-header__location">
          <img src={backArrow} alt="" />

          <h2 className="addInventory-header__heading">
            Add New Inventory Item
          </h2>
        </div>
      </div>
      <form className="addInventory-form" onSubmit="">
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
          <label className="addInventory-form__label addInventory-form__label--2">
            Description
            <textarea
              className="addInventory-form__input addInventory-form__input--2"
              type="text"
              id="description"
              placeholder="Please enter a brief description..."
              rows="4"
              // cols="40"
            />
          </label>
          <label
            className="addInventory-form__label addInventory-form__label--3"
            htmlFor="category"
          >
            Category
            <select
              className="addInventory-form__input addInventory-form__input--3"
              type="dropdown"
              id="category"
            >
              <option value="" disabled selected>
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
                  id="inStock"
                  name="stock"
                />
                In Stock
              </label>
              <label
                className="addInventory-form__label addInventory-form__label--6"
                htmlFor="OutOfStock"
              >
                <input
                  className="addInventory-form__radio addInventory-form__radio--outOfStock"
                  type="radio"
                  id="OutOfStock"
                  name="stock"
                />
                Out of Stock
              </label>
            </div>
            <label className="addInventory-form__label addInventory-form__label--7">
              Qunatity
              <input
                className="addInventory-form__input"
                type="text"
                id="quantity"
              />
            </label>
          </div>
          <label className="addInventory-form__label addInventory-form__label--8">
            Warehouse
            <select
              className="addInventory-form__input addInventory-form__input--4"
              type="dropdown"
              id="warehouseName"
            >
              <option value="manhattan">Manhattan</option>
              <option value="washington">Washington</option>
              <option value="jersey">Jersey</option>
              <option value="sf">SF</option>
              <option value="santaMonica">Santa Monica</option>
              <option value="seattle">Seattle</option>
              <option value="miami">Miami</option>
              <option value="boston">Boston</option>
            </select>
          </label>
        </div>
        <div className="addInventory-form__button-container">
          <button className="addInventory-form__button-cancel">Cancel</button>
          <button className="addInventory-form__button-add">+ Add Item</button>
        </div>
      </form>
    </>
  );
}
export default AddInventoryComponent;
