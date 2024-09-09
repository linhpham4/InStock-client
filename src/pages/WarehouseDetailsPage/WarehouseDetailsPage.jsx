import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";

const URL = import.meta.env.VITE_APP_BASE_URL;



function WarehouseDetailsPage() {
const { warehouseId } = useParams();
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getWarehouseDetails = async () => {
        try {
            const results = await axios.get(`${URL}/stock/warehouses/${warehouseId}`);
            setSelectedWarehouse(results.data);
        } catch (error) {
            setError('Unable to get warehouse details');
            console.error('Unable to get warehouse details:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (warehouseId) {
            getWarehouseDetails();
        }
    }, [warehouseId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!selectedWarehouse) {
        return <div>Loading...</div>;
    }
  return (
    <>
<div className="warehouseDetailsPage">
        <SectionComponent2 />
      <WarehouseDetails selectedWarehouse={selectedWarehouse}/>
      <WarehouseInventoryList />
</div>

    </>
  );
}


export default WarehouseDetailsPage;
