import "./WarehouseListPage.scss";
import '../../App.scss'

import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";

function WarehouseListPage() {
  return (
    <main>
    <SectionComponent title={"Warehouses"} buttonLink={"/warehouse/add"} buttonText={" Add New Warehouse"}/>
    <WarehouseDetails />
      <WarehouseList />
    </main>
  );
}
export default WarehouseListPage;
