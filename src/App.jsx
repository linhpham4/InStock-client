import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehouseEditPage from "./pages/WarehouseEditPage/WarehouseEditPage";
import WarehouseAddPage from "./pages/WarehouseAddPage/WarehouseAddPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryEditPage from "./pages/InventoryEditPage/InventoryEditPage";
import InventoryAddPage from "./pages/InventoryAddPage/InventoryAddPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/warehouse" element={<WarehouseListPage />} />
          <Route
            path="/warehouse/:warehouseId/delete"
            element={<WarehouseListPage />}
          />
          <Route
            path="/warehouse/:warehouseId"
            element={<WarehouseDetailsPage />}
          />
          <Route
            path="/warehouse/:warehouseId/Edit"
            element={<WarehouseEditPage />}
          />
          <Route path="/warehouse/add" element={<WarehouseAddPage />} />
          <Route path="/inventory" element={<InventoryListPage />} />
          <Route
            path="/inventory/:itemId/delete"
            element={<InventoryListPage />}
          />
          <Route path="/inventory/:itemId" element={<InventoryDetailsPage />} />
          <Route
            path="/inventory/:itemId/edit"
            element={<InventoryEditPage />}
          />
          <Route path="/inventory/add" element={<InventoryAddPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
