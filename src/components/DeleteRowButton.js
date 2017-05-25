import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = (props) => {
  console.log('delete button', props)
  return (
    <button
      onClick={(e) => {console.log('props in onclick', props);
      props.onDeleteRow(props.dateAdded)}}
      >
      Delete
    </button>
  )
}

DeleteButton.propTypes = {
  onDeleteRow: PropTypes.any,
  dateAdded: PropTypes.any,
}

export default DeleteButton;
