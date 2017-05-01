import React from 'react';

const PublishDate = ({ onChange }) => {
  console.log('in date  ', onChange)
  return (
    <div>
      <label htmlFor="publishDate">Date Published: </label>
      <input
        type="date"
        name="publishDate"
        onChange={onChange}
      />
    </div>
  )
}

export default PublishDate;
