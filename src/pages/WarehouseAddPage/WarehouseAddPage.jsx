import "./WarehouseAddPage.scss";
import AddWarehouse from "../../components/AddWarehouse/AddWarehouse";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";

function WarehouseAddPage() {
  return (
    <main>
      <SectionComponent2 title="Add New Warehouse" buttonDisplay="hidden" />
      <AddWarehouse />
    </main>
  );
}

export default WarehouseAddPage;
