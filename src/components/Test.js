import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Express application when the component mounts
    axios.get('/test').then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="rotate-90 -mt-[10.8rem] absolute right-[8.8rem] w-[37rem]">
      <div>
        <form className="flex flex-col space-y-2 mt-2 items-center text-[2.2rem] font-bold py-1">
          <tbody>
            <div className="text-center bg-blue-500 text-white font-bold text-3xl py-2">Line 1</div>
            {data.map((item, index) => (
              <tbody>

              <tr key={index}>
                <td className="py-3 px-2 border border-gray-300">Area Owner Name</td>
                <td className="px-3 border border-gray-300">{item.areaOwner}</td>
              </tr>
              <tr className="bg-slate-200">
                <td className="py-2 border border-gray-300">MTD Target</td>
                <td className="px-3 border border-gray-300">{item.target}</td>
              </tr>
              </tbody>
            ))}
          </tbody>
        </form>
      </div>
    </div>
  );
}

export default Test;
