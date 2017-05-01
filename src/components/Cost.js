import React from 'react';
import PropTypes from 'prop-types';

const Cost = ({ onChange, cost }) => {
  // const { onChangeCost } = props;
console.log('in Cost:', cost, 'onChange:', onChange)

  return (
    <div>
      <label htmlFor="cost">Cost: $ </label>
      <input
        type="text"
        name="cost"
        onChange={onChange}
      />
    </div>
  )
}

export default Cost;
