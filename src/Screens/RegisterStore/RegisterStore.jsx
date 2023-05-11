import React from 'react'
import InputNameStore from '../../Components/ScreenRegisterStore/InputNameStore'
import InputCNPJStore from '../../Components/ScreenRegisterStore/InputCNPJStore'
import InputAdrdressStore from '../../Components/ScreenRegisterStore/InputAdrdressStore'
import InputSignature from '../../Components/ScreenRegisterStore/InputSignature'
import InputRegionStore from '../../Components/ScreenRegisterStore/InputRegionStore'
import ButtonStore from '../../Components/ScreenRegisterStore/ButtonStore/ButtonStore'

export default function RegisterStore() {
  return (
    <div>
        {console.log('Deu certo')}
        <div className='Border-Screen-RegisterStore'>

            <div className='Screen-image-register'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <p><b>Cadastro de Loja</b></p>
            </div>

            <div>
                <InputNameStore />
                <InputCNPJStore />
                <InputAdrdressStore />
                <InputSignature />
                <InputRegionStore />
                <ButtonStore />
            </div>

        </div>

    </div>
  )
}
