import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Create from './Components/Create.jsx'
import Edit from './Components/Edit.jsx'
import NotFound from './Components/NotFound.jsx'
const App=()=>{
  return(
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/Edit-data" element={<Edit/>}/>
      <Route path="/notfound" element={<NotFound/>}/>
    </Routes>
  </Router>
  </>
  )
}
export default App
