import React from 'react'

function TableData1({line1}) {
  return (
    <tbody className="my-2 sliding">
      <tr className="border-b border-r text-6xl">
        <td className="px-6 py-4 font-bold">Area Owner </td>
        <td className="px-6 py-4 font-semibold">Sahebrao Sonawane</td>
      </tr>
      <tr className="border-b border-r text-6xl bg-gray-200">
        <td className="px-6 py-4 font-bold">MTD Target</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl">
        <td className="px-6 py-4 font-bold">ACT MTD</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl bg-gray-200">
        <td className="px-6 py-4 font-bold">YTD Volume</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl">
        <td className="px-6 py-4 font-bold">Week Target</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl bg-gray-200">
        <td className="px-6 py-4 font-bold">Week GMP Score</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl">
        <td className="px-6 py-4 font-bold">Day Production Target</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
      <tr className="border-b border-r text-6xl bg-gray-200">
        <td className="px-6 py-4 font-bold">Current Run</td>
        <td className="px-6 py-4 font-semibold">123456789</td>
      </tr>
    </tbody>
  )
}

export default TableData1