import "../../../App.css";

function Table3() {
  
  return (
    <div className="h-screen overflow-hidden">
      <nav className="bg-blue-500 flex justify-center p-1 text-white text-4xl font-bold sticky top-0 z-10">
        LINE 3
      </nav>

      <table className="min-w-full ">
         
          <table className="min-w-full ">
            <tbody className="my-2 sliding">
              <tr className="border-b border-r text-6xl">
                <td className="px-6 py-4 font-bold">Area Owner </td>
                <td className="px-6 py-4 font-semibold">Name</td>
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
          </table>
      </table>
    </div>
  );
}

export default Table3;
