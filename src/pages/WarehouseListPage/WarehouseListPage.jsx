import "./WarehouseListPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import DeleteWarehouseModal from "../../components/DeleteWarehouseModal/DeleteWarehouseModal";
import { useParams } from "react-router-dom";

function WarehouseListPage() {
  const title = "Warehouses";
  const buttonText = "+ Add New Warehouse";
  const { warehouseName } = useParams();

  const { warehouse } = useParams();
  console.log(warehouse)

  const viewDeleteModal = () => {
    console.log(`success: ${warehouseName}`);
    console.log(typeof warehouseName);
  };

  return (
    <>
      <section className="section-warehouse-list-page">
        <main className="section-warehouse-list-page__header">
          <SectionComponent title={title} buttonText={buttonText} />
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
    </>
  );
}
export default WarehouseListPage;
