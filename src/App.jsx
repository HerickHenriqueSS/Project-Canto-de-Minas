import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import RegisterStore from './Screens/RegisterStore/RegisterStore'
import Menu from './Screens/Menu/Menu'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element ={<Login/>}/>
          <Route path='/register/store' element ={<RegisterStore/>}/>
          <Route path='/menu' element ={<Menu/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
