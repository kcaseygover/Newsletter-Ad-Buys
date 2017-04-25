const CHANGE_PUBLISHER = 'CHANGE_PUBLISHER';
const ADD_AD_BUY = 'ADD_AD_BUY';
const CHANGE_COST = 'CHANGE_COST';


export function changePublisher(publisher) {
  return {
    type: CHANGE_PUBLISHER,
    payload: publisher,
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
