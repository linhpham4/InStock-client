import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./WarehouseDetails.scss";

function WarehouseDetails() {
  const { warehouseId } = useParams();
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const URL = import.meta.env.VITE_APP_BASE_URL;

  const getWarehouseDetails = async () => {
    try {
      const results = await axios.get(`${URL}/stock/warehouses/${warehouseId}`);
      setSelectedWarehouse(results.data);
    } catch (error) {
      setError("Unable to get warehouse details");
      console.error("Unable to get warehouse details:", error);
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
    return <div>No warehouse details available.</div>;
  }

  return (
    <>
      <div className="warehouseDetails">
        <div className="warehouseDetails__location">
          <h5 className="warehouseDetails__heading">WAREHOUSE ADDRESS</h5>
          <div className="warehouseDetails__full-address">
            <p className="warehouseDetails__address">
              {selectedWarehouse.address},
            </p>
            <p className="warehouseDetails__city">
              {selectedWarehouse.city}, {selectedWarehouse.country}
            </p>
          </div>
        </div>

        <div className="warehouseDetails__point-info">
          <div className="warehouseDetails__point">
            <h5 className="warehouseDetails__heading">CONTACT NAME:</h5>
            <p className="warehouseDetails__contact-name">
              {selectedWarehouse.contact_name}
            </p>
            <p className="warehouseDetails__contact-title">
              {selectedWarehouse.contact_position}
            </p>
          </div>
          <div className="warehouseDetails__info">
            <h5 className="warehouseDetails__heading">CONTACT INFORMATION</h5>
            <p className="warehouseDetails__phone">
              {selectedWarehouse.contact_phone}
            </p>
            <p className="warehouseDetails__email">
              {selectedWarehouse.contact_email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WarehouseDetails;
