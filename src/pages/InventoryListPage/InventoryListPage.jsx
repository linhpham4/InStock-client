import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./InventoryListPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";

function InventoryListPage() {
  const title = "Inventory";
  const buttonText = "+ Add New Item";
  return (
    <>
      <main className="section-header">
        <SectionComponent title={title} buttonText={buttonText} />
      </main>
      <div className="warehouse-list__list-main">
        <InventoryList />
      </div>
    </>
  );
}

export default InventoryListPage;
