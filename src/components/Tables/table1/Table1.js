import React from 'react'
import '../../../App.css'
import TableData1 from './TableData1'

function Table1({line1}) {

  return (
    <div className="h-screen overflow-hidden ">
      <nav className="bg-blue-500 flex justify-center p-1 text-white text-4xl font-bold sticky top-0 z-10">LINE 1</nav>
          {line1}
          <table className="min-w-full ">
            <TableData1/>
            <TableData1/>
          </table>

    </div>
  )
}

export default Table1