import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterUser() {

    const [nameUser, setNameUser] = useState(null);
    const [numberPhone, setNumberPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [password2, setPassword2] = useState(null);
    const [levelAcess, setLevelAcess] = useState(null);

    // Use Effect do nome do Usuario
    useEffect(() => {
    }, [nameUser]);

    function onchangeNameUser (ev) {
    const texto = ev.target.value
    setNameUser(texto)
    
    }


    // Use Effect do Phone do Usuario
    useEffect(() => {
    }, [numberPhone]);

    function onchangeNumberPhone (ev) {
    const texto = ev.target.value
    setNumberPhone(texto)
    }


    //Use Effect do Password do Usuario
    useEffect(() => {
    }, [password]);
    //Funçoes para a captura da escrita na barra de input
    function onchangePassword (ev) {
    const texto = ev.target.value
    setPassword(texto)
    }


    //Use Effect do confirm Password do Usuario
    useEffect(() => {
    }, [password2]);

    //Funçoes para a captura da escrita na barra de input
    function onchangePassword2 (ev) {
    const texto = ev.target.value
    setPassword2(texto)
    }

    
    //Use Effect do confirm Password do Usuario
    useEffect(() => {
    }, [levelAcess]);

    //Funçoes para a captura da escrita na barra de input
    function onchangeLevelAcess (ev) {
    const texto = ev.target.value
    setLevelAcess(texto)
    }
    


    useEffect(() => {
    }, [numberPhone, nameUser, password, levelAcess]);

    function validarInformacoes(){
    if( numberPhone == null || nameUser == null || password == null || levelAcess == null ){
        alert('Preeencha todos os campos!')
    
    }
    if(numberPhone != null && nameUser != null && password != null && levelAcess != null ){
        postInfos();
    }
        
    }

    function postInfos(){
    const url = `http://localhost:3000/registrarCliente/${nameUser}/${numberPhone}/${password}/${levelAcess}/`;
        
        axios.post(url, {})
        .then(response => {
            console.log('Resposta do servidor:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar a solicitação:', error);
            alerts('Falha no cadastro')
        });
    }
    
    

    return (
    <div>
        <div className='Border-Screen-RegisterUser'>
            <div className='Screen-image-registerUser'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <p><b>Cadastro do Usuario</b></p>
            </div>
        <div>


        {/* InputNameUser  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-registerUser-name-box'>
                <div className='Screen-registerUser-name'>
                    <img src="../public/assets/logo-canto-de-minas.png" alt="" />
                    <p><b>Nome do Usuario</b></p>
                </div>
                <input type="text" placeholder='Nome do Ususario' value={nameUser} onChange={onchangeNameUser}/>
            </div>
        </div>

        

        {/* InputphoneRegisterUser  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-registerUser-phone-box'>
                <div className='Screen-registerUser-phone'>
                    <p><b>Telefone</b></p>
                    <input type="tel" placeholder='Número de Telefone' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>



        {/* InputPasswordUser usado pra pegar os valores recebidos do input */}
        
        <div>
            <div className='Screen-registerUser-password-box'>
                <div className='Screen-registerUser-password'>
                    <p><b>Senha</b></p>
                    <input type="password" placeholder='Senha' value={password} onChange={onchangePassword}/>
                </div>
            </div>
        </div>

        <div>
            <div className='Screen-registerUser-password-box2'>
                <div className='Screen-registerUser-password2'>
                    <p><b>Confirmar Senha</b></p>
                    <input type="password" placeholder='Confirmar Senha' value={password2} onChange={onchangePassword2}/>
                </div>
            </div>
        </div> 
        
        {/* InputlevelAcessUser usado pra pegar os valores recebidos do input */}

        <div>
            <div className='Screen-registerUser-level-box'>
                <div className='Screen-registerUser-level'>
                    <p><b>Nivel de Acesso</b></p>
                    <input type="number" placeholder='Nivel de Acesso' value={levelAcess} onChange={onchangeLevelAcess}/>
                </div>
            </div>
        </div> 


        {/* BottonRegisterUsers  usado pra pegar os valores recebidos do input */} 

        <div>
            <div>
                <div className='Screen-registerUser-button'>
                    <button className='Screen-registerUser-button-prev'>
                        <Link className='link-to' to={`/menu`}><b>Voltar</b></Link>
                    </button>
                    <button className='Screen-registerUser-button-save' onClick={validarInformacoes}>
                    <Link className='link-to' to={`/menu`}><b>Salvar</b></Link>
                    </button>
                </div>
            </div>
        </div>

            </div>

        </div>

    </div>
    )
}

