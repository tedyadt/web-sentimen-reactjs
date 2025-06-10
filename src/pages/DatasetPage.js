import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

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

  // Filter data based on search term
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
    setPage(0); // Reset to first page when searching
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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-10">
      <div className="bg-gradient-to-r from-blue-600 to-sky-400 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-blue-100 text-sm mt-1">{description}</p>
      </div>
      
      {/* Search and Controls */}
      <div className="p-4 bg-gray-50 border-b flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Cari data..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <label htmlFor="rowsPerPage" className="text-sm text-gray-600">
            Tampilkan:
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
      <div className="px-4 py-2 bg-gray-50 border-b">
        <p className="text-sm text-gray-600">
          Menampilkan {paginatedData.length} dari {filteredData.length} entri
          {searchTerm && ` (difilter dari ${data.length} total entri)`}
        </p>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-300 h-6 w-6"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ) : error ? (
          <div className="flex flex-col justify-center items-center py-12">
            <div className="text-red-500 mb-2">⚠️ Error loading data</div>
            <div className="text-gray-600 text-sm">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Refresh
            </button>
          </div>
        ) : (
          <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              {columnOrder.map((col, idx) => (
                <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  {col.replace(/_/g, ' ')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 font-sans divide-y divide-gray-200">
            {paginatedData.length > 0 ? (
              paginatedData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {columnOrder.map((col, i) => {
                    const value = item[col];

                    // Atur warna background untuk polarity
                    let cellClass = "px-6 py-4";
                    let cellContent = value;
                    
                    if (col === "polarity") {
                      const polarityClass =
                        value === "positive"
                          ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                          : value === "negative"
                          ? "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                          : "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800";
                      
                      cellContent = (
                        <span className={polarityClass}>
                          {value}
                        </span>
                      );
                    } else if (col === "text_clean" && value?.length > 100) {
                      cellContent = `${value.slice(0, 100)}...`;
                    } else if (col === "full_text" && value?.length > 150) {
                      cellContent = `${value.slice(0, 150)}...`;
                    }

                    return (
                      <td key={i} className={cellClass}>
                        {cellContent}
                      </td>
                    );
                  })}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columnOrder.length} className="px-6 py-8 text-center text-gray-500">
                  {searchTerm ? "Tidak ada data yang sesuai dengan pencarian" : "Tidak ada data"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        )}
      </div>

      {/* Pagination */}
      <div className="px-4 py-3 bg-gray-50 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          Halaman {totalPages > 0 ? page + 1 : 0} dari {totalPages}
        </p>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setPage(0)}
            disabled={page === 0}
            className="px-3 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Pertama
          </button>
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-3 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Sebelumnya
          </button>
          
          {/* Page numbers */}
          {totalPages > 1 && (
            <div className="flex space-x-1">
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
                    className={`px-3 py-2 text-sm rounded-lg ${
                      page === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 hover:bg-gray-300"
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
            className="px-3 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Selanjutnya
          </button>
          <button
            onClick={() => setPage(totalPages - 1)}
            disabled={page >= totalPages - 1}
            className="px-3 py-2 text-sm bg-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
          >
            Terakhir
          </button>
        </div>
      </div>
    </div>
  );
};

const CsvTable = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-3 min-h-screen">
      
      <TableComponent
        title="Dataset Sebelum"
        description="Dataset hasil crawling menggunakan tweet harvest"
        endpoint="dataset/before"
        columnOrder={["full_text"]}
      />
      <TableComponent
        title="Dataset hasil preprocessing"
        description="Dataset sesudah dipreprocesing menggunakan cleansing > normalisasi > tokenisasi > stopword removal > stemming > labelling"
        endpoint="dataset/after"
        columnOrder={["text_clean", "polarity"]}
      />
    </div>
  );
};

export default CsvTable;