let tarefaId = (localStorage.getItem('state') == null) ? 0 : localStorage.getItem('state').length
export const addTarefa = text => {

  return {
    type: 'ADD_TAREFA',
    id: tarefaId++,
    text,
    date: new Date().toDateString()
  }
}

export const delTarefa = id => {
  return {
    type: 'DEL_TAREFA',
    id
  }
}

export const setVisibilidadeDasTarefas = filter => {
  return {
    type: 'SET_VISIBILIDADE_TAREFAS',
    filter
  }
}

export const setOrdenacaoDasTarefas = ordem => {
  return {
    type: 'SET_ORDENACAO_TAREFAS',
    ordem
  }
}


export const toggleTarefa = id => {
  return {
    type: 'TOGGLE_TAREFA',
    id
  }
}

export const ordenarDesc = ordem => {
  return {
    type: 'ORDENAR_DESC',
    ordem
  }
}

export const ordenarCresc = ordem => {
  return {
    type: 'ORDENAR_CRESC',
    ordem
  }
}

export const VisibilidadeDasTarefas = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const OrdenacaoDasTarefas = {
  ASCENDENTE: 'ASCENDENTE',
  DESCENDENTE: 'DESCENDENTE'
}