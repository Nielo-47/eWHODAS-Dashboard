import React from 'react'
import Indicador from './components/indicador/indicador'

function HomeAdmin() {
    return (
        <div><Indicador titulo='Acessos' valor={20} crescimento={10} /></div>
    )
}

export default HomeAdmin