import "./SectionComponent.scss"
import searchIcon from '../../assets/icons/search-24px.svg'



import React from 'react'

function SectionComponent() {
  return (

<div className='warehouse-header'>
        <h2 className='warehouse-header__heading'>Warehouses</h2>
        
        <div className="warehouse-header__inputs">

          <div className="warehouse-header__searchField">
            <input type="text" placeholder="Search..." className="warehouse-header__field" />
            <img src={searchIcon} alt="" className="warehouse-header__icon" />
          </div>

          <button className='warehouse-header__button2'>
            <p className='warehouse-header__btn-text'>+ Add New Warehouse</p>
          </button>

        </div>





      </div>

  )
}

export default SectionComponent
