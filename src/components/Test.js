import React, { useState, useEffect } from "react";


function Test() {

  return (
    <div className="rotate-90 -mt-[10.8rem] absolute right-[8.8rem] w-[37rem]">
      <div>
        <form className="flex flex-col space-y-2 mt-2 items-center text-[2.2rem] font-bold py-1 ">
          <tbody>
            <div className="text-center bg-blue-500 text-white font-bold text-3xl py-2">Line 1</div>
            <tr>
              <td className="py-3 px-2 border border-gray-300">Area Owner <br /> Name</td>
              <td className="px-3 border border-gray-300"></td>
            </tr>
            <tr className="bg-slate-200">
              <td className="py-2 border border-gray-300">MTD Target</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr>
              <td className="py-3 border border-gray-300">ACT MTD</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr className="bg-slate-200">
              <td className="py-3 border border-gray-300">YTD Volume</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr>
              <td className="py-3 border border-gray-300">Week Target</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr className="bg-slate-200">
              <td className="py-3 border border-gray-300">Week GMP <br /> Score</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr>
              <td className="py-3 border border-gray-300">Day <br /> Production <br /> Target</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
            <tr className="bg-slate-200">
              <td className="py-3 border border-gray-300">Current Run</td>
              <td className="px-3 border border-gray-300">12345678910</td>
            </tr>
          </tbody>
        </form>
      </div>
    </div>
  );
}

export default Test;
