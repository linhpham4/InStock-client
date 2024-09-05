import "./WarehouseAddEdit.scss";
import arrow from "../../assets/icons/arrow_back-24px.svg";

//actionType is passed down from 2 different pages:
//WarehouseEditPage passes down a value of "Edit"
//WarehouseAddPage passes down a value of "Add New"

const WarehouseAddEdit = ( {actionType} ) => {


  return (
    <>
      <div className="warehouseAE">
        <div className="warehouseAE__header-container">
          <img className="warehouseAE__icon" src={arrow} alt="" />
          <h1 className="warehouseAE__title">{`${actionType}`} Warehouse</h1>
        </div>
        <hr className="divider"></hr>
        
        {/* Form */}
        <form className="warehouseAE__form">
          <div className="warehouseAE__container">
            <h2 className="warehouseAE__sub-title">Warehouse Details</h2>
            {/* Warehouse Name */}
            <label className="warehouseAE__label" htmlFor="warehouse-name">
              Warehouse Name
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="warehouse-name"
              name="warehouse-name"
              placeholder="Warehouse Name"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* This p tag will stay hidden unless field is not filled in */}
            {/* Apply warehouseAE__error--show class for error message to show up */}

            {/* Address */}
            <label className="warehouseAE__label" htmlFor="address">
              Street Address
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* City */}
            <label className="warehouseAE__label" htmlFor="city">
              City
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="city"
              name="city"
              placeholder="City"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* Country */}
            <label className="warehouseAE__label" htmlFor="country">
              Country
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="country"
              name="country"
              placeholder="Country"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
          </div>

          <hr className="divider divider--vertical"></hr>

          <div className="warehouseAE__container">
            <h2 className="warehouseAE__sub-title">Contact Details</h2>
            {/* Contact Name */}
            <label className="warehouseAE__label" htmlFor="contact-name">
              Contact Name
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="contact-name"
              name="contact-name"
              placeholder="Contact Name"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* Position */}
            <label className="warehouseAE__label" htmlFor="position">
              Position
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="position"
              name="position"
              placeholder="Position"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* Phone Number */}
            <label className="warehouseAE__label" htmlFor="phone-number">
              Phone Number
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="Phone Number"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
            {/* Email */}
            <label className="warehouseAE__label" htmlFor="email">
              Email
            </label>
            <input
              className="warehouseAE__input"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            ></input>
            <p className="warehouseAE__error">This field is required</p>
          </div>
        </form>

        {/* Buttons */}
        <div className="warehouseAE__button-container">
          <button className="warehouseAE__button warehouseAE__button--cancel">Cancel</button>
          <button className="warehouseAE__button">Save</button>
        </div>
      </div>
    </>
  );
};

export default WarehouseAddEdit;
