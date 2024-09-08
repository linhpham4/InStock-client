import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";
("../../components/SectionComponent2/SectionComponent2");
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";
import SelectedWarehouse from "../../components/SelectedWarehouse/SelectedWarehouse";
import { useParams } from "react-router-dom";

function WarehouseDetailsPage() {
  const { warehouseId } = useParams();

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

  const warehouseName = swappedWarehouseKey[warehouseId];

  return (
    <>
      <main className="warehouse-details-page">
        <div className="warehouse-details-page__header">
          <SectionComponent2 title={warehouseName} />
        </div>
        <div className="warehouse-details-page__sub-header">
          <WarehouseDetails />
        </div>
        <div className="warehouse-details-page__list-main">
          <WarehouseInventoryList />
        </div>
      </main>
    </>
  );
}

export default WarehouseDetailsPage;
