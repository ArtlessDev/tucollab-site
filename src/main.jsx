import React from 'react'
import ReactDOM from 'react-dom/client'

import './stylesheets/index.css'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle.jsx'
import Home from './pages/Home.jsx'
import Contactus from './pages/Contactus.jsx'
import Aboutus from './pages/Aboutus.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous"></link>
    <Navbar />
    <PageTitle />
    <Home />
    <Aboutus />
    <Contactus />

  </React.StrictMode>,
)