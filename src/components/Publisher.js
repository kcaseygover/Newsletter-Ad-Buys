import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

const Publisher = (props) => {
  const publishers = Object.keys(data.Publishers);
  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select
        value={props.publisher}
        name="publisher"
        onChange={props.onChangePublisher}>
        <option defaultValue >Select...</option>
        {publishers.map(publisher =>
          <option key={publisher.toString()}>{publisher}</option>
        )}
      </select>
    </div>
  )
}

Publisher.propTypes = {
  onChangePublisher: PropTypes.func.isRequired,
  publisher: PropTypes.string,
}

export default Publisher;
