import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './Header'
import Home from './Home';
import Feachers from './Feachers';
import Lifestyle from './Lifestyle';
import Yoga from './Yoga';
import Getstarted from './Getstarted';
import Footer from './Footer';
import './css/main.css'
ReactDOM.createRoot(document.getElementById('studio')).render(
<>
<Header />
<Home />
<Feachers />
<Lifestyle />
<Yoga />
<Getstarted />
<Footer />
</>
)