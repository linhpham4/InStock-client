import "./WarehouseListPage.scss";
import '../../App.scss'

import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";

function WarehouseListPage() {
  return (
    <main>
    <SectionComponent title={"Warehouses"} buttonLink={"/warehouse/add"} buttonText={" Add New Warehouse"}/>
      <WarehouseList />
    </main>
  );
}
export default WarehouseListPage;
