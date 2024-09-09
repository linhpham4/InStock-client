import "./WarehouseListPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useParams } from "react-router-dom";

function WarehouseListPage() {
  const title = "Warehouses";
  const buttonText = "+ Add New Warehouse";
  const { warehouseName } = useParams();

  const viewDeleteModal = () => {
    console.log(`success: ${warehouseName}`);
    console.log(typeof warehouseName);
  };

  return (
    <>
      <main className="section-warehouse-list-page">
        <SectionComponent
          title={title}
          buttonText={buttonText}
          buttonLink="/warehouse/add"
        />
        <WarehouseList viewDeleteModal={viewDeleteModal()} />
        <div
          className="section-warehouse-list-page__delete-modal"
          style={{ display: !warehouseName ? "none" : "flex" }}
        >
          <DeleteWarehouseModal Warehouse={warehouseName} />
        </div>
      </main>
    </>
  );
}
export default WarehouseListPage;
