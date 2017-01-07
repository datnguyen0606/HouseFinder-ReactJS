import React, {Component} from 'react'
import PriceList from './PriceList'
import Bedroom from './Bedroom'

import {
  setHouseType
} from '../actions/search'

export default class SearchFilter extends Component {
  _onTypeChange(e) {
    const value = (e.target.value == "") ? null : e.target.value;
    this.props.dispatch(setHouseType(value));
  }

  render() {
    return (
      <div className="search-filter row">
        <PriceList dispatch={this.props.dispatch} label={"Min"} />
        <PriceList dispatch={this.props.dispatch} label={"Max"} />
        <div className="col-sm-3">
          Property type
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-home"></i>
            </span>
            <select onChange={this._onTypeChange.bind(this)} className="selectpicker form-control">
              <option value="">Show all</option>
              <option value="houses">Houses</option>
              <option value="flats">Flats</option>
              <option value="farms_land">Farms/land</option>
            </select>
          </div>
        </div>
        <Bedroom dispatch={this.props.dispatch} />
      </div>
    );
  }
}
