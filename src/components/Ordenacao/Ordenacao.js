import React from 'react'
import PropTypes from 'prop-types'

const Ordenacao = ({ ordenarDecrescente, ordenarCrescente }) => {
  return <div className="controls">
    <h3>Ordenar por:</h3>
    {' '}
    <a href="" onClick={e => {
      e.preventDefault()
      ordenarDecrescente()
    }}>
      Mais recentes
    </a>
    <a href="" onClick={e => {
      e.preventDefault()
      ordenarCrescente()
    }}>
      Mais antigas
    </a>
  </div>

}

Ordenacao.propTypes = {
  ordenarDecrescente: PropTypes.func.isRequired,
  ordenarCrescente: PropTypes.func.isRequired
}

export default Ordenacao