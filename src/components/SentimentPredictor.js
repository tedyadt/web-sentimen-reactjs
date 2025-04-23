import React, { useState } from 'react';
import axios from 'axios';

const SentimentPredictor = () => {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/predict', { text });
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>Sentiment Prediction</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button type="submit">Predict</button>
      </form>
      {prediction && <p>Prediction: {prediction}</p>}
    </div>
  );
};

export default SentimentPredictor;
