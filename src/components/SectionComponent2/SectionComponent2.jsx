import "./SectionComponent2.scss";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

import React from "react";

function SectionComponent() {
  return (
    <div className="washington-header">
      <div className="washington-header__location">
        <img src={backArrow} alt="" />

        <h2 className="washington-header__heading">Washington</h2>
      </div>

      <button className="washington-header__button2">
        <img src={editIcon} alt="" className="washington-header__btn-icon"/>
        <p className="washington-header__btn-text">Edit</p>
      </button>
    </div>
  );
}

export default SectionComponent;

{
  /* <SearchField /> */
}
{
  /* <AddWarehouseButton />             */
}
