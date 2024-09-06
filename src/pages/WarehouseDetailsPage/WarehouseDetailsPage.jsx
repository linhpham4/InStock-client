import "./WarehouseDetailsPage.scss";
import SectionComponent2 from "../../components/SectionComponent2/SectionComponent2";"../../components/SectionComponent2/SectionComponent2"
import { useNavigate } from 'react-router-dom';
import WarehouseDetails from "../../components/warehouseDetails/warehouseDetails";

function WarehouseDetailsPage() {
  return (
    <div className="warehouseDetailsPage">
      {/* <h1>Warehouse Details Page</h1> */}

      <SectionComponent2 />
      <WarehouseDetails />
    </div>
  );
}

export default WarehouseDetailsPage;
    // const navigate = useNavigate();


            {/* <button className="back-button" onClick={() => navigate('/warehouses')}>
        &larr; Back to Warehouse List
      </button> */}