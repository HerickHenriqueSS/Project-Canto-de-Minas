import React from 'react'

export default function InputAdrdressStore() {
  return (
    <div>
        <div className='Screen-store-address-box'>
            <div className='Screen-store-address'>

                <div className='Screen-store-address-name'>
                    <p className='Screen-store-address-number'><b>Endereço</b></p>
                    <p className='Screen-store-address-number2'><b>Nº</b></p>
                </div>

                <div className='Screen-store-address-input'>
                    <input className='Screen-store-address-input-number' type="text" />
                    <input className='Screen-store-address-number2' type="text" />
                </div>

            </div>
        </div>

    </div>
  )
}
