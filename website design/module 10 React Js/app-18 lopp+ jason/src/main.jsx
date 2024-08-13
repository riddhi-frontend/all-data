import React from 'react'
import ReactDOM from 'react-dom/client'
import Employee from './Employee'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Employee />
  </React.StrictMode>,
)
