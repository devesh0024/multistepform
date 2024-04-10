import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [page , setPage] = useState(1);
  const [newPage , setNewPage] = useState(0);

  function handleClickChange(){
    setNewPage(page-1);
  }

 return (
  // <div>sitaram</div>
  <div>
    <div className="relative">
      {
         (page != 1) ?
         ( <NavLink to='/page/${newPage}'>
              <button className="relative">
                  <MdKeyboardArrowLeft className="w-[3rem] h-[3rem] absolute left-28 top-6 " onClick={handleClickChange}/>
              </button>
         </NavLink>)
        :
         (<h1 className="text-white">sitaram</h1>)
      }
       
        <div className='w-[80%] h-1 bg-slate-800 mx-auto mt-10'></div>
    </div>
    <Form/>
    <Routes>
        <Route path='/' element={<Page1 page={page} setPage={setPage}/>}></Route>
        <Route path='/page2' element={<Page2 page={page} setPage={setPage}/>}></Route>
        <Route path='/page3' element={<Page3 page={page} setPage={setPage}/>}></Route>
        <Route path='/page4' element={<Page4 page={page} setPage={setPage}/>}></Route>
        <Route path='/page5' element={<Page5 page={page} setPage={setPage}/>}></Route>
        <Route path='/page6' element={<Page6 page={page} setPage={setPage}/>}></Route>
      </Routes>
  </div>
 )
}

export default App;
