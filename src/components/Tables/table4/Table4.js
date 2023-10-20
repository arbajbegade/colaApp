import React from 'react'
import '../../../App.css'
import TableData4 from './TableData4'

function Table4() {
  return (
    <div className="h-screen overflow-hidden">
      <nav className="bg-blue-500 flex justify-center p-1 text-white text-4xl font-bold sticky top-0 z-10">LINE 4</nav>

          <table className="min-w-full ">
            <TableData4/>
            <TableData4/>
          </table>

    </div>
  )
}

export default Table4