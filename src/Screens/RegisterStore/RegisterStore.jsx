import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function RegisterStore() {
  const [nameEmpresa, setNameEmpresa] = useState(null);
  const [numberCnpj, setNumberCnpj] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [number, setNumber] = useState(null);
  const [region, setRegion] = useState(null);
  const [validar, setValidar] = useState(null);

  // Use Effect do nome da empresa
  useEffect(() => {
  }, [nameEmpresa]);

  function onchangeNameEmpresa (ev) {
    const texto = ev.target.value
    setNameEmpresa(texto)
    
  }


  // Use Effect do CPF/CNPJ da empresa
  useEffect(() => {
  }, [numberCnpj]);

  function onchangeNumbercnpj (ev) {
    const texto = ev.target.value
    setNumberCnpj(texto)
  }


  //Use Effect do endereço da empresa
  useEffect(() => {
  }, [endereco]);

  useEffect(() => {
  }, [number]);

  //Funçoes para a captura da escrita na barra de input
  function onchangeEndereco (ev) {
    const texto = ev.target.value
    setEndereco(texto)
  }
    function onchangeNumber (ev) {
    const texto = ev.target.value
    setNumber(texto)
  }


  //Use Effect da região 
  useEffect(() => {
  }, [region]);

  function onchangeRegion (ev) {
    const texto = ev.target.value
    setRegion(texto)
  }


  useEffect(() => {
  }, [numberCnpj, nameEmpresa, endereco, number, region]);

  function validarInformacoes(){
    if( numberCnpj == null || nameEmpresa == null || endereco == null || number == null || region == null){
      alert('Preeencha todos os campos!')
  
    }
    if(numberCnpj != null && nameEmpresa != null && endereco != null && number != null && region != null){
      postInfos();
    }
      
  }

  function postInfos(){
    const url = `http://localhost:3000/registrarLoja/${numberCnpj}/${nameEmpresa}/${endereco}/${number}/${region}/:managerId`;
      
      axios.post(url, {})
        .then(response => {
          console.log('Resposta do servidor:', response.data);
        })
        .catch(error => {
          console.error('Erro ao enviar a solicitação:', error);
        });
    }
  
  

  return (
    <div>
        <div className='Border-Screen-RegisterStore'>
            <div className='Screen-image-register'>
                <img className='Image-logo' src="../public/assets/logo-canto-de-minas.png" alt="" />
                <p><b>Cadastro de Loja</b></p>
            </div>
        <div>


        {/* InputNameStore  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-store-name-box'>
                <div className='Screen-store-name'>
                    <img src="../public/assets/logo-canto-de-minas.png" alt="" />
                    <p><b>Nome da Loja</b></p>
                </div>
                <input type="text" placeholder='Nome da Empresa' value={nameEmpresa} onChange={onchangeNameEmpresa}/>
            </div>
        </div>

        

        {/* InputCNPJStore  usado pra pegar os valores recebidos do input */}
        <div>
            <div className='Screen-store-cnpj-box'>
                <div className='Screen-store-cnpj'>
                    <p><b>CPF/CPNPJ</b></p>
                    <input type="number" placeholder='CNPJ/CPF' value={numberCnpj} onChange={onchangeNumbercnpj}/>
                </div>
            </div>
        </div>



        {/* InputAdrressStore  usado pra pegar os valores recebidos do input */}
        
        <div>
            <div className='Screen-store-address-box'>
                <div className='Screen-store-address'>
                    <div className='Screen-store-address-name'>
                        <p className='Screen-store-address-number'><b>Endereço</b></p>
                        <p className='Screen-store-address-number2'><b>Nº</b></p>
                    </div>

                    <div className='Screen-store-address-input'>
                        <input className='Screen-store-address-input-number' type="text" placeholder='Endereço' value={endereco} onChange={onchangeEndereco}/>
                        <input className='Screen-store-address-number2' type="number" value={number} onChange={onchangeNumber}/>
                    </div>
                </div>
            </div>
        </div>    



        {/* InputSignature usado pra pegar os valores recebidos do input */}
        
        <div>
            <div className='Screen-store-signature-box'>
                <div className='Screen-store-signature'>
                    <p><b>Responsavel pela Loja </b></p>
                    <input type="text" />
                </div>
            </div>
        </div>
            
            

        {/* InputRegionStore  usado pra pegar os valores recebidos do input */} 

        <div>
            <div className='Screen-store-cnpj-box'>
                <div className='Screen-store-cnpj' >
                    <p><b>Região da Loja</b></p>
                    <input type="text" value={region} onChange={onchangeRegion} />
                </div>
            </div>

        </div>



        {/* BottonStore  usado pra pegar os valores recebidos do input */} 

        <div>
            <div>
                <div className='Screen-store-button'>
                    <button className='Screen-store-button-prev'>
                      <Link className='link-to' to={`/menu`}><b>Voltar</b></Link>
                    </button>

                    <button className='Screen-store-button-save' onClick={validarInformacoes}>
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
