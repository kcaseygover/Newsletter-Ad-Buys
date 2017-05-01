const CHANGE_PUBLISHER = 'CHANGE_PUBLISHER';
const ADD_AD_BUY = 'ADD_AD_BUY';
const CHANGE_COST = 'CHANGE_COST';
const CHANGE_PUBLICATION = 'CHANGE_PUBLICATION';
const CHANGE_SPONSORSHIP = 'CHANGE_SPONSORSHIP';
const CHANGE_PUBLISH_DATE = 'CHANGE_PUBLISH_DATE';

export function changePublisher(publisher) {
  return {
    type: CHANGE_PUBLISHER,
    publisher,
  }
}

export function addAdBuy() {
  return {
    type: ADD_AD_BUY,

  }
}

export function changeCost(cost) {
  return {
    type: CHANGE_COST,
    cost,
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

export function changePublishDate(publishDate) {
  return {
    type: CHANGE_PUBLISH_DATE,
    publishDate,
  }
}
