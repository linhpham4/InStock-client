import "./InventoryEditPage.scss";
import EditInventoryComponent from "../../components/EditInventoryComponent/EditInventoryComponent";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";

function InventoryEditPage() {
  return (
    <main>
      <SectionComponent2 title="Edit Inventory Item" buttonDisplay="hidden" />
      <EditInventoryComponent />
    </main>
  );
}

export default InventoryEditPage;
