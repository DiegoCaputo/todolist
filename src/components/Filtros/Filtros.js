import React from 'react'
import FilterLink from '../../containers/FilterLink'
import { VisibilidadeDasTarefas } from '../../actions'
 
const Filtros = () => (
  <div className="controls">
    <h3>Mostrar:</h3>
    {' '}
    <FilterLink filter={VisibilidadeDasTarefas.SHOW_ALL}>
      Todas
    </FilterLink>
    <FilterLink filter={VisibilidadeDasTarefas.SHOW_COMPLETED}>
      Completadas
    </FilterLink>
  </div>
)
 
export default Filtros