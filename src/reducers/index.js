import {
  CHANGE_PUBLISHER,
  CHANGE_PUBLICATION,
  CHANGE_SPONSORSHIP,
  CHASNGE_REACH,
  CHANGE_COST,
  CHANGE_PUBLISH_DATE,
  CHANGE_DATE_ADDED,
  SAVE_AD_BUY,
} from '../actions/index.js';

const initialState = {
  publisher: 'test',
  publication: 'test',
  sponsorship: 'test',
  reach: 'test',
  cost: 'test',
  publishDate: 'test',
  dateAdded: 'test',
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
    case 'CHANGE_REACH':
      return {
        ...state,
        reach: action.reach
      }
    case 'CHANGE_PUBLISH_DATE':
      return {
        ...state,
        publishDate: action.publishDate
      }
    case 'CHANGE_DATE_ADDED':
      return {
        ...state,
        dateAdded: action.dateAdded
      }
    case 'CHANGE_COST':
      return {
        ...state,
        cost: action.cost
      }
    case 'SAVE_AD_BUY':
      return {
        ...state,
        // publisher: '',
        // publication: '',
        // sponsorship: '',
        // reach: '',
        // cost: '',
        // publishDate: '',
        // dateAdded: '',
      }
    case 'DELETE_ROW':
      return {}
    default:
      return state;
  }
}

export default appReducer;
