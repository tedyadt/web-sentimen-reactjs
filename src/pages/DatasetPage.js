import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const CsvTable = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [page, setPage] = useState(0); // Untuk pagination
  const rowsPerPage = 10;

  useEffect(() => {
    axios.get('http://localhost:5000/dataset/before')
      .then((response) => {
        const fetchedData = response.data;

        if (fetchedData.length > 0) {
          const columnNames = Object.keys(fetchedData[0]);
          const columnSetup = columnNames.map((col) => ({
            name: col,
            selector: (row) => row[col],
            sortable: true,
            style: { // Tambahkan properti style di sini
              paddingRight: '0.5rem', // Atur jarak kanan antar kolom
              paddingLeft: '1rem',  // Atur jarak kiri antar kolom
            },
          }));

          setColumns(columnSetup);
          setData(fetchedData);
        }
      })
      .catch((error) => {
        console.error('Error fetching dataset:', error);
      });
  }, []);

  // Filter data berdasarkan search text
  const filteredData = data.filter(item =>
    Object.values(item).some(
      value => value && value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);


  return (

  //   <div className="bg-white min-h-screen py-6 px-4 sm:px-6 lg:px-8">
  //   <div className="max-w-7xl mx-auto shadow-md rounded-md overflow-hidden">
  //     <div className="bg-gray-800 p-6">
  //       <h2 className="text-xl font-semibold text-gray-100 mb-4">Dataset Table</h2>
  //       <div className="mb-4">
  //         <input
  //           type="text"
  //           placeholder="Search..."
  //           value={filterText}
  //           onChange={(e) => setFilterText(e.target.value)}
  //           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
  //         />
  //       </div>
  //       <DataTable
  //         columns={columns}
  //         data={filteredData}
  //         pagination
  //         highlightOnHover
  //         dense
  //         theme="dark" // Menggunakan tema dark bawaan react-data-table-component
  //       />
  //     </div>
  //   </div>
  // </div>
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-6">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Dataset Mentah
          </h3>
          <p className="text-gray-600 mt-2">
            Dataset hasil crawling menggunakan tweet harvest
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="border px-3 py-2 rounded-lg shadow-sm bg-white text-sm"
          />
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-lg border">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b bg-gray-50">
            <tr>
              {data[0] && Object.keys(data[0]).map((col, idx) => (
                <th key={idx} className="py-3 px-4 capitalize">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y">
            {paginatedData.map((item, idx) => (
              <tr key={idx}>
                {Object.entries(item).map(([key, value], i) => (
                  <td key={i} className="px-4 py-3 whitespace-nowrap max-w-xs truncate">
                    {
                      key === 'fulltext'
                        ? (value.length > 100 ? `${value.slice(0, 100)}...` : value)
                        : value
                    }
                  </td>
                ))}
                {/* <td className="px-4 py-3 text-right">
                  <button className="py-1.5 px-3 text-sm text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg">
                    Manage
                  </button>
                </td> */}
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
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            disabled={page === 0}
          >
            Previous
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
            disabled={page >= totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>  


    
  );
};

export default CsvTable;
