import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonLogin() {


  return (
    <div>
        <div className='Button-screen-login'>
        <button className='Button-screen-login-submit'
        onClick={() => console.log('Clicado')}>

          <Link className='link-to' to ={`/menu`} > <b>Login</b> </Link>
        </button>
    </div>
    </div>
  )
}
