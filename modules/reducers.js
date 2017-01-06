import { combineReducers } from 'redux'
import {
  REQUEST_PROPERTY, RECEIVE_PROPERTY
} from './actions/properties'

import {
  SET_LISTING_FILTER,
  SET_SEARCH_AREA
} from './actions/search'


function ui(state = {
  listingFilter: "rent",
  searchCriteria: {}
}, action) {
  switch (action.type) {
    case SET_LISTING_FILTER:
      return Object.assign({}, state, {
        listingFilter: action.filter
      });
    case SET_SEARCH_AREA:
      const searchCriteria = Object.assign({}, state.searchCriteria, {
        area: action.area
      });
      return Object.assign({}, state, {
        searchCriteria: searchCriteria
      });
    default:
      return state
  }
}

function data(state = {
  next_page_number: 1, result_count: 0,
  isFetching: false, properties: []
}, action) {
  switch (action.type) {
    case REQUEST_PROPERTY:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PROPERTY:
      return Object.assign({}, state, {
        isFetching: false,
        properties: action.properties,
        result_count: action.result_count,
        next_page_number: action.next_page_number
      });
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  ui,
  data
})

export default rootReducer