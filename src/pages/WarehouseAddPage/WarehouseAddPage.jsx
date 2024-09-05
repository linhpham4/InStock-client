import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./WarehouseAddPage.scss";
import WarehouseAddEdit from "../../components/WarehouseAddEdit/WarehouseAddEdit";

function WarehouseAddPage() {
  return (

    <main>
      <SectionComponent />
      <WarehouseAddEdit actionType="Add New"/>
    </main>

  );
}

export default WarehouseAddPage;
