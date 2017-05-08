import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = () => {
  return (
    <button>Delete</button>
  )
}

DeleteButton.propTypes = {

}

export default DeleteButton;

// Deleting data recordsEDIT
// Web Storage also provides a couple of simple methods to remove data. We don't use these in our demo, but they are very simple to add to your project:
//
// Storage.removeItem() takes a single argument — the key of the data item you want to remove — and removes it from the storage object for that domain.
// Storage.clear() takes no arguments, and simply empties the entire storage object for that domain.
