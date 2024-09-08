import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./InventoryListPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

function InventoryListPage() {
  return (
    <>
      {/* <SectionComponent /> */}
      <InventoryList />
      {/* <DeleteInventoryModal /> */}
    </>
  );
}

export default InventoryListPage;
