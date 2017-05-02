import {
  CHANGE_PUBLISHER,
  CHANGE_PUBLICATION,
  CHANGE_SPONSORSHIP,
  CHANGE_PUBLISH_DATE,
  CHANGE_COST,
  SAVE_AD_BUY
} from '../actions/index.js';

const initialState = [{
  publisher: 'publisher',
  publication: '',
  sponsorship: '',
  publishDate: '',
  cost: '5.00',
}];


function appReducer(state = initialState, action) {
  console.log('state in reducers: ', state, 'action in reducers', action);
  switch (action.type) {
    case CHANGE_PUBLISHER:
      return {
        ...state,
        publisher: action.publisher
      }
    case CHANGE_PUBLICATION:
      return {
        ...state,
        publication: action.publication
      }
    case CHANGE_SPONSORSHIP:
      return {
        ...state,
        sponsorship: action.sponsorship
      }
    case CHANGE_PUBLISH_DATE:
      return {
        ...state,
        publishDate: action.publishDate
      }
    case CHANGE_COST:
      return Object.assign({}, state, {
        'cost': action.cost
      })

    case SAVE_AD_BUY:
      return [
        {
          publisher: action.publisher,
          publication: action.publication,
          sponsorship: action.sponsorship,
          publishDate: action.publishDate,
          cost: action.cost,
        },
        ...state
      ];

    default:
      return state;
  }
}

export default appReducer;
