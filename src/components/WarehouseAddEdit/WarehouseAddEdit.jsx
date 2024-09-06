import "./WarehouseAddEdit.scss";
import { useState } from "react";
import SectionComponent2 from "../SectionComponent2/SectionComponent2";

// pass as props when calling this component WarehouseAddPage & WarehouseEditPage:
// title="<header title>" --> pass on to SectionComponent2
// backLink="</route to go when back arrow is clicked>" --> pass on to SectionComponent2
// buttonText="<button text>" 

const WarehouseAddEdit = ({ title, backLink, buttonText }) => {
  //state variable for form input values with inital state of "" for all
  const initialInput = {
    warehouseName: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phoneNumber: "",
    email: "",
  };
  const [userInput, setUserInput] = useState(initialInput);

  //state variable for validation errors
  const [errors, setErrors] = useState({});

  //update state variable for changes made in any input field
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCancel = (event) => {
    setUserInput(initialInput);
    setErrors(initialInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};

    //check that input in Phone Number field is a number
    //phoneNumber key with value of the error message will be added to validationErrors if not a number
    const phoneInput = userInput.phoneNumber;
    if (phoneInput && Number(phoneInput) != phoneInput) {
      validationErrors.phoneNumber = "Must be a number";
    }

    //check that input in Email field is a valid email
    //email key with value of the error message will be added to validationErrors if not valid email
    const emailInput = userInput.email;
    if (
      emailInput &&
      (!emailInput.includes("@") || !emailInput.includes("."))
    ) {
      validationErrors.email = "Must include @ and .";
    }

    //loop through state variable and check for any key with an empty value
    //any key with an empty value will be put into validationErrors with a value of the error message
    for (const key in userInput) {
      if (!userInput[key]) {
        validationErrors[key] = "This field is required";
      }
    }

    //if a key exists in validationErrors, update the errors state variable
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <>
    <SectionComponent2 title={title} backLink={backLink} />
      <div className="warehouseAE">
        <form
          className="warehouseAE__form"
          id="warehouseAE"
          onSubmit={handleSubmit}
        >
          <div className="warehouseAE__container">
            <h2 className="warehouseAE__sub-title">Warehouse Details</h2>

            {/* Warehouse Name ======================================================== */}
            <label className="warehouseAE__label" htmlFor="warehouseName">
              Warehouse Name
            </label>
            <input
              // If form is empty on submit, modified class will be added to turn border red
              className={`warehouseAE__input ${errors.warehouseName && "warehouseAE__input--invalid"}`}
              type="text"
              id="warehouseName"
              name="warehouseName"
              placeholder="Warehouse Name"
              value={userInput.warehouseName}
              onChange={handleChange}
            ></input>
            {/* If form is empty on submit, error message will show up below input field */}
            {errors.warehouseName && <p className="warehouseAE__error">{errors.warehouseName}</p>}

            {/* Address  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="address">
              Street Address
            </label>
            <input
              className={`warehouseAE__input ${errors.address && "warehouseAE__input--invalid"}`}
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
              value={userInput.address}
              onChange={handleChange}
            ></input>
            {errors.address && <p className="warehouseAE__error">{errors.address}</p>}

            {/* City  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="city">
              City
            </label>
            <input
              className={`warehouseAE__input ${errors.city && "warehouseAE__input--invalid"}`}
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={userInput.city}
              onChange={handleChange}
            ></input>
            {errors.city && <p className="warehouseAE__error">{errors.city}</p>}

            {/* Country  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="country">
              Country
            </label>
            <input
              className={`warehouseAE__input ${errors.country && "warehouseAE__input--invalid"}`}
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={userInput.country}
              onChange={handleChange}
            ></input>
            {errors.country && <p className="warehouseAE__error">{errors.country}</p>}
          </div>

          <hr className="divider divider--vertical"></hr>

          <div className="warehouseAE__container">
            <h2 className="warehouseAE__sub-title">Contact Details</h2>

            {/* Contact Name  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="contactName">
              Contact Name
            </label>
            <input
              className={`warehouseAE__input ${errors.contactName && "warehouseAE__input--invalid"}`}
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Contact Name"
              value={userInput.contactName}
              onChange={handleChange}
            ></input>
            {errors.contactName && <p className="warehouseAE__error">{errors.contactName}</p>}

            {/* Position  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="position">
              Position
            </label>
            <input
              className={`warehouseAE__input ${errors.position && "warehouseAE__input--invalid"}`}
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              value={userInput.position}
              onChange={handleChange}
            ></input>
            {errors.position && <p className="warehouseAE__error">{errors.position}</p>}

            {/* Phone Number  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className={`warehouseAE__input ${errors.phoneNumber && "warehouseAE__input--invalid"}`}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={userInput.phoneNumber}
              onChange={handleChange}
            ></input>
            {errors.phoneNumber && <p className="warehouseAE__error">{errors.phoneNumber}</p>}

            {/* Email  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="email">
              Email
            </label>
            <input
              className={`warehouseAE__input ${errors.email && "warehouseAE__input--invalid"}`}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              value={userInput.email}
              onChange={handleChange}
            ></input>
            {errors.email && <p className="warehouseAE__error">{errors.email}</p>}
          </div>
        </form>

        {/* Buttons ========================================================  */}
        <div className="warehouseAE__button-container">
          <button
            className="warehouseAE__button warehouseAE__button--cancel"
            type="reset"
            form="warehouseAE"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="warehouseAE__button"
            type="submit"
            form="warehouseAE"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </>
  );
};

export default WarehouseAddEdit;
