import React, { useState, useEffect } from "react";
import axios from "axios";

function Table() {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      // Fetch data from the API when the component mounts
      axios.get('http://localhost:5000').then((response) => {
        setTableData(response.data);
      }).catch((error) => {
        console.error(error);
      });
    }, []);

  
    if (tableData.length === 0) {
      return <div>No data available.</div>;
    }
  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            <td>{item.areaOwner}</td>
            <td>{item.target}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
