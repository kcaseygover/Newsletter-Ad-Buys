import React, { PropTypes } from 'react';

const Publisher = (props) => {
  const { onChangePublisher } = props;

  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select name="publisher" onChange={(e) => onChangePublisher(e.target.value)}>
        <option value="" disabled selected>Select...</option>
        <option value="php-weekly">PHP Weekly</option>
        <option value="laravel-news">Laravel News</option>
        <option value="cooperpress">Cooperpress</option>
      </select>
    </div>
  )
}

Publisher.propTypes = {
  onChangePublisher: PropTypes.func.isRequired,
}

export default Publisher;
