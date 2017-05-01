import React from 'react';
import data from '../../data';

const Sponsorship = ({ onChange }) => {

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
        onChange={onChange}
        >
        <option defaultValue >Select...</option>
        {
          publication === 'PHP Weekly' ? <option value={sponsorship}>{phpSponsorships}</option> :
          publication === 'Laravel News' ? <option value={sponsorship}>{laravelNewsSponsorships}</option> :
          publication === 'DB Weekly' ? {mappedDbWeeklySponsorships} :
          publication === 'Node Weekly' ? {mappedNodeWeeklySponsorships} :
          publication === 'Postgres Weekly' ? {mappedPgWeeklySponsorships} :
          <option></option>
        }
      </select>
    </div>
  )
}

export default Sponsorship;
