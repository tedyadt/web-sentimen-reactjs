import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SentimentPredictor from "./components/SentimentPredictor";
import SemiCircleProgress from "./components/Semicircleprogress";
import BackgroundGradient from "./components/BackgroundGradient";
import SentimentPieChart from "./components/SentimentPieChart";
import PredictPage from "./pages/Predictpage";
import BarChartSentimen from "./components/BarChartSentimen";
import CsvTable from "./pages/DatasetPage";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <section className="relative overflow-hidden py-28 px-4 bg-white md:px-8">
      <div className="max-w-xl mx-auto text-center relative">
        <div className="py-4">
          <h3 className="text-2xl text-purple-700 font-bold md:text-4xl">
            Analisis Sentimen Terhadap Facebook Marketplace
          </h3>
          <p className="text-gray-900 leading-relaxed mt-3">
            Tugas Akhir Analisis Sentimen Facebook Marketplace menggunakan
            Metode Support Vector Machine dan Seleksi Fitur Chi Square
          </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <a
            href="/predict"
            className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
          >
            Try It Out
          </a>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center w-full gap-12 mt-10 ">
        {/* Card 1 - Bar Chart */}
        <div className="bg-white shadow-xl rounded-xl border p-3 w-[550px] ">
          <h2 className="text-xl font-semibold mb-3 text-center">
            Histogram Sentimen
          </h2>
          <BarChartSentimen />
        </div>

        {/* Card 2 - Wordcloud Image */}
        <div className="bg-white shadow-xl rounded-xl border p-3 w-[550px] animate-in fade-in-10 slide-in-from-top-10 duration-700 delay-400">
          <h2 className="text-xl font-semibold mb-3 text-center">Word Cloud</h2>
          <img
            className="w-full h-[300px] object-contain rounded-xl"
            src="/images/wordcloud.png"
            alt="Wordcloud"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-center w-full mt-10">
        <SemiCircleProgress percentage={80} />
        <SentimentPieChart
          data={[
            { name: "Positif", value: 1861 },
            { name: "Negatif", value: 818 },
          ]}
        />
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App relative overflow-hidden">
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
