import React, {Component} from 'react'
import SearchResult from './SearchResult'

import {
  setListingFilter,
  setSearchArea
} from '../actions/search'

import {
  fetchProperties
} from '../actions/properties'

export default class SearchTab extends Component {
  constructor(props) {
    super(props);
    this._fetchData = this._fetchData.bind(this);
  }

  _fetchData() {
    this.props.dispatch(fetchProperties());
  }

  _handleTabClick(listingFilter) {
    this.props.dispatch(setListingFilter(listingFilter));
  }

  _handleInputArea(e) {
    if (e.keyCode == 13) {
      this._handleSearch();
    } else {
      this.props.dispatch(setSearchArea(e.target.value));
    }
  }

  _handleSearch(e) {
    this._fetchData();
  }

  render() {
    return (
      <div>
        <ul className="search-tabs nav nav-tabs">
          <li className={this.props.listingFilter == "rent" ? "active": ""}>
            <a onClick={this._handleTabClick.bind(this, "rent")} href="#">For rent</a>
          </li>
          <li className={this.props.listingFilter == "sale" ? "active": ""}>
            <a onClick={this._handleTabClick.bind(this, "sale")} href="#">For sale</a>
          </li>
          <li className={this.props.listingFilter == "price" ? "active": ""}>
            <a onClick={this._handleTabClick.bind(this, "price")} href="#">House prices</a>
          </li>
        </ul>
        <div className="tabs-content">
          <div className="input-group">
            <span className="input-group-addon">
              Search
            </span>
            <input onKeyUp={this._handleInputArea.bind(this)} type="text" className="form-control" placeholder="e.g. Oxford, NW3 or Waterloo Station" />
          </div>
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
