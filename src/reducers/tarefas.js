import TarefaLista from "../components/TarefaLista/TarefaLista";
import { setState, getState } from "../localStorage"

const tarefas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAREFA':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          date: action.date
        }
      ]
    case 'TOGGLE_TAREFA':
      return state.map(tarefa =>
        (tarefa.id === action.id)
          ? { ...tarefa, completed: !tarefa.completed }
          : tarefa
      )
    case 'DEL_TAREFA':
      state = state.filter(tarefa => tarefa.id !== action.id);
      setState({
        tarefas: getState().tarefas
      }
      )
      return state;
    case 'ORDENAR_DESC':
      state = state.slice().sort(function (a, b) {
        return a.date > b.date;
      });

      setState({
        tarefas: getState().tarefas
      }
      )

      return state;
    case 'ORDENAR_CRESC':
      state = state.slice().sort(function (a, b) {
        return a.date < b.date;
      });

      setState({
        tarefas: getState().tarefas
      }
      )

      return state;
    default:
      return state
  }
}

export default tarefas