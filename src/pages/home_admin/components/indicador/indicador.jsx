import React from 'react'
import './indicador.css'


function Indicador({ titulo, valor, crescimento }) {
    return (
        <div className='molduraExternaIndicador'>
            <div className='tituloIndicador'>{titulo}</div>
            <div className='progressaoIndicador'>
                <div className='molduraInternaIndicador'>
                    <div className='valoresIndicador'>
                        <div classname='periodoIndicador'>Hoje</div>
                        <div className='valorIndicador'>{valor}</div>
                    </div>
                    <hr
                        style={{
                            color: 'black',
                            height: 0,
                            width:'100%',
                            borderTop: 'none'
                        }}
                    />
                    <div className='sessaoCrescimentoIndicador'>
                        <div className='comparacaoIndicador'>Crescimento em relação a ontem</div>
                        <div className='crescimentoIndicador'>{crescimento} %</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Indicador