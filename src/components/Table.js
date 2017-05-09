import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from './DeleteButton.js';

const Table = (props) => {
  console.log('in table:', props)
  console.log('in table, get items',JSON.parse(localStorage.getItem('state')), localStorage.getItem('state'));
const items = [];
// items.push(JSON.parse(localStorage.getItem('state')));
let Obj = JSON.parse(localStorage.getItem('state'));
for(let key in Obj) {
  items.push(Obj[key])
}
console.log("items", items, JSON.parse(localStorage.getItem('state')))
{/* <tr>
  {items.map(item => <th key={item.toString()}>{item}</th>

)}
</tr> */}
  return (

      <tr>
        <th>{props.publisher}</th>
        <th>{props.publication}</th>
        <th>{props.sponsorship}</th>
        <th>{props.reach}</th>
        <th>{props.publishDate}</th>
        <th>{props.cost}</th>
        <th>{props.dateAdded}</th>
        <th><DeleteButton /></th>
      </tr>

  )
}

export default Table;
