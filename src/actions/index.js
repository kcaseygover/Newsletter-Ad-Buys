const CHANGE_PUBLISHER = 'CHANGE_PUBLISHER';
const CHANGE_COST = 'CHANGE_COST';
const CHANGE_PUBLICATION = 'CHANGE_PUBLICATION';
const CHANGE_SPONSORSHIP = 'CHANGE_SPONSORSHIP';
const CHANGE_REACH = 'CHANGE_REACH';
const CHANGE_PUBLISH_DATE = 'CHANGE_PUBLISH_DATE';
const CHANGE_DATE_ADDED = 'CHANGE_DATE_ADDED';
const SAVE_AD_BUY = 'SAVE_AD_BUY';
const SAVE_AD_BUY_SUCCESS = 'SAVE_AD_BUY_SUCCESS';
const SAVE_AD_BUY_ERROR = 'SAVE_AD_BUY_ERROR';
const DELETE_ROW = 'DELETE_ROW';
const DELETE_ROW_SUCCESS = 'DELETE_ROW_SUCCESS';
const DELETE_ROW_ERROR = 'DELETE_ROW_ERROR';
const CLEAR_TABLE = 'CLEAR_TABLE';
const CLEAR_TABLE_SUCCESS = 'CLEAR_TABLE_SUCCESS';
const CLEAR_TABLE_ERROR = 'CLEAR_TABLE_ERROR';

export function changePublisher(publisher) {
  return {
    type: CHANGE_PUBLISHER,
    publisher,
  }
}

export function changePublication(publication) {
  return {
    type: CHANGE_PUBLICATION,
    publication,
  }
}

export function changeSponsorship(sponsorship) {
  return {
    type: CHANGE_SPONSORSHIP,
    sponsorship,
  }
}

export function changeReach(reach) {
  return {
    type: CHANGE_REACH,
    reach,
  }
}

export function changeCost(cost) {
  return {
    type: CHANGE_COST,
    cost,
  }
}

export function changePublishDate(publishDate) {
  return {
    type: CHANGE_PUBLISH_DATE,
    publishDate,
  }
}

export function changeDateAdded(dateAdded) {
  return {
    type: CHANGE_DATE_ADDED,
    dateAdded,
  }
}

export function saveAdBuy() {
  return {
    type: SAVE_AD_BUY,
  }
}
export function saveAdBuyError(error) {
  return {
    type: SAVE_AD_BUY_ERROR,
    error,
  }
}

export function saveAdBuySuccess() {
  return {
    type: SAVE_AD_BUY_SUCCESS,
  }
}

export function deleteRow(dateAdded) {
  console.log('args', arguments)
  return {
    type: DELETE_ROW,
    dateAdded,
  }
}

export function deleteRowSuccess() {
  return {
    type: DELETE_ROW_SUCCESS,
  }
}
export function deleteRowError(error) {
  return {
    type: DELETE_ROW_ERROR,
    error,
  }
}
export function clearTable() {
  return {
    type: CLEAR_TABLE,
  }
}
export function clearTableSuccess() {
  return {
    type: CLEAR_TABLE_SUCCESS
  }
}
export function clearTableError(error) {
  return {
    type: CLEAR_TABLE_ERROR,
    error,
  }
}
