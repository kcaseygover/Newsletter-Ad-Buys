import React from 'react';

let today = new Date();

const DateAdded = () => (
  <div>
    <label htmlFor="dateNow">Date Added: </label>
    <input name="dateNow" value={today} readOnly />
  </div>
)

export default DateAdded;
