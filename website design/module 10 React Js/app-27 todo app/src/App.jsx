import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Layout from './Layout'


function App() {

  return (
    <>
  <Router>
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App