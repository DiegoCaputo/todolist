import { connect } from 'react-redux'
import { setVisibilidadeDasTarefas } from '../actions'
import Link from '../components/Link/Link'
 
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilidadeFiltros
  }
}
 
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilidadeDasTarefas(ownProps.filter))
    }
  }
}
 
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
 
export default FilterLink