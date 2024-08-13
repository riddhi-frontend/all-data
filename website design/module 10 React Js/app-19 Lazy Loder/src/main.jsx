import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import RSVP from './RSVP'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
        <Route path='/RSVP' element={<RSVP />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
