import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import {
  fetchProperties
} from '../actions/properties'

export default class SearchPagination extends Component {
  _handlePageClick(data) {
    const selected = data.selected + 1;
    this.props.dispatch(fetchProperties(selected));
  }

  render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this._handlePageClick.bind(this)}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />
    );
  }
}