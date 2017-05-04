import {
  CHANGE_PUBLISHER,
  CHANGE_PUBLICATION,
  CHANGE_SPONSORSHIP,
  CHANGE_COST,
  CHANGE_PUBLISH_DATE,
  SAVE_AD_BUY,
} from '../actions/index.js';

const initialState = {
  publisher: 'publisher',
  publication: 'a',
  sponsorship: 'a',
  reach: '',
  cost: '5.00',
  publishDate: 'a',
  dateAdded: '',
  saveAd: false,
  save_error: false,
};


function appReducer(state = initialState, action) {
  console.log('state in reducers: ', state, 'action in reducers', action);
  switch (action.type) {
    case 'CHANGE_PUBLISHER':
      return {
        ...state,
        publisher: action.publisher
      }
    case 'CHANGE_PUBLICATION':
      return {
        ...state,
        publication: action.publication
      }
    case 'CHANGE_SPONSORSHIP':
      return {
        ...state,
        sponsorship: action.sponsorship
      }
    case 'CHANGE_PUBLISH_DATE':
      return {
        ...state,
        publishDate: action.publishDate
      }
    case 'CHANGE_COST':
      return {
        ...state,
        cost: action.cost
      }

    case 'SAVE_AD_BUY':
      return {
        ...state,
        saveAd: true
      }

    default:
      return state;
  }
}

export default appReducer;
