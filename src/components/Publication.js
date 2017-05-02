import React from 'react';
import data from '../../data';


const Publication = ({ onChange, publication }) => {

  const phpPublications = Object.keys(data.Publishers['PHP Weekly'].Publication);
  const mappedPhpPublications = phpPublications.map(publication =>
    <option key={publication.toString()}>{publication}</option>
  )

  const laravelNewsPublications = Object.keys(data.Publishers['Laravel News'].Publication);
  const mappedLaravelNewsPublications = laravelNewsPublications.map(publication =>
    <option key={publication.toString()}>{publication}</option>
  )

  const cooperpressPublications = Object.keys(data.Publishers['Cooperpress'].Publication);
  const mappedCooperpressPublications = cooperpressPublications.map(publication =>
    <option key={publication.toString()}>{publication}</option>
  )

  return (
    <div>
      <label htmlFor="publication" >Publication: </label>
      <select
        name="publication"
        onChange={onChange}
        >
        <option defaultValue >Select...</option>
        {
          mappedPhpPublications || mappedLaravelNewsPublications || mappedCooperpressPublications
        }
      </select>
    </div>
  )
}

export default Publication;
