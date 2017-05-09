import React from 'react';
import PropTypes from 'prop-types';
//this should probably be called onsubmit of form....


const DateAdded = (props) => {
  console.log("dateAdded", props.dateAdded)
  return (
    <div>
      <label htmlFor="dateNow">Click to Add Date Added -> </label>
      <input

        name="dateNow"
        value={props.dateAdded}
        onClick={props.onChangeDateAdded}
        readOnly
      />
    </div>
  )
}

export default DateAdded;
