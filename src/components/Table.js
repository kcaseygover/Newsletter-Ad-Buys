import React from 'react';
import PropTypes from 'prop-types';

import { loadState } from '../../localStorage';
import store from '../store'
import DeleteRowButton from './DeleteRowButton.js';

const Table = (props) => {
  const rows = props.rows;
  return (
    <tbody>
      { rows.map((row, index) =>
        <tr key={index}>
          <td>{row.publisher}</td>
          <td>{row.publication}</td>
          <td>{row.sponsorship}</td>
          <td>{row.reach}</td>
          <td>{row.cost}</td>
          <td>{row.publishDate}</td>
          <td>{row.dateAdded}</td>
          <td>
            <DeleteRowButton
              dateAdded={row.dateAdded}
              onDeleteRow={props.onDeleteRow}
            />
          </td>
        </tr>
      )}
    </tbody>
  )
}

Table.propTypes = {
  onDeleteRow: PropTypes.any,
  dateAdded: PropTypes.any,
}

export default Table;
