import "./WarehouseListPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import SectionComponent from "../../components/SectionComponent/SectionComponent";

function WarehouseListPage() {
  const title = "Warehouses";
  const buttonText = "+ Add New Warehouse";
  const buttonLink = '/warehouse/add'
  return (
    <>
      <main className="section-header">
        <SectionComponent title={title} buttonText={buttonText} buttonLink={buttonLink} />
      </main>
      <div className="warehouse-list__list-main">
        <WarehouseList />
      </div>
    </>
  );
}
export default WarehouseListPage;
