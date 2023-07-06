import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonSelectPage() {
  return (
    <div>
        <div className=''>
            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/token`}> <b>Ficha de Troca</b> </Link>
                    
                </button>
                
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/`}> <b>Gerar Ficha</b> </Link>
                    
                    
                </button>
            </div>


            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/register/client`}>  <b>Cadastro de Usuario</b> </Link>
                   
                </button>

                <button className='Button-menu-select1' >
                    <Link className='link-to' to ={`/register/store`}> <b>Cadastro de Loja</b> </Link>
                
                </button>
            </div>


            <div className='Screen-menu-buttons-one'>
                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/register/product`}> <b>Cadastrar Produto</b> </Link>    
                    
                </button>

                <button className='Button-menu-select1'>
                    <Link className='link-to' to={`/`}> <b>Gerenciamento de Cadastro</b> </Link>
                    
                </button>
            </div>

        </div>

    </div>
  )
}