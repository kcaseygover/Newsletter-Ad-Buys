import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Publisher = ({ onChange, publisher }) => {
  console.log('in publisher; publisher: ', publisher, 'onChange', onChange)

  const publishers = Object.keys(data.Publishers);

  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select
        name="publisher"
        onChange={onChange}>
        <option defaultValue >Select...</option>
        {publishers.map(publisher =>
          <option key={publisher.toString()}>{publisher}</option>
        )}
      </select>
    </div>
  )
}

export default Publisher;
