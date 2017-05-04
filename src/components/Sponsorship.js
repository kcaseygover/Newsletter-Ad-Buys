import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

const Sponsorship = (props) => {

  const phpSponsorships = data.Publishers['PHP Weekly'].Publication['PHP Weekly'].Sponsorship;

  const laravelNewsSponsorships = data.Publishers['Laravel News'].Publication['Laravel News'].Sponsorship;

  const dbWeeklySponsorships = data.Publishers['Cooperpress'].Publication['DB Weekly'].Sponsorship;
  const mappedDbWeeklySponsorships = dbWeeklySponsorships.map(sponsorship => <option key={sponsorship.toString()}>{sponsorship}</option>)

  const nodeWeeklySponsorships = data.Publishers['Cooperpress'].Publication['Node Weekly'].Sponsorship;
  const mappedNodeWeeklySponsorships = nodeWeeklySponsorships.map(sponsorship => <option key={sponsorship.toString()}>{sponsorship}</option>)

  const pgWeeklySponsorships = data.Publishers['Cooperpress'].Publication['Postgres Weekly'].Sponsorship;
  const mappedPgWeeklySponsorships = pgWeeklySponsorships.map(sponsorship => <option key={sponsorship.toString()}>{sponsorship}</option>)

  let publication;

  return (
    <div>
      <label htmlFor="sponsorship">Sponsorship: </label>
      <select
        name="sponsorship"
        onChange={props.onChangeSponsorship}
        >
        <option defaultValue >Select...</option>
        {
          <option>{phpSponsorships}</option> ||
          <option>{laravelNewsSponsorships}</option> ||
          mappedDbWeeklySponsorships ||
          mappedNodeWeeklySponsorships ||
          mappedPgWeeklySponsorships
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
