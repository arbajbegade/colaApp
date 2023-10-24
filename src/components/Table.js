import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';

function Table() {
  const [tableData, setTableData] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Area Owner',
        accessor: 'areaOwner', // Change this accessor to match your data structure
      },
      {
        Header: 'MTD Target',
        accessor: 'target',
      },
      {
        Header: 'ACT MTD',
        accessor: 'actmtd',
      },
      {
        Header: 'YTD Volume',
        accessor: 'ytdvolume',
      },
      {
        Header: 'Week Target',
        accessor: 'weektarget',
      },
      {
        Header: 'Week GMP Score',
        accessor: 'weekgmpscore',
      },
    ],
    []
  );

  useEffect(() => {
    // Fetch data from the server when the component mounts
    axios.get('http://localhost:5000/table')
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: tableData,
  });

  return (
    <div>
      <table {...getTableProps()} className="border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="border p-2">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} className="border p-2">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
