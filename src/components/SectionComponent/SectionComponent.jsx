import "./SectionComponent.scss"



import React from 'react'
import SearchField from '../SearchField/SearchField'
import AddWarehouseButton from "../AddWarehouseButton/AddWarehouseButton"

function SectionComponent() {
  return (
    <div className='warehouse-header'>
        <h2 className='warehouse-header__heading'>Warehouses</h2>
        <div className="warehouse-header__inputs">
        <SearchField />
        <AddWarehouseButton />            
        </div>

    </div>
  )
}

export default SectionComponent