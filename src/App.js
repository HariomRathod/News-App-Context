import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './index.css'
import { NewsProvider } from './context/NewsContext'
// import { FaYoutube } from "react-icons/fa";

function App() {
  return (
    <NewsProvider>
      <>
        <Navbar />
          <Home />
          {/* <About /> */}
      </>
    </NewsProvider>
  )
}

export default App