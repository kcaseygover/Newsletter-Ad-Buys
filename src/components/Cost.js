import React from 'react';

const Cost = ({ onChange }) => {

console.log('in Cost onChange:', onChange)

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
