

export const SET_LISTING_FILTER = 'SET_LISTING_FILTER';
export const SET_SEARCH_AREA = 'SET_SEARCH_AREA';
export const SET_NUMBER_BEDROOM = 'SET_NUMBER_BEDROOM';
export const SET_HOUSE_TYPE = 'SET_HOUSE_TYPE';
export const SET_MAX_PRICE = 'SET_MAX_PRICE';
export const SET_MIN_PRICE = 'SET_MIN_PRICE';
const SET_LIMIT_PRICE = {
  'Max': SET_MAX_PRICE,
  'Min': SET_MIN_PRICE,
};

export function setListingFilter(filter) {
  return {
    type: SET_LISTING_FILTER,
    filter: filter
  }
}

export function setSearchArea(area) {
  return {
    type: SET_SEARCH_AREA,
    area: area
  }
}

export function setNumberBedRoom(number) {
  return {
    type: SET_NUMBER_BEDROOM,
    number: number
  }
}

export function setLimitPrice(label, price) {
  return {
    type: SET_LIMIT_PRICE[label],
    price: price
  }
}

export function setHouseType(property_type) {
  return {
    type: SET_HOUSE_TYPE,
    property_type: property_type
  }
}