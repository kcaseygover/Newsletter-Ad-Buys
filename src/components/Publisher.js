import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Publisher = (props) => {
  const { onChangePublisher } = props;

  console.log('publisher props: ', props)

  const publishers = data.Publishers;
  const keys = Object.keys(publishers);

  const mappedPublishers = keys.map(publisher => <option>{publisher}</option>)

  return (
    <div>
      <label htmlFor="publisher">Publisher: </label>
      <select

        name="publisher"
        onChange={(e) => onChangePublisher(e.target.value)}>
        <option defaultValue >Select...</option>
        {mappedPublishers}
      </select>
    </div>
  )
}

Publisher.propTypes = {
  onChangePublisher: PropTypes.func,
}

export default Publisher;
