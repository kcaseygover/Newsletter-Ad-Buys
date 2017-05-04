import React from 'react';
import PropTypes from 'prop-types';


const Table = (props) => {
  console.log('in table:', props)

  return (
    <tbody>
      <tr>
        <th>{props.publisher}</th>
        <th>{props.publication}</th>
        <th>{props.sponsorship}</th>
        <th>{props.publishDate}</th>
        <th>{props.cost}</th>
      </tr>
    </tbody>
  )
}

export default Table;
