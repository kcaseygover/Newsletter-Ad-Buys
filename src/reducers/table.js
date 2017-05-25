import { loadState } from '../../localStorage';
import { deleteRow } from '../actions/index.js';

const initialState = localStorage.getItem('ad');


function tableReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_ROW':
      console.log('delete row reducer', state)
      return state.filter(row =>
          row.dateAdded !== action.dateAdded
        )
    // case 'DELETE_ROW_SUCCESS':
    //   return {
    //     ...state,
    //     loading: false,
    //   }
    // case 'DELETE_ROW_ERROR':
    //   return {
    //     ...state,
    //     error: error.action,
    //   }
    case 'CLEAR_TABLE':
      return {
        ...state,
      }
    // case 'CLEAR_TABLE_SUCCESS':
    //   return {
    //     ...state,
    //     loading: false,
    //   }
    // case 'CLEAR_TABLE_ERROR':
    //   return {
    //     ...state,
    //     error: error.action,
    //   }
    default:
      return state;
  }
}

export default tableReducer;
