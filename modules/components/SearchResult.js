import React, {Component} from 'react'
import SearchItem from './SearchItem'
import ReactPaginate from 'react-paginate';
import config from '../config'


class SearchPagination extends Component {
  render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5} />
    );
  }
}


export default class SearchResult extends Component {
  render() {
    const cfg = config.zoopla;
    let paging = "";
    if (this.props.result_count != 0) {
      const pageCount = (this.props.result_count-1) / cfg.page_size + 1;
      paging = <SearchPagination pageCount={pageCount} />
    }

    return (
      <div className="search-content">
        {this.props.isFetching &&
          <h2>Loading...</h2>
        }
        {this.props.properties.map((item, i) =>
          <SearchItem key={item.listing_id} item={item} />
        )}

        {paging}
      </div>
    );
  }
}