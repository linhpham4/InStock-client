import "./SectionComponent2.scss";
import editIcon from "../../assets/icons/edit-white-24px.svg";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link, useNavigate } from 'react-router-dom';

import React from "react";

function SectionComponent() {
    // const navigate = useNavigate();



  return (
    <div className="washington-header">
      <Link to={`/`}>
      <div className="washington-header__location">
        <img src={backArrow} alt="" />
        {/* <img src={backArrow} alt="" onClick={() => navigate('/warehouses')}/> */}

        <h2 className="washington-header__heading">Washington</h2>
      </div>      
      </Link>


      <button className="washington-header__button2">
        <img src={editIcon} alt="" className="washington-header__btn-icon"/>
        <p className="washington-header__btn-text">Edit</p>
      </button>
    </div>
  );
}

export default SectionComponent;
