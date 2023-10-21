import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table1 from './components/Tables/table1/Table1';
import Table2 from './components/Tables/table2/Table2';
import Table3 from './components/Tables/table3/Table3';
import Table4 from './components/Tables/table4/Table4';

function App() {
  const [line1 ,setLine1]=useState({ })
  const handlelin1 =(value)=>{
    setLine1(value)
    console.log(value)
  }
 
 
  return (
    <div className='bg-gray-100 h-screen'>
      <Routes>
        <Route path='/' element={<Form handlelin1={handlelin1}/>} />
        <Route path='table1' element={<Table1 line1={line1} />} />
        <Route path='table2' element={<Table2/>} />
        <Route path='table3' element={<Table3/>} />
        <Route path='table4' element={<Table4/>} />
      </Routes>





    </div>
  );
}

export default App;