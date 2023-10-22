import React, { useState } from "react";
import axios from "axios";

function Form() {
  const [formData, setFormData] = useState({
    areaOwner: "",
    target: "",
    actmtd: "",
    ytdvolume: "",
    weektarget: "",
    weekgmpscore: "",
  });
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to your API
    axios
      .post('http://localhost:5000/form', formData) // Update the URL to match your server
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error(error);
        // Handle errors, e.g., show an error message to the user
      });
  };
 
  return (
    <div className="pt-16 ">
      <form action="POST" className="pt-5 flex justify-center flex-col ">
        <div className="flex flex-col space-y-3 justify-center bg-gray-400 items-center w-1/2 m-auto  p-5 rounded-2xl shadow-white shadow-2xl">
          <div className="flex items-center w-96 justify-between ">
            <label className="font-bold text-xl">Production Line:</label>
            <select className="px-3 py-1">
              <option value="L1">LINE 1</option>
              <option value="L2">LINE 2</option>
              <option value="L3">LINE 3</option>
              <option value="L4">LINE 4</option>
            </select>
          </div>
          <div className="flex items-center w-96 justify-between ">
            <label className="font-bold text-xl">Area Owner:</label>
            <input
              type="text"
              name="areaOwner"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
              required
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">MTD Target:</label>
            <input
              type="text"
              name="target"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
              required
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">ACT MTD:</label>
            <input
              type="text"
              name="actmtd"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
              required
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">YTD Volume:</label>
            <input
              type="text"
              name="ytdvolume"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
              required
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">Week target:</label>
            <input
              type="text"
              name="weektarget"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
              required
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">Week GMP Score:</label>
            <input
              type="text"
              name="weekgmpsource"
              onChange={handleChange}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  t"
              required
            />
          </div>
          <input type="button"value="submit"onClick={handleSubmit}className="bg-blue-500 px-3 py-1 rounded text-white"/>
        </div>
      </form>
    </div>
  );
}

export default Form;