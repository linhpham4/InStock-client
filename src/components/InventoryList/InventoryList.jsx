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
        const inventory = await axios.get(`${baseUrl}/stock//warehouses/${warehouseId}/inventories`)
        setInventory(inventory.data)
    }

    useEffect(() => {
        getInventoryByWarehouse();
    }, [warehouseId]);



  return (



<div>placeholder</div>

    
  )
}

export default InventoryList