import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import RegisterStore from './Screens/RegisterStore/RegisterStore'
import Menu from './Screens/Menu/Menu'
import RegisterUser from './Screens/RegisterRepositor/RegisterUser'
import RegisterProduct from './Screens/RegisterProduct/RegisterProduct'
import ExchangeToken from './Screens/ExchangeToken/ExchangeToken'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Login/>}/>
          <Route path='/register/store' element ={<RegisterStore/>}/>
          <Route path='/register/client' element ={<RegisterUser/>}/>
          <Route path='/register/product' element ={<RegisterProduct/>}/>
          <Route path='/token' element ={<ExchangeToken/>}/>
          <Route path='/menu' element ={<Menu/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
