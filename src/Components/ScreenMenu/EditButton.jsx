import React from 'react'
import { Link } from 'react-router-dom'

export default function EditButton() {
  return (
    <div>
        <div className=''>
            

            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/edit/user`}>  <b>Editar Usuario</b> </Link>
                   
                </button>

            </div>
            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1' >
                    <Link className='link-to' to ={`/edit/store`}> <b>Editar Loja</b> </Link>
                
                </button>

            </div>


            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/edit/product`}> <b>Editar Produto</b> </Link>    
                    
                </button>

            </div>

        </div>

    </div>
  )
}