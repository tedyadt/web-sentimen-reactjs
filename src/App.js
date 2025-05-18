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
import ScoreCard from "./components/ScoreCard";

function HomePage() {
  return (
    
    <section className="relative overflow-hidden py-28 px-4 bg-white md:px-8">
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="/images/facebook.jpeg"
              className="md:max-w-lg sm:rounded-lg "
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Analisis Sentimen Terhadap Facebook Marketplace
            </p>
            <p className="mt-3 text-gray-600">
              Website ini merupakan hasil dari Tugas Akhir berjudul "Analisis Sentimen Facebook Marketplace Menggunakan Metode Support Vector Machine dan Seleksi Fitur Chi Square". Penelitian ini bertujuan untuk mengklasifikasikan opini pengguna terhadap Facebook Marketplace ke dalam sentimen positif dan negatif. Dengan menggunakan algoritma Support Vector Machine (SVM) sebagai metode klasifikasi dan Chi Square sebagai teknik seleksi fitur, sistem ini dikembangkan untuk menyajikan analisis sentimen secara efektif dan informatif berdasarkan data dari media sosial X.
            </p>
            <a
              href="/dataset"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-center w-full gap-12 mt-20 ">
        {/* Card 1 - Bar Chart */}
        <div className="bg-white hover:shadow-xl rounded-xl border p-3 w-[550px] animate-in fade-in-10 slide-in-from-top-10 duration-700 delay-400">
          <BarChartSentimen />
          <h2 className="text-xl font-semibold mb-3 text-left">Histogram</h2>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
      Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        </div>

        {/* Card 2 - Wordcloud Image */}
        <div className="bg-white hover:shadow-xl rounded-xl border p-3 w-[550px] animate-in fade-in-10 slide-in-from-top-10 duration-700 delay-400 ">
          <img
            className="w-full h-[300px] object-contain rounded-xl"
            src="/images/wordcloud.png"
            alt="Wordcloud"
          />
          <h2 className="text-xl font-semibold mb-3 text-left">Word Cloud</h2>
          <p class="mt-1 text-gray-500 dark:text-neutral-400">
      Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:px-8 p-4">
        <ScoreCard />
      </div>
      <div className="flex flex-row items-start justify-center w-full mt-10">
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
