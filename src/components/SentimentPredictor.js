import React, { useState } from "react";
import axios from "axios";
import { Send, Sparkles, MessageCircle, RefreshCw } from "lucide-react";

const SentimentPredictor = () => {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Sample texts for recommendations
  const sampleTexts = [
    {
      category: "Baik",
      texts: [
        "Barang di facebook marketplace bagus dan berkualitas",
        "Penjual di facebook marketplace sangat ramah",
        "Barang di facebook marketplace saesuai dengan deskripsi dan gambar",
      ]
    },
    {
      category: "Buruk",
      texts: [
        "Di Facebook marketplace banyak penipuan",
        "Barang di facebook jelek dan mahal",
        "Pembeli di facebook kalo nawar sadis ",
      ]
    },

  ];

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Silakan masukkan teks untuk diprediksi");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const res = await axios.post("http://localhost:5000/predict", { text });
      setPrediction({
        sentiment: res.data.prediction,
        confidence: res.data.confidence || 0.85,
        text: text
      });
    } catch (err) {
      console.error("Error:", err);
      setError("Terjadi kesalahan saat melakukan prediksi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleSampleTextClick = (sampleText) => {
    setText(sampleText);
    setPrediction(null);
    setError("");
  };

  const handleClear = () => {
    setText("");
    setPrediction(null);
    setError("");
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500 text-white";
      case "negative":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getSentimentEmoji = (sentiment) => {
    switch (sentiment) {
      case "positive":
        return "😊";
      case "negative":
        return "😞";
      default:
        return "😐";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Prediction Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Input Teks
            </h2>
            
            <div className="space-y-4">
              <div>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  rows="4"
                  placeholder="Masukkan teks yang ingin dianalisis sentimennya..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={loading}
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    {text.length} karakter
                  </span>
                  {text && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Bersihkan
                    </button>
                  )}
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !text.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Menganalisis...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Prediksi Sentimen
                  </>
                )}
              </button>
            </div>

            {/* Results */}
            {prediction && (
              <div className="mt-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hasil Prediksi</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Teks yang dianalisis:</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border text-gray-800 italic">
                    "{prediction.text}"
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Sentimen:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getSentimentEmoji(prediction.sentiment)}</span>
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getSentimentColor(prediction.sentiment)}`}>
                        {prediction.sentiment.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sample Texts Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Contoh Teks
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Klik pada contoh teks di bawah untuk mencoba prediksi sentimen
            </p>
            
            <div className="space-y-4">
              {sampleTexts.map((category, idx) => (
                <div key={idx}>
                  <h4 className="font-medium text-gray-800 mb-2">{category.category}</h4>
                  <div className="space-y-2">
                    {category.texts.map((sampleText, textIdx) => (
                      <button
                        key={textIdx}
                        onClick={() => handleSampleTextClick(sampleText)}
                        className="w-full text-left p-3 text-sm bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-all duration-200"
                      >
                        {sampleText}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentPredictor;