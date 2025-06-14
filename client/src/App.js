import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './elements/Home'
import Edit from './elements/Edit'
import Create from './elements/Create'
import Read from './elements/Read'

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/edit/:id' element={<Edit />}/>
        <Route path='/read/:id' element={<Read />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default index
