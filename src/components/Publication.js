import React from 'react';
import data from '../../data';

const phpPublications = data.Publishers['PHP Weekly'].Publication;
const keys = Object.keys(phpPublications);
const mappedPhpPublications = keys.map(publication => <option key={publication.toString()}>{publication}</option>)


const laravelNewsPublications = data.Publishers['Laravel News'].Publication;
const keys1 = Object.keys(laravelNewsPublications);
const mappedLaravelNewsPublications = keys1.map(publication => <option key={publication.toString()}>{publication}</option>)


const cooperpressPublications = data.Publishers['Cooperpress'].Publication;
const keys2 = Object.keys(cooperpressPublications);
const mappedCooperpressPublications = keys2.map(publication => <option key={publication.toString()}>{publication}</option>)

let publisher;
const Publication = () => (
  <div>
    <label htmlFor="publication" >Publication: </label>
    <select
      name="publication"
      value="publication"
      onChange={(e) => onChangePublication(e.target.value)}
      >
      <option defaultValue >Select...</option>
      {
        publisher === 'PHP Weekly' ? {mappedPhpPublications} :
        publisher === 'Laravel News' ? {mappedLaravelNewsPublications} :
        publisher === 'Cooperpress' ? {mappedCooperpressPublications} :
        <option disabled></option>
      }
    </select>
  </div>
)

export default Publication;
