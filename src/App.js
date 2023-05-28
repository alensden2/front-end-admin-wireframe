import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/admin/dashboard";
import Employees from "./pages/admin/employees";
import Home from "./pages/admin/home";
import InventoryPage from "./pages/admin/inventory";
import Sales from "./pages/admin/sales";
import Statistics from "./pages/admin/statistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
