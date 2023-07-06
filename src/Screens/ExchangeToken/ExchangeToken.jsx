
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ExchangeToken() {
    
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
        <div className='Border-Screen-ExchangeToken'>
            <div className='Screen-image-ExchangeToken'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <p><b>Ficha de Troca</b></p>
            </div>
        <div>
        
        {/* <div>
            <div className='Screen-ExchangeToken-checkbox-box'>
                <div className='Screen-ExchangeToken-checkbox'>
                    <p><b>Número do Lote</b></p>
                    <div>
                    <input type="checkbox" value={numberPhone} onChange={onchangeNumberPhone}/>
                    <input type="checkbox" value={numberPhone} onChange={onchangeNumberPhone}/>
                    <input type="checkbox" value={numberPhone} onChange={onchangeNumberPhone}/>
                    <input type="checkbox" value={numberPhone} onChange={onchangeNumberPhone}/>
                    </div>
                </div>
            </div>
        </div> */}
        
        
        
        
        {/* InputphoneexchangeToken  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-ExchangeToken-nameStore-box'>
                <div className='Screen-ExchangeToken-nameStore'>
                    <p><b>Nome da Loja</b></p>
                    <input type="text" placeholder='Nome da Loja' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>

        <div>
            <div className='Screen-ExchangeToken-codeProduct-box'>
                <div className='Screen-ExchangeToken-codeProduct'>
                    <p><b>Codigo do Produto</b></p>
                    <input type="number" placeholder='Codigo do Produto' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>


        <div>
            <div className='Screen-ExchangeToken-lote-box'>
                <div className='Screen-ExchangeToken-lote'>
                    <p><b>Número do Lote</b></p>
                    <input type="number" placeholder='Número do Lote' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>


        {/* InputphoneexchangeToken  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-ExchangeToken-data-box'>
                <div className='Screen-ExchangeToken-data'>
                    <p><b>Data</b></p>
                    <input type="date" placeholder='' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>

        <div>
            <div className='Screen-ExchangeToken-dataFabricacao-box'>
                <div className='Screen-ExchangeToken-dataFabricacao'>
                    <p><b>Data de Fabricação</b></p>
                    <input type="date" placeholder='' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>

        <div>
            <div className='Screen-ExchangeToken-dataVencimento-box'>
                <div className='Screen-ExchangeToken-dataVencimento'>
                    <p><b>Data de Vencimento</b></p>
                    <input type="date" placeholder='' value={numberPhone} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>



        {/* InputPasswordUser usado pra pegar os valores recebidos do input */}
        
        <div>
            <div className='Screen-ExchangeToken-nameResponsavel-box'>
                <div className='Screen-ExchangeToken-nameResponsavel'>
                    <p><b>Nome do Responsavel</b></p>
                    <input type="text" placeholder='Nome do Responsavel' value={password} onChange={onchangePassword}/>
                </div>
            </div>
        </div>

        <div>
            <div className='Screen-ExchangeToken-nameRepositor-box'>
                <div className='Screen-ExchangeToken-nameRepositor'>
                    <p><b>Nome do Repositor</b></p>
                    <input type="text" placeholder='Nome do Repositor' value={password2} onChange={onchangePassword2}/>
                </div>
            </div>
        </div> 
        
        {/* InputlevelAcessUser usado pra pegar os valores recebidos do input */}

        <div>
            <div className='Screen-registerUser-description-box'>
                <div className='Screen-registerUser-description'>
                    <p><b>Descrição</b></p>
                    <input type="text" placeholder='Descrição do produto' />
                </div>
            </div>
        </div>


        {/* BottonexchangeTokens  usado pra pegar os valores recebidos do input */} 

        <div>
            <div>
                <div className='Screen-ExchangeToken-button'>
                    <button className='Screen-ExchangeToken-button-prev'>
                        <Link className='link-to' to={`/menu`}><b>Voltar</b></Link>
                    </button>

                    <button className='Screen-ExchangeToken-button-save' >
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


