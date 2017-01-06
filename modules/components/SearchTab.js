import React, {Component} from 'react'
import SearchResult from './SearchResult'
import config from '../config'

import {
  setListingFilter,
  setSearchArea
} from '../actions/search'

import {
  fetchProperties
} from '../actions/properties'

export default class SearchTab extends Component {
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
    const cfg = config.zoopla;
    const page_number = this.props.next_page_number;
    let params = {
      api_key: cfg.api_key,
      radius: 0.25,
      area: this.props.searchCriteria.area,
      listing_status: this.props.listingFilter,
      ordering: "ascending",
      page_number: page_number,
      page_size: cfg.page_size
    };
    params = $.param(params);
    const url = `${cfg.endpoint}/property_listings.json?${params}`;
    this.props.dispatch(fetchProperties(url, page_number));
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
            next_page_number={this.props.next_page_number}
            result_count={this.props.result_count}
            properties={this.props.properties}
            isFetching={this.props.isFetching}
            dispatch={this.props.dispatch} />

        </div>
      </div>
    );
  }
}
