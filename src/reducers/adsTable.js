import { loadState } from '../../localStorage';
import { deleteRow } from '../actions/index.js';

import {
  DELETE_ROW,
  DELETE_ROW_SUCCESS,
  DELETE_ROW_ERROR,
  CLEAR_TABLE,
  CLEAR_TABLE_SUCCESS,
  CLEAR_TABLE_ERROR,
} from '../actions/index.js';

const initialState = {
  loading: false,
  error: false,
  // ads: loadState(),
}

function adsTable(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_ROW':
      console.log('delete row reducer', state)
      return {
        ...state,
        loading: true,
      }

      // const rows = state.ads;
      // return rows.filter(row =>{
      //   console.log('inside filter', row.dateAdded, action.dateAdded);
      //   row.dateAdded !== action.dateAdded;
      //   console.log('rows after delete', rows);
      //})
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

export default adsTable;
