const visibilidadeFiltros = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILIDADE_TAREFAS':
        return action.filter
      default:
        return state
    }
  }
   
  export default visibilidadeFiltros
  