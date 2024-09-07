import React from 'react'
import './InventoryList.scss'
import deleteIcon from '../../assets/icons/delete_outline-24px.svg'
import editIcon from '../../assets/icons/edit-24px.svg'
import sortIcon from '../../assets/icons/sort-24px.svg'
import chevron from "../../assets/icons/chevron_right-24px.svg"
import { Link } from 'react-router-dom'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const InventoryList = () => {

    const baseUrl = import.meta.env.VITE_API_URL

    const [inventory, setInventory] = useState([])

    const { warehouseId } = useParams();

    async function getInventoryByWarehouse() {
        const inventory = await axios.get(`${baseUrl}/stock/inventories`)
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
    
    <div className='inv__headings'>
        <div className='inv__title'>
            <p>INVENTORY ITEM</p>
            <img className='inv__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='inv__title'>
            <p>CATEGORY</p>
            <img className='inv__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='inv__title'>
            <p>STATUS</p>
            <img className='inv__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='inv__title'>
            <p>QUANTITY</p>
            <img className='inv__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='inv__title'>
            <p>WAREHOUSE</p>
            <img className='inv__icon' src={sortIcon} alt="sort" />
        </div>
        <div className='inv__title'>
            <p className='inv__title--padding'>ACTIONS</p>
        </div>
    </div>


    {inventory.map(item => (

        <div key={item.id} className='inv'>
                
            <div className='inv__card'>

                {/* This code will render at tablet/desktop breakpoints */}
                <Link className='inv__link toggle-tabletdesktop' to={`/inventory/${item.id}`}>
                    <p className='inv__name--blue '>{item.item_name}</p>
                    <img className='inv__chevron' src={chevron} alt="chevron" />
                </Link>
                <p className='inv__address toggle-tabletdesktop'>{item.category}</p>
                <p className='inv__name toggle-tabletdesktop'>{item.status}</p>
                <div className='inv__container toggle-tabletdesktop'>
                    <p className='inv__address'>{item.quantity}</p>
                </div>
                <div className='inv__container toggle-tabletdesktop'>
                    <p className='inv__address'>{item.warehouse_name}</p>
                </div>
                <div className='inv__alticons toggle-tabletdesktop'>
                    <img className='inv__altimages' src={deleteIcon} alt="delete" />
                    <img className='images' src={editIcon} alt="edit" />
                </div>
                {/* ---------------------------------------------------- */}



                {/* This code will render at mobile breakpoints */}
                <div className='inv__na toggle-mobile'>
                    <div className='inv__container'>
                        <p className='inv__label'>INVENTORY ITEM</p>
                        <Link className='inv__link' to={`/inventory/${item.id}`}> 
                            <p className='inv__name--blue'>{item.item_name}</p>
                            <img className='inv__chevron' src={chevron} alt="chevron" />
                        </Link>
                    </div>
                    <div className='inv__container'>
                        <p className='inv__label'>CATEGORY</p>
                        <p className='inv__address'>{item.category}</p>
                    </div>
                </div>

                <div className='inv__contact toggle-mobile'>

                    <div className='inv__container'>
                        <p className='inv__label'>STATUS</p>
                        <p className='inv__name'>{item.status}</p>
                    </div>
                    <div className='inv__container'>
                        <p className='inv__label'>QTY</p>
                        <p className='inv__info'>{item.quantity}</p>
                    </div>
                    <div className='inv__container'>
                        <p className='inv__label'>WAREHOUSE</p>
                        <p className='inv__info'>{item.warehouse_name}</p>
                    </div>

                </div>
                {/* ---------------------------------------------------- */}

            </div>

            <div className='inv__icons toggle-mobile'>

                <img src={deleteIcon} alt="delete" />
                <img src={editIcon} alt="edit" />

            </div>

        </div>
        ))}

    
    </main>

    
  )}
}

export default InventoryList