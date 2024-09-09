import "./InventoryAddPage.scss";
import AddInventoryComponent from "../../components/AddInventoryComponent/AddInventoryComponent.jsx";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2.jsx"

function InventoryAddPage() {
  return (
      <main className="inventoryAddPage">
        <SectionComponent2 title="Add New Inventory Item" buttonDisplay="hidden" />
        <AddInventoryComponent />
      </main>
  );
}

export default InventoryAddPage;
