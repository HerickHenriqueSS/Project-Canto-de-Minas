import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function EditStore() {
    const [productCode, setProductCode] = useState(null);
    const [productName, setProductName] = useState(null);
    const [idProduct, setIdProduct] = useState(null);
    const [productDescription, setProductDescription] = useState(null);
    const [respProduct, setRespProduct] = useState('');
    
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

    useEffect(() => {
    }, [idProduct]);

    function onchangeIdProduct (ev) {
    const texto = ev.target.value
    setIdProduct(texto)
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
        putInfos();
    }else{
        alert('Preeencha todos os campos!')
    }
        
    }  

    function putInfos(){
    const url = `http://localhost:3000/attProduto/${productCode}/${productName}/${productDescription}/${idProduct}`;
        
        axios.put(url, {})
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
        <div className='Border-Screen-editUser'>
            <div className='Screen-image-registerUser'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <p><b>Editar Produto</b></p>
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
                    <p><b>Nome do Produto</b></p>
                    <input type="text" placeholder='Nome do Produto' value={productName} onChange={onchangeNumberPhone}/>
                </div>
            </div>
        </div>


        <div>
            <div className='Screen-registerUser-phone-box'>
                <div className='Screen-registerUser-phone'>
                    <p><b>ID do produto</b></p>
                    <input type="number" placeholder='Id do Produto' value={idProduct} onChange={onchangeIdProduct}/>
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
