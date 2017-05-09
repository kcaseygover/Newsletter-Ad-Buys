const CHANGE_PUBLISHER = 'CHANGE_PUBLISHER';
const CHANGE_COST = 'CHANGE_COST';
const CHANGE_PUBLICATION = 'CHANGE_PUBLICATION';
const CHANGE_SPONSORSHIP = 'CHANGE_SPONSORSHIP';
const CHANGE_REACH = 'CHANGE_REACH';
const CHANGE_PUBLISH_DATE = 'CHANGE_PUBLISH_DATE';
const CHANGE_DATE_ADDED = 'CHANGE_DATE_ADDED';
const SAVE_AD_BUY = 'SAVE_AD_BUY';
const DELETE_ROW = 'DELETE_ROW';

let nextAd = 0;

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
    id: nextAd++,
  }
}

export function deleteRow() {
  return {
    type: DELETE_ROW,
  }
}
