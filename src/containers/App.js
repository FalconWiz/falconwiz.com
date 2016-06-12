import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../components/Main'
import * as TestActions from '../actions/testActions'

function mapStateToProps (state) {
  return {
    active: state.test.action
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...TestActions
  }, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App
