
import fetch from 'isomorphic-fetch'

export const REQUEST_PROPERTY = 'REQUEST_PROPERTY';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';


export function requestProperties() {
  return {
    type: REQUEST_PROPERTY
  };
}

export function receiveProperties(json, page_number) {
  return {
    type: RECEIVE_PROPERTY,
    properties: json.listing,
    result_count: json.result_count,
    receivedAt: Date.now(),
    next_page_number: page_number + 1
  };
}

export function fetchProperties(uri, page_number) {
  return dispatch => {
    dispatch(requestProperties());
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
      .then(json => dispatch(receiveProperties(json, page_number)));
  };
}