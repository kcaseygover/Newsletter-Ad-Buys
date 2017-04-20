import { CHANGE_PUBLISHER, ADD_AD_BUY } from '../actions/index.js';

const initialState = {
  ad: { publisher: '' },
};

function appReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case CHANGE_PUBLISHER:
      return {publisher: action.publisher}
    case ADD_AD_BUY:
      return {ad: action.ad}
    default:
      return state;
  }
}

export default appReducer;
