import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Reach = (props) => {
  const publisher = props.publisher;
  const publication = props.publication;
  return (
    <div>
      <label htmlFor="reach">Reach: </label>
        <select
          value={props.reach}
          name="reach"
          onChange={props.onChangeReach}>
          <option defaultValue >Select...</option>
          { publisher && publication ?
            <option>{data.Publishers[publisher].Publication[publication].Reach}</option>
            : null
          }
        </select>
    </div>
  )
}

export default Reach;
