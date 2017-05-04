import React from 'react';
import PropTypes from 'prop-types';

const Cost = (props) => {

console.log('in Cost onChangeCost:', props.cost, props.onChangeCost)

  return (
    <div>
      <label htmlFor="cost">Cost: $ </label>
      <input
        type="text"
        name="cost"
        onChange={props.onChangeCost}
      />
    </div>
  )
}

Cost.propTypes = {
  onChangeCost: PropTypes.func.isRequired,
  cost: PropTypes.string,
}

export default Cost;
