import React, {Component} from 'react'

import {
  setNumberBedRoom
} from '../actions/search'

export default class Bedroom extends Component {
  _onChange(e) {
    this.props.dispatch(setNumberBedRoom(parseInt(e.target.value)));
  }

  render() {
    return (
      <div className="col-sm-3">
        Bedrooms
        <div className="input-group">
          <span className="input-group-addon">
            <i className="fa fa-bed"></i>
          </span>
          <select onChange={this._onChange.bind(this)} className="selectpicker form-control">
            <option value="">No Min</option>
            <option value="0">Studio+</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
            <option value="6">6+</option>
            <option value="7">7+</option>
            <option value="8">8+</option>
            <option value="9">9+</option>
            <option value="10">10+</option>
          </select>
        </div>
      </div>
    );
  }
}