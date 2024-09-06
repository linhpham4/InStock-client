import './warehouseDetails.scss'

const URL = import.meta.env.VITE_APP_BASE_URL;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function WarehaouseDetails() {


    const { id } = useParams();
    // console.log(id)
    const [videos, setVideos] = useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = useState();

    const getVideos = async () => {
        try {
            const results = await axios.get(`${URL}/warehouses`);
            const videos = results.data;
            console.log(videos)
            setVideos(videos);
        } catch (error) {
            console.log(error);
        }
    }

    const getWarehouseDetails = async () => {
    // const getWarehouseDetails = async (warehousId) => {
        try {
            const results = await axios.get(`${URL}/warehouses/${}`);
            // const results = await axios.get(`${URL}/warehouses/${warehousId}`);
            console.log(results)
            const WarehouseDetails = results.data;
            console.log(WarehouseDetails)
            setSelectedWarehouse(WarehouseDetails);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWarehouseDetails();


    }, []);



    // useEffect(() => {
    //     if (videos.length > 0) {
    //         const warehouseId = id ? id : videos[0].id;
    //         getWarehouseDetails(warehouseId)

    //     }

    // }, [id, videos]);

    if (selectedWarehouse === undefined) {
        return <>
            <main className='main'>Loading...</main>
        </>
    }
    // console.log(selectedVideo)

    // const filteredVideoList = videos.filter(video => video.id !== selectedVideo.id)

    return (
        <div className='container'>
            <div className="container__main-content">
                <selectedWarehouse selectedWarehouse={selectedWarehouse} />
            <p>
                `WAREHOUSE NAME ${}`
            </p>
            </div>

        </div>
    );
}

export default WarehaouseDetails;