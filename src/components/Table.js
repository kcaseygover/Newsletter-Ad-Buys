import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton.js';

const Table = (props) => {
  console.log('in table:', props)

  return (

      <tr>
        <th>{props.publisher}</th>
        <th>{props.publication}</th>
        <th>{props.sponsorship}</th>
        <th>{props.publishDate}</th>
        <th>{props.cost}</th>
        <th><DeleteButton /></th>
      </tr>

  )
}

export default Table;
