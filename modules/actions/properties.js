
import fetch from 'isomorphic-fetch'
import config from '../config'
export const REQUEST_PROPERTY = 'REQUEST_PROPERTY';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';


export function requestProperties() {
  return {
    type: REQUEST_PROPERTY
  };
}

export function receiveProperties(json) {
  return {
    type: RECEIVE_PROPERTY,
    properties: json.listing,
    result_count: json.result_count,
    receivedAt: Date.now()
  };
}

export function fetchProperties(page_number = 1) {
  return (dispatch, getState) => {
    dispatch(requestProperties());

    const {ui, data} = getState();
    const criteria = ui.searchCriteria;
    const cfg = config.zoopla;
    let params = {
      api_key: cfg.api_key,
      radius: 0.25,
      area: criteria.area,
      listing_status: ui.listingFilter,
      ordering: "ascending",
      page_number: page_number,
      page_size: cfg.page_size
    };

    if (criteria.min_price) {
      params["minimum_price"] = criteria.min_price;
    }
    if (criteria.max_price) {
      params["maximum_price"] = criteria.max_price;
    }
    if (criteria.property_type) {
      params["property_type"] = criteria.property_type;
    }
    if (criteria.number_bedroom) {
      params["minimum_beds"] = criteria.number_bedroom;
    }

    params = $.param(params);
    const uri = `${cfg.endpoint}/property_listings.json?${params}`;

    return fetch("/api", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          uri: uri
        })
      }).then(response => response.json())
      .then(json => dispatch(receiveProperties(json)));
  };
}