

export const SET_LISTING_FILTER = 'SET_LISTING_FILTER';
export const SET_SEARCH_AREA = 'SET_SEARCH_AREA';

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