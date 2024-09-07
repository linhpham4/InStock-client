import React from 'react'
import './WarehouseInventoryList.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import chevron from "../../assets/icons/chevron_right-24px.svg"
import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const WarehouseInventoryList = () => {

    const baseUrl = import.meta.env.VITE_API_URL

    const [inventory, setInventory] = useState([])

    const { warehouseId } = useParams();

    async function getInventoryByWarehouse() {
        const inventory = await axios.get(`${baseUrl}/stock/warehouses/${warehouseId}/inventories`)
        setInventory(inventory.data)
    }

    useEffect(() => {
        getInventoryByWarehouse();
    }, [warehouseId]);

if (!inventory) {
    return (
        <div>Loading...</div>
    )
} else {

    return (
    
        <main>
    
        <div className='inventory__headings'>
            <div className='inventory__title'>
                <p>INVENTORY ITEM</p>
                <img className='inventory__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='inventory__title'>
                <p>CATEGORY</p>
                <img className='inventory__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='inventory__title'>
                <p>STATUS</p>
                <img className='inventory__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='inventory__title'>
                <p>QUANTITY</p>
                <img className='inventory__icon' src={sortIcon} alt="sort" />
            </div>
            <div className='inventory__title'>
                <p className='inventory__title--padding'>ACTIONS</p>
            </div>
        </div>
    
    
        {inventory.map(item => (
    
            <div key={item.id} className='inventory'>
                    
                <div className='inventory__card'>
    
                    {/* This code will render at tablet/desktop breakpoints */}
                    <Link className='inventory__link toggle-tabletdesktop' to={`/inventory/${item.id}`}>
                        <p className='inventory__name--blue '>{item.item_name}</p>
                        <img className='inventory__chevron' src={chevron} alt="chevron" />
                    </Link>
                    <p className='inventory__address toggle-tabletdesktop'>{item.category}</p>
                    <p className='inventory__name toggle-tabletdesktop'>{item.status}</p>
                    <div className='inventory__container toggle-tabletdesktop'>
                        <p className='inventory__address'>{item.quantity}</p>
                    </div>
                    <div className='inventory__alticons toggle-tabletdesktop'>
                        <img className='inventory__altimages' src={deleteIcon} alt="delete" />
                        <img className='images' src={editIcon} alt="edit" />
                    </div>
                    {/* ---------------------------------------------------- */}
    
    
    
                    {/* This code will render at mobile breakpoints */}
                    <div className='inventory__na toggle-mobile'>
                        <div className='inventory__container'>
                            <p className='inventory__label'>INVENTORY ITEM</p>
                            <Link className='inventory__link' to={`/inventory/${item.id}`}> 
                                <p className='inventory__name--blue'>{item.item_name}</p>
                                <img className='inventory__chevron' src={chevron} alt="chevron" />
                            </Link>
                        </div>
                        <div className='inventory__container'>
                            <p className='inventory__label'>CATEGORY</p>
                            <p className='inventory__address'>{item.category}</p>
                        </div>
                    </div>
    
                    <div className='inventory__contact toggle-mobile'>
    
                        <div className='inventory__container'>
                            <p className='inventory__label'>STATUS</p>
                            <p className='inventory__name'>{item.status}</p>
                        </div>
                        <div className='inventory__container'>
                            <p className='inventory__label'>QTY</p>
                            <p className='inventory__info'>{item.quantity}</p>
                        </div>
    
                    </div>
                    {/* ---------------------------------------------------- */}
    
                </div>
    
                <div className='inventory__icons toggle-mobile'>
    
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