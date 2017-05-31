import React from 'react';
import PropTypes from 'prop-types';

const Cost = (props) => {
  return (
    <div>
      <label htmlFor="cost">Cost: $ </label>
      <input
        required
        type="text"
        name="cost"
        value={props.cost}
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
