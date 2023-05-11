import React from 'react'
import ButtonLogin from '../../Components/ScreenLogin/ButtonLogin'
import PasswordInputLogin from '../../Components/ScreenLogin/PasswordInputLogin'
import UserInputLogin from '../../Components/ScreenLogin/UserInputLogin'
export default function Login() {

  return (
    <div>
        {console.log('Deu certo')}
        <div className='ScreenProject'>
            
            <div className='Border-Screen-Login'>

                <div className='Screen-image'>
                    <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                    <h1>Canto de Minas</h1>
                </div>

                <div className='Screen-forms-infos'>
                    <div className='Screen-forms-login'>
                        <h2>Login</h2>
                        <h5>Sing in to continue</h5>
                    </div>

                    <div className=''>
                        <UserInputLogin />
                        <PasswordInputLogin />
                        <ButtonLogin />                    
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
