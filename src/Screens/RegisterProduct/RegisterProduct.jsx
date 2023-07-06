
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
    
export default function RegisterProduct() {

    const [productCode, setProductCode] = useState(null);
    const [productName, setProductName] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    // Use Effect do nome do Usuario
    useEffect(() => {
    }, [productCode]);

    function onchangeNameUser (ev) {
    const texto = ev.target.value
    setProductCode(texto)
    
    }


    // Use Effect do Phone do Usuario
    useEffect(() => {
    }, [productName]);

    function onchangeNumberPhone (ev) {
    const texto = ev.target.value
    setProductName(texto)
    }


    //Use Effect do Password do Usuario
    useEffect(() => {
    }, [productDescription]);
    //Funçoes para a captura da escrita na barra de input
    function onchangeProductDescription (ev) {
    const texto = ev.target.value
    setProductDescription(texto)
    }


    useEffect(() => {
    }, [productName, productCode, productDescription]);

    function validarInformacoes(){
    if( productName == null || productCode == null || productDescription == null ){
        alert('Preeencha todos os campos!')
    
    }
    if(productName != null && productCode != null && productDescription != null){
        postInfos();
    }else{
        alert('Preeencha todos os campos!')
    }
        
    }

    function postInfos(){
    const url = `http://localhost:3000/registrarProduto/${productCode}/${productName}/${productDescription}/`;
        
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
                <p><b>Cadastro de Produto</b></p>
            </div>
        <div>


        {/* InputNameUser  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-registerUser-name-box'>
                <div className='Screen-registerUser-name'>
                    <img src="../public/assets/logo-canto-de-minas.png" alt="" />
                    <p><b>Codigo do Produto</b></p>
                </div>
                <input type="number" placeholder='codigo do podruto' value={productCode} onChange={onchangeNameUser}/>
            </div>
        </div>

        

        {/* InputphoneRegisterUser  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-registerUser-phone-box'>
                <div className='Screen-registerUser-phone'>
                    <p><b>Produto</b></p>
                    <input type="text" placeholder='Número de Produto' value={productName} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>



        {/* InputPasswordUser usado pra pegar os valores recebidos do input */}
        
        <div>
            <div className='Screen-registerUser-productDescription-box'>
                <div className='Screen-registerUser-productDescription'>
                    <p><b>Descrição</b></p>
                    <input type="text" placeholder='Descrição do produto' value={productDescription} onChange={onchangeProductDescription}/>
                </div>
            </div>
        </div>

        {/* BottonRegisterProduct  usado pra pegar os valores recebidos do input */} 

        <div>
            <div>
                <div className='Screen-registerProduct-button'>
                    <button className='Screen-registerProduct-button-prev'>
                        <Link className='link-to' to={`/menu`}><b>Voltar</b></Link>
                    </button>

                    <button className='Screen-registerProduct-button-save' onClick={validarInformacoes}>
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

    

