import React from 'react';

const Cost = () => (
  <div>
    <label htmlFor="cost">Cost: $ </label>
    <input type="number" name="cost" min="0" required/>
  </div>
)

export default Cost;
