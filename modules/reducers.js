import { combineReducers } from 'redux'
import {
  REQUEST_PROPERTY, RECEIVE_PROPERTY
} from './actions/properties'

import {
  SET_LISTING_FILTER,
  SET_SEARCH_AREA,
  SET_NUMBER_BEDROOM,
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_HOUSE_TYPE
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
      return Object.assign({}, state, {
        searchCriteria: Object.assign({}, state.searchCriteria, {
          area: action.area
        })
      });
    case SET_NUMBER_BEDROOM:
      return Object.assign({}, state, {
        searchCriteria: Object.assign({}, state.searchCriteria, {
          number_bedroom: action.number
        })
      });
    case SET_MAX_PRICE:
      return Object.assign({}, state, {
        searchCriteria: Object.assign({}, state.searchCriteria, {
          max_price: action.price
        })
      });
    case SET_MIN_PRICE:
      return Object.assign({}, state, {
        searchCriteria: Object.assign({}, state.searchCriteria, {
          min_price: action.price
        })
      });
    case SET_HOUSE_TYPE:
      return Object.assign({}, state, {
        searchCriteria: Object.assign({}, state.searchCriteria, {
          property_type: action.property_type
        })
      });
    default:
      return state
  }
}

function data(state = {
  result_count: 0,
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
        result_count: action.result_count
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