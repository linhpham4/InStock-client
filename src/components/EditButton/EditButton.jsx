import './EditButton.scss'
import editIcon from '../../assets/icons/edit-white-24px.svg'

import React from 'react'

function Button() {
  return (
    <div>
        <button className='button'>
        <img src={editIcon} alt="pen icon" className='button__icon'/>
        <p className='button__text'>Edit</p>
        </button>

    </div>
  )
}

export default Button