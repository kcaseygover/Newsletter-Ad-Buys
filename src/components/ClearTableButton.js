import React from 'react';
import PropTypes from 'prop-types';

const ClearTableButton = (props) => {
  return (
    <button
      onClick={props.onClearTable}>Clear Table
    </button>
  )
}

ClearTableButton.propTypes = {
  onClearTable: PropTypes.any,
}

export default ClearTableButton;
