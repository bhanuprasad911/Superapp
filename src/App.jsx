import React from 'react'
// import poster from './assets/poster.png'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import Signup from './Signup.jsx'
import './App.css'
import Genre from './Genre.jsx'

function App() {


  return (
    <>

    <BrowserRouter>
    <Toaster />
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path = '/genre' element = {<Genre />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
