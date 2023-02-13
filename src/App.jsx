import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Produtos from './Components/Produtos'
import Contato from './Components/Contato'
import Produto from './Components/Produto'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header /> 
        <Routes>
          <Route path='/' element={<Produtos />} />
          <Route path='Lista-de-produtos/' element={<Produtos />} />
          <Route path='produto/:id' element={<Produto />} />
          <Route path='contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
