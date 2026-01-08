import React, { useEffect, useState } from "react";
import { Search, RefreshCw, AlertCircle, FileText } from "lucide-react";
import axios from "axios";

const TableComponent = ({ title, description, endpoint, columnOrder }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log(`Fetching data from: http://localhost:5000/${endpoint}`);
        const response = await axios.get(`http://localhost:5000/${endpoint}`);
        console.log('API Response:', response.data);
        
        if (response.data && Array.isArray(response.data)) {
          setData(response.data);
          setFilteredData(response.data);
        } else {
          console.warn('API response is not an array:', response.data);
          setData([]);
          setFilteredData([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        console.error("Error details:", error.response?.data || error.message);
        setError(error.message || 'Failed to fetch data');
        setData([]);
        setFilteredData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        columnOrder.some((col) =>
          item[col]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
    setPage(0);
  }, [searchTerm, data, columnOrder]);

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-8">
      {/* Header with gradient */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-8 py-6">
        <div className="relative">
          <div className="flex items-start gap-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{title}</h2>
              <p className="text-blue-100 text-sm mt-1">{description}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Controls */}
      <div className="p-6 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
          <div className="relative flex-1 w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari dalam dataset..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3 bg-white rounded-xl border-2 border-gray-200 px-4 py-2">
            <label htmlFor="rowsPerPage" className="text-sm font-medium text-gray-700">
              Tampilkan:
            </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border-0 rounded-lg px-3 py-1.5 text-sm font-semibold text-gray-700 focus:ring-2 focus:ring-blue-500 bg-gray-50"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span className="text-sm text-gray-600">entri</span>
          </div>
        </div>

        {/* Results Info */}
        <div className="mt-4 flex items-center gap-2 text-sm">
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
            {paginatedData.length} dari {filteredData.length} entri
          </div>
          {searchTerm && (
            <div className="text-gray-500">
              (difilter dari {data.length} total)
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-16">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-4 text-gray-600 font-medium">Memuat data...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col justify-center items-center py-16">
            <div className="bg-red-50 rounded-full p-4 mb-4">
              <AlertCircle className="w-12 h-12 text-red-500" />
            </div>
            <div className="text-red-600 font-semibold mb-2">Error loading data</div>
            <div className="text-gray-600 text-sm mb-4">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-medium shadow-lg hover:shadow-xl"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                {columnOrder.map((col, idx) => (
                  <th key={idx} className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                    {col.replace(/_/g, ' ')}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedData.length > 0 ? (
                paginatedData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                    {columnOrder.map((col, i) => {
                      const value = item[col];
                      let cellContent = value;
                      
                      if (col === "polarity") {
                        const polarityConfig = {
                          positive: {
                            bg: "bg-green-100",
                            text: "text-green-800",
                            dot: "bg-green-500",
                            label: "Positif"
                          },
                          negative: {
                            bg: "bg-red-100",
                            text: "text-red-800",
                            dot: "bg-red-500",
                            label: "Negatif"
                          }
                        };
                        
                        const config = polarityConfig[value] || {
                          bg: "bg-gray-100",
                          text: "text-gray-800",
                          dot: "bg-gray-500",
                          label: value
                        };
                        
                        cellContent = (
                          <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}>
                            <span className={`w-2 h-2 rounded-full ${config.dot}`}></span>
                            {config.label}
                          </span>
                        );
                      } else if ((col === "text_clean" && value?.length > 100) || (col === "full_text" && value?.length > 150)) {
                        const maxLength = col === "text_clean" ? 100 : 150;
                        cellContent = (
                          <div className="max-w-2xl">
                            <p className="text-gray-700 leading-relaxed">
                              {value.slice(0, maxLength)}
                              {value.length > maxLength && (
                                <span className="text-gray-400">...</span>
                              )}
                            </p>
                          </div>
                        );
                      }

                      return (
                        <td key={i} className="px-6 py-4 text-gray-600">
                          {cellContent}
                        </td>
                      );
                    })}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columnOrder.length} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="bg-gray-100 rounded-full p-4">
                        <Search className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 font-medium">
                        {searchTerm ? "Tidak ada data yang sesuai dengan pencarian" : "Tidak ada data tersedia"}
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-gray-600">
            Halaman <span className="text-blue-600 font-bold">{totalPages > 0 ? page + 1 : 0}</span> dari <span className="font-bold">{totalPages}</span>
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(0)}
              disabled={page === 0}
              className="px-4 py-2 text-sm font-medium bg-white border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              Pertama
            </button>
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 text-sm font-medium bg-white border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              ‹
            </button>
            
            {totalPages > 1 && (
              <div className="flex gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i;
                  } else if (page < 3) {
                    pageNum = i;
                  } else if (page > totalPages - 4) {
                    pageNum = totalPages - 5 + i;
                  } else {
                    pageNum = page - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setPage(pageNum)}
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                        page === pageNum
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300"
                      }`}
                    >
                      {pageNum + 1}
                    </button>
                  );
                })}
              </div>
            )}
            
            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 text-sm font-medium bg-white border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              ›
            </button>
            <button
              onClick={() => setPage(totalPages - 1)}
              disabled={page >= totalPages - 1}
              className="px-4 py-2 text-sm font-medium bg-white border-2 border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 hover:border-blue-300 transition-all"
            >
              Terakhir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CsvTable = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 px-4 bg-white md:px-8">
    <div className="max-w-screen-xl mx-auto px-4 py-8 min-h-screen">
      <TableComponent
        title="Dataset Sebelum Preprocessing"
        description="Dataset hasil crawling menggunakan Tweet Harvest"
        endpoint="dataset/before"
        columnOrder={["full_text"]}
      />
      <TableComponent
        title="Dataset Hasil Preprocessing"
        description="Dataset sesudah preprocessing: cleansing → normalisasi → tokenisasi → stopword removal → stemming → labelling"
        endpoint="dataset/after"
        columnOrder={["text_clean", "polarity"]}
      />
    </div>
  </section>
  );
};

export default CsvTable;