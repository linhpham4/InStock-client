import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2"; "../../components/SectionComponent2/SectionComponent2"
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";
import WarehouseInventoryList from "../../components/WarehouseInventoryList/WarehouseInventoryList";

function WarehouseDetailsPage() {

  return (
    <div className="warehouseDetailsPage">

      <SectionComponent2 title={""} backLink={"/warehouse"} buttonDisplay={""} buttonLink/>
      <WarehouseDetails />
      <WarehouseInventoryList />
    </div>
  );
}


export default WarehouseDetailsPage;
