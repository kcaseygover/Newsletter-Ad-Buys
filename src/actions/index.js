const CHANGE_PUBLISHER = 'CHANGE_PUBLISHER';
const ADD_AD_BUY = 'ADD_AD_BUY';

export function changePublisher(publisher) {
  return {
    type: CHANGE_PUBLISHER,
    publisher,
  }
}

export function addAdBuy(ad) {
  return {
    type: ADD_AD_BUY,
    ad,
  }
}
