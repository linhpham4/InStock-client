import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";"../../components/SectionComponent2/SectionComponent2"
import { useParams } from "react-router-dom";

import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import axios from "axios";
import { useEffect, useState } from "react";

function WarehouseDetailsPage() {

  const baseUrl = import.meta.env.VITE_API_URL

  const [inventory, setInventory] = useState(undefined)

  const { warehouseId } = useParams([]);

  async function getInventoryByWarehouse() {
    const inventory = await axios.get(`${baseUrl}/stock//warehouses/${warehouseId}/inventories`)
    setInventory(inventory.data)
  }

  useEffect(() => {
    getInventoryByWarehouse();
  }, [warehouseId]);

if (!inventory) {
  return (
    <div>Loading...</div>
  )
} else {

  return (
    <>
      <WarehouseInventoryList inventory={inventory} />
    </>
  );
}

}


export default WarehouseDetailsPage;
