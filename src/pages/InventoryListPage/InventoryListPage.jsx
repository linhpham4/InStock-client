import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import "./InventoryListPage.scss";
import '../../App.scss'

function InventoryListPage() {
  return (
    <main className="">
      <SectionComponent title={"Inventory"} buttonLink={"/inventory/add"} buttonText={" Add New Item"}/>
      <WarehouseInventoryList />
    </main>
  );
}

export default InventoryListPage;
