import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchSection from './SearchSection'
import SearchPagination from './SearchPagination'

class App extends Component {
  render() {
    return (
      <div className="col-sm-10 col-sm-offset-1">
        <SearchSection
          {...this.props.ui}
          {...this.props.data}
          dispatch={this.props.dispatch} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const {ui, data} = state;
  return {
    ui,
    data
  };
}

export default connect(mapStateToProps)(App)