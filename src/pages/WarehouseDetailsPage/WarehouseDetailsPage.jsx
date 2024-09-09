import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";
("../../components/SectionComponent2/SectionComponent2");
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import { useParams } from "react-router-dom";
import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";

function WarehouseDetailsPage() {
  const { warehouseId, itemId } = useParams();

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

  return (
    <>
      <main className="warehouse-details-page">
        <div className="warehouse-details-page__header">
          <SectionComponent2 title={swappedWarehouseName} />
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
