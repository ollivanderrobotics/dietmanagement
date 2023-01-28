import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/inc/Product";
import Admin from "./components/pages/Admin";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
