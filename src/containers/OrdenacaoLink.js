import { connect } from 'react-redux'
import { ordenarDesc, ordenarCresc } from '../actions'
import Ordenacao from '../components/Ordenacao/Ordenacao'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    ordenarDecrescente: () => {
      dispatch(ordenarDesc())
    }, ordenarCrescente: () => {
      dispatch(ordenarCresc())
    }
  }
}

const OrdenacaoLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ordenacao)

export default OrdenacaoLink