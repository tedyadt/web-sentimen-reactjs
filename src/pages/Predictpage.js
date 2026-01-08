import React from 'react';
import SentimentPredictor from '../components/SentimentPredictor';
import { TrendingUp } from 'lucide-react';

const PredictPage = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 px-4 bg-white md:px-8">
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white">
          <div className="text-center">
        <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex justify-center items-center gap-3 mb-2">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Prediksi Sentimen</h1>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Analisis sentimen teks menggunakan machine learning untuk menentukan apakah suatu teks memiliki sentimen positif atau negatif
            </p>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <SentimentPredictor />
    </div>
  </section>
  );
};

export default PredictPage;