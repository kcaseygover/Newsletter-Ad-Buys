import React from 'react';
import PropTypes from 'prop-types';

const Cost = ({ onChangeCost, cost }) => {
  // const { onChangeCost } = props;
console.log('in Cost:', cost, 'onChange:', onChangeCost)

  return (
    <div>
      <label htmlFor="cost">Cost: $ </label>
      <input
        type="text"
        name="cost"
        onChange={onChangeCost}
        value={cost}
        required/>
    </div>
  )
}

// Cost.propTypes = {
//   cost: PropTypes.string,
//   onChangeCost: PropTypes.func,
// };

export default Cost;
