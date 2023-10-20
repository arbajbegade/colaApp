import React from 'react'
import '../../../App.css'
import TableData3 from './TableData3'

function Table3() {
  return (
    <div className="h-screen overflow-hidden">
      <nav className="bg-blue-500 flex justify-center p-1 text-white text-4xl font-bold sticky top-0 z-10">LINE 3</nav>

          <table className="min-w-full ">
            <TableData3/>
            <TableData3/>
          </table>

    </div>
  )
}

export default Table3