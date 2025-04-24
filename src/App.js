import React from 'react';
import Navbar from './components/Navbar';
import SentimentPredictor from './components/SentimentPredictor';
import SemiCircleProgress from './components/Semicircleprogress';
import BackgroundGradient from './components/BackgroundGradient';
import SentimentPieChart from './components/SentimentPieChart';



const sentimentData = [
  { name: 'Positif', value: 1581 },
  { name: 'Negatif', value: 818 },
  
];
function App() {
  return (
    <div className="App relative overflow-hidden">
      <BackgroundGradient />
      <Navbar />

      <section className="relative py-28 px-4 bg-gray-900 md:px-8">
        <div className="max-w-xl mx-auto text-center relative z-10">
          <div className="py-4">
            <h3 className="text-2xl text-purple-700 font-bold md:text-4xl">
              Analisis Sentimen Terhadap Facebook Marketplace
            </h3>
            <p className="text-gray-300 leading-relaxed mt-3">
              Tugas Akhir Analisis Sentimen Facebook Marketplace menggunakan Metode Support Vector Machine dan Seleksi Fitur Chi Square
            </p>
          </div>
          <div className="mt-5 items-center justify-center gap-3 sm:flex">
            <a 
              href="#"
              className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
            >
              Try It Out
            </a>
            <a
              href="#"
              className="block w-full mt-2 py-2.5 px-8 text-gray-300 bg-gray-700 rounded-md duration-150 hover:bg-gray-800 sm:w-auto"
            >
              Get Started
            </a>
          </div>
          <SemiCircleProgress percentage={80} />
          <SentimentPieChart data={sentimentData} />

        </div>
      </section>

      <h1>Sentiment Analysis App</h1>

      <SentimentPredictor />
    </div>
  );
}

export default App;
