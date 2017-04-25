import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Publisher = (props) => {
  const { onChangePublisher, publisher } = props;

  console.log('publisher props: ', props)

  const publishers = data.Publishers;
  const keys = Object.keys(publishers);
  const mappedPublishers = keys.map(publisher => <option key={publisher.toString()}>{publisher}</option>)

  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select
        name="publisher"
        value={publisher}
        onChange={(e) => onChangePublisher(e.target.value)}>
        <option defaultValue >Select...</option>
        {mappedPublishers}
      </select>
    </div>
  )
}

Publisher.propTypes = {
  onChangePublisher: PropTypes.func,
  publisher: PropTypes.string,
}

export default Publisher;
