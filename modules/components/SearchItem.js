import React, {Component} from 'react'
const moment = require('moment');
const numeral = require('numeral');
const truncate = require('truncate');

function normalizeString(string) {
  const t = string.charAt(0).toUpperCase() + string.slice(1);
  return t.split("_").join(" ");
}

export default class SearchItem extends Component {
  render() {
    const item = this.props.item;
    const price = item.rental_prices;
    let text_price = "";
    if (price === undefined) {
      text_price = `£${numeral(item.price).format('0,0')} ${normalizeString(item.price_modifier || "")}`;
    } else {
      text_price = `£${numeral(price.per_month).format('0,0')} pcm (£${numeral(price.per_week).format('0,0')} pw)`;
    }

    const published_date = moment(item.first_published_date);

    return (
      <div className="row">
        <div className="search-item-row col-sm-12">
          <div className="search-item-left">
            <a href="#">
              <img src={item.image_url} />
            </a>
          </div>
          <div className="search-item-right clearfix">
            <div className="pull-right agent-logo">
              <img src={item.agent_logo} alt={`Marketed by ${item.agent_name}`} />
            </div>
            <a href="#" className="text-price">
              {text_price}
            </a>

            <div className="item-attr">
              <span><i className="fa fa-bed"></i> 1</span>
              <i className="fa fa-bath"></i> 1
            </div>
            <p className="item-address">{item.displayable_address}</p>
            <p className="item-description">
              {truncate(item.description, 550)}
            </p>
          </div>
          <div className="search-item-footer clearfix">
            <div className="search-item-left">
              <div className="small">
                Listed on {published_date.format("Do MMM YYYY")} by
              </div>
              {item.agent_name}
            </div>
            <div className="search-item-right agent-address">
              <span className="agent-phone">
                <i className="fa fa-phone" aria-hidden="true"></i> {item.agent_phone}
              </span>
              <i className="fa fa-chevron-circle-right" aria-hidden="true"></i> {item.agent_address}
            </div>
          </div>
        </div>
      </div>
    );
  }
}