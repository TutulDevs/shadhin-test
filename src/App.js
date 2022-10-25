import { Counter } from "./components/Counter/counter";
import { Routes, Route } from "react-router-dom";
import { DemoForm } from "./components/DemoForm/DemoForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DemoForm />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
