import React from 'react'
import PropTypes from 'prop-types'
import './Tarefa.scss';
import FontAwesome from 'react-fontawesome';

const Tarefa = ({ toggleComplete, deletarTarefa, completed, text }) => (
    <li
      style={{
        backgroundColor: completed ? '#DDD' : '#AAA',
        border: completed ? '1px solid #28a745' : 'none'
      }}
    >
      {text}
      <span>
        <FontAwesome onClick={toggleComplete} name={!completed ? "check" : "times"} />
        <FontAwesome onClick={deletarTarefa} name="trash" />
      </span>
    </li>
)

Tarefa.propTypes = {
  toggleComplete: PropTypes.func.isRequired,
  deletarTarefa: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Tarefa