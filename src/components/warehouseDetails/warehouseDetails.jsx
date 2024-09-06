import React from 'react';


import './warehouseDetails.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import SelectedWarehouse from '../SelectedWarehouse/SelectedWarehouse';

const URL = import.meta.env.VITE_APP_BASE_URL;

function WarehouseDetails() {
    // const navigate = useNavigate();

    const { warehouseId } = useParams();
    console.log(warehouseId)
    const [selectedWarehouse, setSelectedWarehouse] = useState([]);


    const getWarehouseDetails = async () => {
        try {
            const results = await axios.get(`${URL}/warehouses/${warehouseId}`);
            // const results = await axios.get(`${URL}/warehouses/1`);
            const selectedWarehouse = results.data
            setSelectedWarehouse(selectedWarehouse)
                        console.log(results)

        } catch (error) {
            console.error('unable to get warehouse details:', error);
        }
    };

    useEffect(() => {
            getWarehouseDetails();
            // getWarehouseDetails(warehouseId);
    // }, []);
    }, [warehouseId]);

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
