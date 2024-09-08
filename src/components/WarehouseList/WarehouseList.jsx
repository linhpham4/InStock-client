import React from "react";
import "./WarehouseList.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import chevron from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseList = (viewDeleteModal) => {
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  const [warehouses, setWarehouses] = useState([]);

  async function getWarehouseList() {
    const warehouseList = await axios.get(`${baseUrl}/stock/warehouses`);
    setWarehouses(warehouseList.data);
  }

  useEffect(() => {
    getWarehouseList();
  }, []);




// const URL = import.meta.env.VITE_APP_BASE_URL;

// const WarehouseList = () => {

    // const { id } = useParams();
    // console.log(id)
    // const [videos, setVideos] = useState([]);
    // const [warehouses, setWarehouses] = useState([]);

    // const getWarehouses = async () => {
    //     try {
    //         const results = await axios.get(`${URL}/stock/warehouses`)
    //         const warehouses = results.data;
    //         console.log(warehouses)
    //         setWarehouses(warehouses);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getWarehouses();


    // }, []);


  return (
    <main>
      <div className="warehouse__headings">
        <div className="warehouse__title">
          <p>WAREHOUSE</p>
          <img className="warehouse__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse__title">
          <p>ADDRESS</p>
          <img className="warehouse__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse__title">
          <p>CONTACT NAME</p>
          <img className="warehouse__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse__title">
          <p>CONTACT INFORMATION</p>
          <img className="warehouse__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse__title">
          <p className="warehouse__title--padding">ACTIONS</p>
          <img className="warehouse__icon" src={sortIcon} alt="sort" />
        </div>
      </div>


            {warehouses.map(warehouse => (

                <div className='warehouse'>

                    <div className='warehouse__card'>

                        {/* This code will render at tablet/desktop breakpoints */}
                        <Link className='warehouse__link toggle-tabletdesktop' to={`/warehouse/${warehouse.id}`}>
                            <p className='warehouse__name--blue '>{warehouse.warehouse}</p>
                            <img className='warehouse__chevron' src={chevron} alt="chevron" />
                        </Link>
                        <p className='warehouse__address toggle-tabletdesktop'>{warehouse.address}</p>
                        <p className='warehouse__name toggle-tabletdesktop'>{warehouse.contact}</p>
                        <div className='warehouse__container toggle-tabletdesktop'>
                            <p className='warehouse__address'>{warehouse.number}</p>
                            <p className='warehouse__address'>{warehouse.email}</p>
                        </div>
                        <div className='warehouse__alticons toggle-tabletdesktop'>
                            <img className='warehouse__altimages' src={deleteIcon} alt="delete" />
                            <img className='images' src={editIcon} alt="edit" />
                        </div>
                        {/* ---------------------------------------------------- */}



            {/* This code will render at mobile breakpoints */}
            <div className="warehouse__na toggle-mobile">
              <div className="warehouse__container">
                <p className="warehouse__label">WAREHOUSE</p>
                <Link
                  className="warehouse__link"
                  to={`/warehouse/${warehouse.id}`}
                >
                  <p className="warehouse__name--blue">
                    {warehouse.warehouse_name}
                  </p>
                  <img
                    className="warehouse__chevron"
                    src={chevron}
                    alt="chevron"
                  />
                </Link>
              </div>
              <div className="warehouse__container">
                <p className="warehouse__label">ADDRESS</p>
                <p className="warehouse__address">{warehouse.address}</p>
              </div>
            </div>

            <div className="warehouse__contact toggle-mobile">
              <div className="warehouse__container">
                <p className="warehouse__label">CONTACT NAME</p>
                <p className="warehouse__name">{warehouse.contact_name}</p>
              </div>
              <div className="warehouse__container">
                <p className="warehouse__label">CONTACT INFORMATION</p>
                <p className="warehouse__info">{warehouse.contact_phone}</p>
                <p className="warehouse__info">{warehouse.contact_email}</p>
              </div>
            </div>
            {/* ---------------------------------------------------- */}
          </div>

          <div className="warehouse__icons toggle-mobile">
            <Link
              className="warehouse__link-delete"
              to={`/warehouse/${warehouse.warehouse_name}/delete`}
              onClick={() => viewDeleteModal(warehouse.warehouse_name)}
            >
              <img src={deleteIcon} alt="delete" />
            </Link>
            <img src={editIcon} alt="edit" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default WarehouseList;
