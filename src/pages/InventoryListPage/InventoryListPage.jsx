import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./InventoryListPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useParams } from "react-router-dom";

function InventoryListPage() {
  const title = "Inventory";
  const buttonText = "+ Add New Item";
  const buttonLink = "/inventory/add";
  const { itemName, itemId } = useParams();

  return (
    <>
      <section className="inventory-list-section">
        <main className="inventory-list-section__header">
          <SectionComponent
            title={title}
            buttonText={buttonText}
            buttonLink={buttonLink}
          />
        </main>
        <div className="inventory-list-section__list-main">
          <InventoryList />
        </div>
        <div
          className="inventory-list-section__delete-modal"
          style={{ display: !itemName ? "none" : "flex" }}
        >
          <DeleteInventoryModal ItemName={itemName} />
        </div>
      </section>
    </>
  );
}

export default InventoryListPage;
