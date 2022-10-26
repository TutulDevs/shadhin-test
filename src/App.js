import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AdminDetails } from "./components/Details/AdminDetails";
import { EmployeeDetails } from "./components/Details/EmployeeDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/:id" element={<AdminDetails />} />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
      </Routes>
    </>
  );
}

export default App;
