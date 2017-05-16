import React from 'react';
import PropTypes from 'prop-types';

const PublishDate = (props) => {
  return (
    <div>
      <label htmlFor="publishDate">Date Published: </label>
      <input
        value={props.publishDate}
        type="date"
        name="publishDate"
        onChange={props.onChangePublishDate}
      />
    </div>
  )
}

PublishDate.propTypes = {
  onChangePublishDate: PropTypes.func.isRequired,
  publishDate: PropTypes.any,
}

export default PublishDate;
