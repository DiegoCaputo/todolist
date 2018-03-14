import React from 'react'
import PropTypes from 'prop-types'
import Tarefa from '../Tarefa/Tarefa'

const TarefaLista = ({ tarefas, onCheckClick, onTrashClick }) => (
  <ul>
    {tarefas.map(tarefa => (
      <Tarefa key={tarefa.id} {...tarefa} toggleComplete={() => onCheckClick(tarefa.id)}
        deletarTarefa={() => onTrashClick(tarefa.id)} />
    ))}
  </ul>
)

TarefaLista.propTypes = {
  tarefas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  onCheckClick: PropTypes.func.isRequired,
  onTrashClick: PropTypes.func.isRequired
}

export default TarefaLista