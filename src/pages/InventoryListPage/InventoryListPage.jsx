import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import "./InventoryListPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

function InventoryListPage() {
  return (
    <div className="test">
      <h1>Inventory List Page</h1>
      <SectionComponent />
      <WarehouseInventoryList />
      <DeleteInventoryModal />
    </div>
  );
}

export default InventoryListPage;
