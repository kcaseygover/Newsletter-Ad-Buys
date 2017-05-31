import React from 'react';
import PropTypes from 'prop-types';
import data from '../../data';

const Sponsorship = (props) => {
  const publisher = props.publisher;
  const publication = props.publication;
  return (
    <div>
      <label htmlFor="sponsorship">Sponsorship: </label>
      <select
        value={props.sponsorship}
        name="sponsorship"
        onChange={props.onChangeSponsorship}>
        <option defaultValue >Select...</option>
        { publisher && publication ?
          data.Publishers[publisher].Publication[publication].Sponsorship.map(sponsorship =>
            <option key={sponsorship.toString()}>{sponsorship}</option>)
          : null
        }
      </select>
    </div>
  )
}

Sponsorship.propTypes = {
  onChangeSponsorship: PropTypes.func.isRequired,
  sponsorship: PropTypes.string,
}

export default Sponsorship;
