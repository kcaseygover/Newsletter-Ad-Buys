import { CHANGE_PUBLISHER, CHANGE_COST, ADD_AD_BUY, changeCost } from '../actions/index.js';

const initialState = {
  publisher: '',
  cost: '',
};


function appReducer(state = initialState, action) {
  console.log('state in reducers: ', state);
  switch (action.type) {
    case CHANGE_PUBLISHER:
      return {
        ...state,
        publisher: action.publisher
      }
    case CHANGE_COST:
      return {
        ...state,
        cost: action.cost
      }
    case ADD_AD_BUY:
      return {
        ...state,
        ad: action.ad
      }
    default:
      return state;
  }
}

export default appReducer;
