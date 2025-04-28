import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const CsvTable = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/dataset')
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


  return (

    <div className="bg-gray-900 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto shadow-md rounded-md overflow-hidden">
      <div className="bg-gray-800 p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Dataset Table</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
          />
        </div>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          dense
          theme="dark" // Menggunakan tema dark bawaan react-data-table-component
        />
      </div>
    </div>
  </div>
    
  );
};

export default CsvTable;
