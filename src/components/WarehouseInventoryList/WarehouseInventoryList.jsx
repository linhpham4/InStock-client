import React from 'react'
import './WarehouseInventoryList.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import chevron from "../../assets/icons/chevron_right-24px.svg"
import { Link } from 'react-router-dom'

const WarehouseInventoryList = ({ inventory }) => {

if (!inventory) {
    return (
        <div>Loading...</div>
    )
} else {

    return (
    
        <main>
    
        <div className='warehouse__headings'>
            <div className='warehouse__title'>
                <p>INVENTORY ITEM</p>
                <img className='warehouse__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='warehouse__title'>
                <p>CATEGORY</p>
                <img className='warehouse__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='warehouse__title'>
                <p>STATUS</p>
                <img className='warehouse__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='warehouse__title'>
                <p>QUANTITY</p>
                <img className='warehouse__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='warehouse__title'>
                <p className='warehouse__title--padding'>ACTIONS</p>
            </div>
        </div>
    
    
        {inventory.map(item => (
    
            <div key={item.id} className='warehouse'>
                    
                <div className='warehouse__card'>
    
                    {/* This code will render at tablet/desktop breakpoints */}
                    <Link className='warehouse__link toggle-tabletdesktop' to={`/warehouse/${item.id}`}>
                        <p className='warehouse__name--blue '>{item.item_name}</p>
                        <img className='warehouse__chevron' src={chevron} alt="chevron" />
                    </Link>
                    <p className='warehouse__address toggle-tabletdesktop'>{item.category}</p>
                    <p className='warehouse__name toggle-tabletdesktop'>{item.status}</p>
                    <div className='warehouse__container toggle-tabletdesktop'>
                        <p className='warehouse__address'>{item.quantity}</p>
                    </div>
                    <div className='warehouse__alticons toggle-tabletdesktop'>
                        <img className='warehouse__altimages' src={deleteIcon} alt="delete" />
                        <img className='images' src={editIcon} alt="edit" />
                    </div>
                    {/* ---------------------------------------------------- */}
    
    
    
                    {/* This code will render at mobile breakpoints */}
                    <div className='warehouse__na toggle-mobile'>
                        <div className='warehouse__container'>
                            <p className='warehouse__label'>INVENTORY ITEM</p>
                            <Link className='warehouse__link' to={`/warehouse/${item.id}`}> 
                                <p className='warehouse__name--blue'>{item.item_name}</p>
                                <img className='warehouse__chevron' src={chevron} alt="chevron" />
                            </Link>
                        </div>
                        <div className='warehouse__container'>
                            <p className='warehouse__label'>CATEGORY</p>
                            <p className='warehouse__address'>{item.category}</p>
                        </div>
                    </div>
    
                    <div className='warehouse__contact toggle-mobile'>
    
                        <div className='warehouse__container'>
                            <p className='warehouse__label'>STATUS</p>
                            <p className='warehouse__name'>{item.status}</p>
                        </div>
                        <div className='warehouse__container'>
                            <p className='warehouse__label'>QTY</p>
                            <p className='warehouse__info'>{item.quantity}</p>
                        </div>
    
                    </div>
                    {/* ---------------------------------------------------- */}
    
                </div>
    
                <div className='warehouse__icons toggle-mobile'>
    
                    <img src={deleteIcon} alt="delete" />
                    <img src={editIcon} alt="edit" />
    
                </div>
    
            </div>
            ))}
    
        
        </main>
       
      )
}

}

export default WarehouseInventoryList