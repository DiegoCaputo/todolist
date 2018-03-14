import { combineReducers } from 'redux'
import tarefas from './tarefas'
import visibilidadeFiltros from './visibilidadeFiltros'

const tarefaApp = combineReducers({
  tarefas,
  visibilidadeFiltros
})
 
export default tarefaApp