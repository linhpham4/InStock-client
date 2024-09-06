import React from 'react';


import './warehouseDetails.scss';
import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import SelectedWarehouse from '../SelectedWarehouse/SelectedWarehouse';

const URL = import.meta.env.VITE_APP_BASE_URL;

function WarehouseDetails() {
    // const navigate = useNavigate();

    // const { id } = useParams();
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);


    const getWarehouseDetails = async () => {
    // const getWarehouseDetails = async (warehouseId) => {
        try {
            // const results = await axios.get(`${URL}/warehouses/${warehouseId}`);
            const results = await axios.get(`${URL}/warehouses/1`);
            const selectedWarehouse = results.data
            setSelectedWarehouse(selectedWarehouse)
                        console.log(results)

        } catch (error) {
            console.error('unable to get warehouse details:', error);
        }
    };

    useEffect(() => {
        // if (id && warehouses.length > 0) {
        //     getWarehouseDetails(id);
            getWarehouseDetails();
    // }, [id, warehouses]);
    }, []);

    return (
        <div className='container'>
            <div className="container__main-content">
                <SelectedWarehouse selectedWarehouse={selectedWarehouse} />
            </div>

            {/* <button className="back-button" onClick={() => navigate('/warehouses')}>
        &larr; Back to Warehouse List
      </button> */}
        </div>
    );
}






export default WarehouseDetails;
