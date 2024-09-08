import "./WarehouseListPage.scss";
import '../../App.scss'

import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useParams } from "react-router-dom";
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";

function WarehouseListPage() {
  // const title = "Warehouses";
  // const buttonText = "+ Add New Warehouse";
  const { warehouseName } = useParams();

  const viewDeleteModal = () => {
    console.log(`success: ${warehouseName}`);
    console.log(typeof warehouseName);
  };

  return (
    <main>
      <section className="section-warehouse-list-page">
        <main className="section-warehouse-list-page__header">
          <SectionComponent title={"Warehouses"} buttonLink={"/warehouse/add"} buttonText={" Add New Warehouse"}/>
    <WarehouseDetails />
        </main>
        <div className="section-warehouse-list-page__list-main">
          <WarehouseList viewDeleteModal={viewDeleteModal()} />
        </div>
        <div
          className="section-warehouse-list-page__delete-modal"
          style={{ display: !warehouseName ? "none" : "flex" }}
        >
          <DeleteWarehouseModal Warehouse={warehouseName} />
        </div>
      </section>
    </main>
  );
}
export default WarehouseListPage;
