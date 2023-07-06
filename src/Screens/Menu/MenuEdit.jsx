import React from 'react'
import EditButton from '../../Components/ScreenMenu/EditButton'

export default function MenuEdit() {
  return (
    <div>
        {console.log('Deu certo')}
        <div className='ScreenProject'>
            
            <div className='Border-screen-menu'>
                <div className='Screen-image-menu'>
                    <img className='Image-logo-menu' src="../public/assets/logo-canto-de-minas.png" alt="" />
                    <p><b>Menu</b></p>
                </div>

                <div>
                    <EditButton />
                </div>

            </div>
        </div>
    </div>
  )
}
