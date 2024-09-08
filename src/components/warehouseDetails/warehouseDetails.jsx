import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SelectedWarehouse from "../SelectedWarehouse/SelectedWarehouse";
import "./warehouseDetails.scss";

const URL = import.meta.env.VITE_APP_BASE_URL;

function WarehouseDetails() {
  const { warehouseId } = useParams();
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="container">
      <div className="container__main-content">
        <SelectedWarehouse selectedWarehouse={selectedWarehouse} />
      </div>
    </div>
  );
}

export default WarehouseDetails;
