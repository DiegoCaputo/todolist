import { connect } from 'react-redux'
import { toggleTarefa, delTarefa } from '../actions'
import TarefaLista from '../components/TarefaLista/TarefaLista'

const getTarefasVisiveis = (tarefas, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return tarefas.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tarefas.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return tarefas
  }
}

const mapStateToProps = state => {
  return {
    tarefas: getTarefasVisiveis(state.tarefas, state.visibilidadeFiltros)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckClick: id => {
      dispatch(toggleTarefa(id))
    }, onTrashClick: id => {
      dispatch(delTarefa(id))
    }
  }
}

const TarefasVisiveis = connect(
  mapStateToProps,
  mapDispatchToProps
)(TarefaLista)

export default TarefasVisiveis