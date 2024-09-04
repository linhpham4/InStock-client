import "./SectionComponent2.scss"



import React from 'react'
import Button from "../EditButton/EditButton"
import backArrow from '../../assets/icons/arrow_back-24px.svg'

function SectionComponent2() {
  return (
    <div className='warehouse-header'>
      <div className="warehouse-header__location">
      <img src={backArrow} alt="back arrow icon" className="warehouse-header__arrow" />
        <h2 className='warehouse-header__heading'>Washington</h2>        
      </div>

        <div className="warehouse-header__inputs">
        <Button />
        </div>

    </div>
  )
}

export default SectionComponent2