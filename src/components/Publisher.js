import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Publisher = ({ onChange, publisher }) => {
  console.log('in publisher; publisher: ', publisher, 'onChange', onChange)

  const publishers = data.Publishers;
  const keys = Object.keys(publishers);
  const mappedPublishers = keys.map(publisher => <option key={publisher.toString()}>{publisher}</option>)

  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select
        name="publisher"
        onChange={onChange}>
        <option defaultValue >Select...</option>
        {mappedPublishers}
      </select>
    </div>
  )
}

export default Publisher;
