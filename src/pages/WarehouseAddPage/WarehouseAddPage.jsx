import "./WarehouseAddPage.scss";
import WarehouseAddEdit from "../../components/WarehouseAddEdit/WarehouseAddEdit";

function WarehouseAddPage() {
  return (
    <main>
      <WarehouseAddEdit title="Add New Warehouse" backLink="/warehouse" buttonText="+ Add Warehouse"/>
    </main>
  );
}

export default WarehouseAddPage;
