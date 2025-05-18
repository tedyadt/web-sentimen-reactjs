import React, { useEffect, useState } from "react";
import axios from "axios";

const TableComponent = ({ title, description, endpoint, columnOrder }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const rowsPerPage = 10;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/${endpoint}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error:", err));
  }, [endpoint]);

  const paginatedData = data.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );
  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="mt-10">
      <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="overflow-x-auto mt-4">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              {columnOrder.map((col, idx) => (
                <th key={idx} className="py-3 px-4">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {paginatedData.map((item, idx) => (
              <tr key={idx}>
                {columnOrder.map((col, i) => {
                  const value = item[col];

                  // Atur warna background untuk polarity
                  let cellClass = "px-3 py-2 rounded-full text-x";
                  if (col === "polarity") {
                    cellClass +=
                      value === "positive"
                        ? " text-green-600 bg-green-50"
                        : value === "negative"
                        ? " text-red-600 bg-red-50"
                        : "";
                  }

                  return (
                    <td key={i} className={cellClass}>
                      {col === "text_clean" && value?.length > 100
                        ? `${value.slice(0, 100)}...`
                        : value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Halaman {page + 1} dari {totalPages}
        </p>
        <div className="space-x-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const CsvTable = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <TableComponent
        title="Dataset Sebelum"
        description="Dataset hasil crawling menggunakan tweet harvest"
        endpoint="dataset/before"
        columnOrder={["full_text"]}
      />
      <TableComponent
        title="Dataset hasil preprocessing"
        description="Dataset sesudah dipreprocesing menggunakan cleansing > normalisasi > tokenisasi > stopword removal > stemming > labelling   "
        endpoint="dataset/after"
        columnOrder={["text_clean", "stemmed_text", "polarity"]}
      />
    </div>
  );
};

export default CsvTable;
