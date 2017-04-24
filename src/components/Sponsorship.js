import React from 'react';
import data from '../../data';

const phpSponsorships = data.Publishers['PHP Weekly'].Publication['PHP Weekly'].Sponsorship;

const laravelNewsSponsorships = data.Publishers['Laravel News'].Publication['Laravel News'].Sponsorship;

const dbWeeklySponsorships = data.Publishers['Cooperpress'].Publication['DB Weekly'].Sponsorship;
const mappedDbWeeklySponsorships = dbWeeklySponsorships.map(sponsorship => <option>{sponsorship}</option>)

const nodeWeeklySponsorships = data.Publishers['Cooperpress'].Publication['Node Weekly'].Sponsorship;
const mappedNodeWeeklySponsorships = nodeWeeklySponsorships.map(sponsorship => <option>{sponsorship}</option>)

const pgWeeklySponsorships = data.Publishers['Cooperpress'].Publication['Postgres Weekly'].Sponsorship;
const mappedPgWeeklySponsorships = pgWeeklySponsorships.map(sponsorship => <option>{sponsorship}</option>)

const Sponsorship = () => (
  <div>
    <label htmlFor="sponsorship">Sponsorship: </label>
    <select
      name="sponsorship"
      onChange={(e) => onChangeSponsorship(e.target.value)}
      >
      <option defaultValue >Select...</option>
      <option >{phpSponsorships}</option>
      <option >{laravelNewsSponsorships}</option>
      {mappedDbWeeklySponsorships}
      {mappedNodeWeeklySponsorships}
      {mappedPgWeeklySponsorships}
    </select>
  </div>
)

export default Sponsorship;
