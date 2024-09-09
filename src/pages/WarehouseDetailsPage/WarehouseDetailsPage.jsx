import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { useParams } from "react-router-dom";
import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import React, { useState, useEffect } from "react";
import axios from "axios";

function WarehouseDetailsPage() {
  const { warehouseId, itemId } = useParams();
  const URL = import.meta.env.VITE_APP_BASE_URL;
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const swappedWarehouseKey = {
    1: "Manhattan",
    2: "Washington",
    3: "Jersey",
    4: "SF",
    5: "SantaMonica",
    6: "Seattle",
    7: "Miami",
    8: "Boston",
  };

  const swappedWarehouseName = swappedWarehouseKey[warehouseId];

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
    return <div>Loading...</div>;
  }
  return (
    <>
      <main className="warehouse-details-page">
        <div className="warehouse-details-page__header">
          <SectionComponent2 title={swappedWarehouseName} buttonLink={`/warehouse/${warehouseId}/edit`}/>
        </div>
        <div className="warehouse-details-page__sub-header">
          <WarehouseDetails />
        </div>
        <div className="warehouse-details-page__list-main">
          <WarehouseInventoryList />
        </div>
        <div
          className="inventory-list-section__delete-modal"
          style={{ display: !itemId ? "none" : "flex" }}
        >
          <DeleteInventoryModal />
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsPage;
