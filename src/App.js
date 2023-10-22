import { Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
import Test from "./components/Test";

function App() {
  

  return (
    <div className="bg-gray-100 h-screen">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="test" element={<Test/>} />
        <Route path="table" element={<Table/>} />
      </Routes>
    </div>
  );
}

export default App;
