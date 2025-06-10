import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PredictPage from "./pages/Predictpage";
import CsvTable from "./pages/DatasetPage";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict" element={<PredictPage />} />
        <Route path="/dataset" element={<CsvTable />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
