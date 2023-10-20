import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table1 from './components/Tables/table1/Table1';
import Table2 from './components/Tables/table2/Table2';
import Table3 from './components/Tables/table3/Table3';
import Table4 from './components/Tables/table4/Table4';

function App() {
  const [line1 ,setLine1]=useState()
  const [line2 ,setLine2]=useState()
  const [line3 ,setLine3]=useState()
  const [line4 ,setLine4]=useState()
  const handlelin1 =(value)=>{
    setLine1(value)
  }
  const handlelin2 =(value)=>{
    setLine2(value)
  }
  const handlelin3 =(value)=>{
    setLine3(value)
  }
  const handlelin4 =(value)=>{
    setLine4(value)
  }
 
 
  return (
    <div className='bg-gray-100 h-screen'>
      <Routes>
        <Route path='/' element={<Form handlelin1={handlelin1} handlelin2={handlelin2} handlelin3={handlelin3} handlelin4={handlelin4}/>} />
        <Route path='table1' element={<Table1 line1={line1} />} />
        <Route path='table2' element={<Table2 line2={line2} />} />
        <Route path='table3' element={<Table3 line3={line3} />} />
        <Route path='table4' element={<Table4 line4={line4} />} />
      </Routes>





    </div>
  );
}

export default App;
