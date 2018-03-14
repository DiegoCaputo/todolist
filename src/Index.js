import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import TarefaApp from './reducers'
import App from './components/App'
import { getState, setState } from './localStorage'
import Tarefa from './components/Tarefa/Tarefa';

let persistedStore = getState();
let store = createStore(TarefaApp, persistedStore);

//localStorage.removeItem('state');

store.subscribe(() => {
  setState({
    tarefas: store.getState().tarefas
  })
})

render(
  <Provider store={store}>
  
    <App />
  </Provider>,
  document.getElementById('app')
)