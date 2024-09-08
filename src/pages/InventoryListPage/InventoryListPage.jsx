import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./InventoryListPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useParams } from "react-router-dom";

function InventoryListPage() {
  const title = "Inventory";
  const buttonText = "+ Add New Item";
  const buttonLink = '/inventory/add'

  const { itemName } = useParams()

  return (
    <>
      <main className="section-header">
        <SectionComponent title={title} buttonText={buttonText} buttonLink={buttonLink} />
      </main>
      <div className="warehouse-list__list-main">
        <InventoryList />
      </div>
    </>
  );
}

export default InventoryListPage;
