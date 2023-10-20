import React from 'react'
import '../../../App.css'
import TableData2 from './TableData2'

function Table2() {
  return (
    <div className="h-screen overflow-hidden">
      <nav className="bg-blue-500 flex justify-center p-1 text-white text-4xl font-bold sticky top-0 z-10">LINE 2</nav>

          <table className="min-w-full ">
            <TableData2/>
            <TableData2/>
          </table>

    </div>
  )
}

export default Table2