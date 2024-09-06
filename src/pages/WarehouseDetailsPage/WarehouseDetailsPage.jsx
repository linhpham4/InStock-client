import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";"../../components/SectionComponent2/SectionComponent2"
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function WarehouseDetailsPage() {

  return (
    <div className="warehouseDetailsPage">
      {/* <h1>Warehouse Details Page</h1> */}

      <SectionComponent2 />
      <WarehouseDetails />
      {/* <WarehouseList /> */}
    </div>
  );
}


export default WarehouseDetailsPage;

      