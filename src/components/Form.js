import React, { useState } from "react";

function Form({handlelin1,handlelin2,handlelin3,handlelin4}) {

  const[formData,setFormData] = useState({ })
  const handleForm =(e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get the selected line value from the dropdown
    const selectedLine = document.querySelector("select").value;
  
    // Create a new object with the line as a key
    const dataWithLine = {
      [selectedLine]: formData,
    };
  
    // Call the appropriate handlelinX function based on the selected line
    if (selectedLine === "L1") {
      handlelin1(dataWithLine);
    } else if (selectedLine === "L2") {
      handlelin2(dataWithLine);
    } else if (selectedLine === "L3") {
      handlelin3(dataWithLine);
    } else if (selectedLine === "L4") {
      handlelin4(dataWithLine);
    }
  };
 
  return (
    <div className="pt-16 ">
      <form action="POST" className="pt-5 flex justify-center flex-col ">
        <div className="flex flex-col space-y-3 justify-center bg-gray-200 items-center w-1/2 m-auto  p-5 rounded-2xl shadow-2xl">
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
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">MTD Target:</label>
            <input
              type="text"
              name="target"
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">ACT MTD:</label>
            <input
              type="text"
              name="actmtd"
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">YTD Volume:</label>
            <input
              type="text"
              name="ytdvolume"
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">Week target:</label>
            <input
              type="text"
              name="weektarget"
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  "
            />
          </div>
          <div className="flex items-center w-96 justify-between">
            <label className="font-bold text-xl">Week GMP Score:</label>
            <input
              type="text"
              name="weekgmpsource"
              onChange={handleForm}
              className="focus:outline-none px-2 py-1 font-medium rounded-t-lg border-b bg-gray-50 border-gray-400  t"
            />
          </div>

          <input
            type="button"
            value="submit"
            onClick={handleSubmit}
            className="bg-blue-500 px-3 py-1 rounded text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
