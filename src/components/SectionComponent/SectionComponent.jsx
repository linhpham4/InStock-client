import "./SectionComponent.scss"



import React from 'react'
import EditButton from '../EditButton/EditButton'
import SearchField from '../SearchField/SearchField'

function SectionComponent() {
  return (
    <div className='warehouse-header'>
        <h2 className='warehouse-header__heading'>Warehouses</h2>
        <div className="warehouse-header__inputs">
        <SearchField />
        <EditButton />            
        </div>

    </div>
  )
}

export default SectionComponent