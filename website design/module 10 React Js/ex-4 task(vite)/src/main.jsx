import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <Content />
    <Footer />
  </>
)
