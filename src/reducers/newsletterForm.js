import {
  CHANGE_PUBLISHER,
  CHANGE_PUBLICATION,
  CHANGE_SPONSORSHIP,
  CHASNGE_REACH,
  CHANGE_COST,
  CHANGE_PUBLISH_DATE,
  CHANGE_DATE_ADDED,
  SAVE_AD_BUY,
  SAVE_AD_BUY_SUCCESS,
  SAVE_AD_BUY_ERROR,
  DELETE_ROW,
  DELETE_ROW_SUCCESS,
  DELETE_ROW_ERROR,
  CLEAR_TABLE,
  CLEAR_TABLE_SUCCESS,
  CLEAR_TABLE_ERROR,
} from '../actions/index.js';

import store from '../store';

const initialState = {
  publisher: '',
  publication: '',
  sponsorship: '',
  reach: '',
  cost: '',
  publishDate: '',
  dateAdded: '',
  loading: false,
  error: false,
};


function appReducer(state = initialState, action) {

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
        loading: true
      }
    case 'SAVE_AD_BUY_SUCCESS':
      return {
        ...state,
        loading: false,
        publisher: '',
        publication: '',
        sponsorship: '',
        reach: '',
        cost: '',
        publishDate: '',
        dateAdded: '',
      }
    case 'SAVE_AD_BUY_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'DELETE_ROW':
      const rows = store.getState();
      return rows.filter(row =>{
        console.log('inside filter', row.dateAdded, action.dateAdded)
        row.dateAdded !== action.dateAdded
        console.log('rows after delete', rows)
      }
    )

    case 'DELETE_ROW_SUCCESS':
      return {
        ...state,
        loading: false,
      }
    case 'DELETE_ROW_ERROR':
      return {
        ...state,
        error: error.action,
      }
    case 'CLEAR_TABLE':
      return {
        ...state,
        loading: true,
      }
    case 'CLEAR_TABLE_SUCCESS':
      return {
        ...state,
        loading: false,
      }
    case 'CLEAR_TABLE_ERROR':
      return {
        ...state,
        error: error.action,
      }
    default:
      return state;
  }
}

export default appReducer;
