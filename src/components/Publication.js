import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

const Publication = (props) => {
  const publisher = props.publisher;
  return (
    <div>
      <label htmlFor="publication" >Publication: </label>
      <select
        value={props.publication}
        name="publication"
        onChange={props.onChangePublication}
        >
        <option defaultValue >Select...</option>
        { publisher ?
          (Object.keys(data.Publishers[publisher].Publication)).map(publication =>
          <option key={publication.toString()}>{publication}</option>
          ) : null
        }
      </select>
    </div>
  )
}

Publication.propTypes = {
  onChangePublication: PropTypes.func.isRequired,
  publication: PropTypes.string,
  publisher: PropTypes.string,
}

export default Publication;
