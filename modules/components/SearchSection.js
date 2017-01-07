import React, {Component} from 'react'
import SearchResult from './SearchResult'
import SearchTab from './SearchTab'
import SearchFilter from './SearchFilter'

import {
  setSearchArea
} from '../actions/search'

import {
  fetchProperties
} from '../actions/properties'



export default class SearchSection extends Component {
  _handleInputArea(e) {
    if (e.keyCode == 13) {
      this._handleSearch();
    } else {
      this.props.dispatch(setSearchArea(e.target.value));
    }
  }

  _handleSearch(e) {
    this.props.dispatch(fetchProperties());
  }

  render() {
    return (
      <div>
        <SearchTab
          listingFilter={this.props.listingFilter}
          dispatch={this.props.dispatch} />

        <div className="tabs-content">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-search"></i>
            </span>
            <input onKeyUp={this._handleInputArea.bind(this)} type="text" className="form-control" placeholder="e.g. Oxford, NW3 or Waterloo Station" />
          </div>

          <SearchFilter dispatch={this.props.dispatch} />

          <div className="row">
            <div className="col-sm-6">
              <input onClick={this._handleSearch.bind(this)} type="button" className="btn btn-danger" value="Search" />
            </div>
          </div>

          <SearchResult
            resultCount={this.props.result_count}
            properties={this.props.properties}
            isFetching={this.props.isFetching}
            dispatch={this.props.dispatch} />

        </div>
      </div>
    );
  }
}
