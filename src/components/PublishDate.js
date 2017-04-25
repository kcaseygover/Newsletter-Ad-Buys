import React from 'react';

const PublishDate = () => (
  <div>
    <label htmlFor="publishDate">Date Published: </label>
    <input
      type="date"
      name="publishDate"
      onChange={(e) => onChangePublishDate(e.target.value)}
    />
  </div>
)

export default PublishDate;
