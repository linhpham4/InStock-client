import "./EditWarehouse.scss";
import { useState } from "react";

const EditWarehouse = () => {
  //state variable for form input values with inital state of "" for all
  const initialInput = {
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: ""
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

    //check that input in Phone Number field is in the correct phone number format using regex.test()
    //contact_phone key with value of the error message will be added to validationErrors if not a number
    const phoneInput = userInput.contact_phone;
    const phoneFormat = /^\s*\+[0-9]\s*\([0-9]{3}\)\s*[0-9]{3}\s*-\s*[0-9]{4}\s*$/;
    if (phoneInput && !phoneFormat.test(phoneInput)) {
      validationErrors.contact_phone = "Must be in +X (XXX) XXX-XXXX format";
    }

    //check that input in Email field is a valid email using regex.test()
    //contact_email key with value of the error message will be added to validationErrors if not valid email
    const emailInput = userInput.contact_email;
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    if (emailInput && !emailFormat.test(emailInput)) {
      validationErrors.contact_email = "Must be in email format";
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

    setErrors({});
  };

  return (
    <>
      <div className="warehouseAE">
        <form
          className="warehouseAE__form"
          id="warehouseAE"
          onSubmit={handleSubmit}
        >
          <div className="warehouseAE__container">
            <h2 className="warehouseAE__sub-title">Warehouse Details</h2>

            {/* Warehouse Name ======================================================== */}
            <label className="warehouseAE__label" htmlFor="warehouse_name">
              Warehouse Name
            </label>
            <input
              // If form is empty on submit, modified class will be added to turn border red
              className={`warehouseAE__input ${errors.warehouse_name && "warehouseAE__input--invalid"}`}
              type="text"
              id="warehouse_name"
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={userInput.warehouse_name}
              onChange={handleChange}
            ></input>
            {/* If form is empty on submit, error message will show up below input field */}
            {errors.warehouse_name && <p className="warehouseAE__error">{errors.warehouse_name}</p>}

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
            <label className="warehouseAE__label" htmlFor="contact_name">
              Contact Name
            </label>
            <input
              className={`warehouseAE__input ${errors.contact_name && "warehouseAE__input--invalid"}`}
              type="text"
              id="contact_name"
              name="contact_name"
              placeholder="Contact Name"
              value={userInput.contact_name}
              onChange={handleChange}
            ></input>
            {errors.contact_name && <p className="warehouseAE__error">{errors.contact_name}</p>}

            {/* Position  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="contact_position">
              Position
            </label>
            <input
              className={`warehouseAE__input ${errors.contact_position && "warehouseAE__input--invalid"}`}
              type="text"
              id="contact_position"
              name="contact_position"
              placeholder="Position"
              value={userInput.contact_position}
              onChange={handleChange}
            ></input>
            {errors.contact_position && <p className="warehouseAE__error">{errors.contact_position}</p>}

            {/* Phone Number  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="contact_phone">
              Phone Number
            </label>
            <input
              className={`warehouseAE__input ${errors.contact_phone && "warehouseAE__input--invalid"}`}
              type="text"
              id="contact_phone"
              name="contact_phone"
              placeholder="Phone Number"
              value={userInput.contact_phone}
              onChange={handleChange}
            ></input>
            {errors.contact_phone && <p className="warehouseAE__error">{errors.contact_phone}</p>}

            {/* Email  ======================================================== */}
            <label className="warehouseAE__label" htmlFor="contact_email">
              Email
            </label>
            <input
              className={`warehouseAE__input ${errors.contact_email && "warehouseAE__input--invalid"}`}
              type="text"
              id="contact_email"
              name="contact_email"
              placeholder="Email"
              value={userInput.contact_email}
              onChange={handleChange}
            ></input>
            {errors.contact_email && <p className="warehouseAE__error">{errors.contact_email}</p>}
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
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditWarehouse;
