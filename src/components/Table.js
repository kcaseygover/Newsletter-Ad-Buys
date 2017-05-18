import React from 'react';
import PropTypes from 'prop-types';
import { loadState } from '../../localStorage';
import DeleteButton from './DeleteButton.js';

const Table = (props) => {
  console.log('props in table', props)

console.log('loadState',loadState())
let rows = loadState();
console.log('rows', rows)
rows.map(row => {
  console.log('row', row, 'row.publisher', row.publisher)
})
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
          <td><DeleteButton /></td>
        </tr>
      )}
    </tbody>
  )
}

export default Table;
