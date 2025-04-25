import React from 'react';
import SentimentPredictor from '../components/SentimentPredictor';

const PredictPage = () => {
  return (
    <div className="text-white p-4 bg-gray-900 min-h-screen ">
      <h2 className="text-3xl mb-6 text-center font-sans font-semibold mt-10">Prediksi Sentimen</h2>
      <SentimentPredictor />
    </div>
  );
};

export default PredictPage;
