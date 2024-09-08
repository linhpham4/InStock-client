import DeleteInventoryModal from "../../components/DeleteInventoryModal/DeleteInventoryModal";
import SectionComponent from "../../components/SectionComponent/SectionComponent";
import "./InventoryListPage.scss";
import '../../App.scss'
import { useParams } from "react-router-dom";

function InventoryListPage() {
  const title = "Inventory";
  const buttonText = "+ Add New Item";
  const buttonLink = '/inventory/add'

  const { itemName } = useParams()
  console.log(itemName)

  return (
    <>
      <main className="section-header">
        <SectionComponent title={title} buttonText={buttonText} buttonLink={buttonLink} />
      </main>
      <div className="warehouse-list__list-main">
        <InventoryList />

              <SectionComponent title={"Inventory"} buttonLink={"/inventory/add"} buttonText={" Add New Item"}/>
      <WarehouseInventoryList />
      </div>
    </>
  );
}

export default InventoryListPage;
