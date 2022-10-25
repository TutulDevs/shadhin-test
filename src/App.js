import { Counter } from "./components/Counter/counter";
import { Routes, Route } from "react-router-dom";
import { DemoForm } from "./components/DemoForm/DemoForm";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
