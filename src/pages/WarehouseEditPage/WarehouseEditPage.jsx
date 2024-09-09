import "./WarehouseEditPage.scss";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";

function WarehouseEditPage() {
  return (
    <main>
      <SectionComponent2 title="Edit Warehouse" buttonDisplay="hidden" />
      <EditWarehouse />
    </main>
  );
}

export default WarehouseEditPage;
