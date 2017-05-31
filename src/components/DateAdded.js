import React from 'react';
import PropTypes from 'prop-types';
//this should probably be called onsubmit of form....

const DateAdded = (props) => {
  return (
    <div>
      <label htmlFor="dateNow">Add Today's date. Click here -> </label>
      <input
        name="dateNow"
        value={props.dateAdded}
        onClick={props.onChangeDateAdded}
        readOnly
        required
      />
    </div>
  )
}

export default DateAdded;
