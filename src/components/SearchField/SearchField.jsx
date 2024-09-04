import "./SearchField.scss"
import searchIcon from '../../assets/icons/search-24px.svg'

import React from 'react'

function SearchField() {
  return (
    <div>
        <label htmlFor="" className="searchField">
            <input type="text" placeholder="Search..." className="searchField__field"/>
            <img src={searchIcon} alt="" className="searchField__icon"/>
        </label>
    </div>
  )
}

export default SearchField