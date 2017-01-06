import React, {Component} from 'react'

import {
  setListingFilter
} from '../actions/search'

export default class SearchSection extends Component {
  _handleTabClick(listingFilter) {
    this.props.dispatch(setListingFilter(listingFilter));
  }

  render() {
    return (
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
    );
  }
}