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

    //Dummy data - to be deleted later
    const inventory = [
        {
            "id": 1,
            "warehouse_name": "Manhattan",
            "item_name": "Television",
            "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
            "category": "Electronics",
            "status": "In Stock",
            "quantity": 500
        },
        {
            "id": 2,
            "warehouse_name": "Manhattan",
            "item_name": "Gym Bag",
            "description": "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
            "category": "Gear",
            "status": "Out of Stock",
            "quantity": 0
        },
        {
            "id": 3,
            "warehouse_name": "Manhattan",
            "item_name": "Hoodie",
            "description": "A simple 100% cotton hoodie, this is an essential piece for any wardrobe.",
            "category": "Apparel",
            "status": "Out of Stock",
            "quantity": 0
        },
        {
            "id": 4,
            "warehouse_name": "Manhattan",
            "item_name": "Keychain",
            "description": "Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.",
            "category": "Accessories",
            "status": "In Stock",
            "quantity": 2000
        },
        {
            "id": 5,
            "warehouse_name": "Manhattan",
            "item_name": "Shampoo",
            "description": "Natural shampoo made from 99% biodegradable ingredients.",
            "category": "Health",
            "status": "In Stock",
            "quantity": 4350
        },
        {
            "id": 6,
            "warehouse_name": "Manhattan",
            "item_name": "Phone Charger",
            "description": "This USB-C phone charger features fast charging for the latest devices.",
            "category": "Electronics",
            "status": "In Stock",
            "quantity": 10000
        },
        {
            "id": 7,
            "warehouse_name": "Manhattan",
            "item_name": "Tent",
            "description": "Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.",
            "category": "Gear",
            "status": "In Stock",
            "quantity": 800
        }
    ]

    // const baseUrl = import.meta.env.VITE_APP_BASE_URL

    // const [inventory, setInventory] = useState(inventoryDummy)

    // const { warehouseId } = useParams();

    // async function getInventoryByWarehouse() {
    //     const inventory = await axios.get(`${baseUrl}/stock/inventories`)
    //     setInventory(inventory.data)
    // }

    // useEffect(() => {
    //     getInventoryByWarehouse();
    // }, [warehouseId]);

    // if (!inventory) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // } else {

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
// }

export default InventoryList