import React, { useState } from "react";
import axios from "axios";

const SentimentPredictor = () => {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/predict", { text });
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <div class="max-w-sm space-y-3 mx-auto ">
        <form onSubmit={handleSubmit}>
          <textarea
            class="py-2 px-3 sm:py-3 sm:px-4 block w-full bg-gray-100 border-transparent rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            rows="3"
            placeholder="Masukkan kalimat yang ingin dicoba"
            cols="50"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button
            className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
            type="submit"
          >
            Predict
          </button>
        </form>
        {prediction && (
          <p className="p-2 text-white rounded-md">
            Prediction sentimen :{" "}
            <span
              className={`font-bold rounded-xl ${
                prediction === "positive"
                  ? "bg-green-700 p-1"
                  : "bg-red-700 p-1"
              }`}
            >
              {prediction}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default SentimentPredictor;
