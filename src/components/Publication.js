import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

const Publication = (props) => {

  let key;
  let key2;
  function findPublication (obj) {
    for (key in obj) {
      console.log(Object.keys(obj[key]))
      let i;
      for (i = 0; i < Object.keys(obj[key]).length; i++) {
        if (Object.keys(obj[key])[i] === props.publisher) {
          console.log('publisher matches')
          console.log(Object.keys(obj[key])[i])
          console.log(obj[key])
          for (key2 in obj[key]) {
            console.log(Object.keys(obj[key][key2].Publication))
          }
          } else {
            console.log('try again')
          }
        }
      }
    }
findPublication(data);

  const publishers = Object.keys(data.Publishers);

  console.log('in publication', 'props.publisher', props.publisher, 'data.publishers', publishers[0] )
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
        onChange={props.onChangePublication}
        >
        <option defaultValue >Select...</option>
        { props.publisher === publishers[1] ?
          mappedPhpPublications ||
          mappedLaravelNewsPublications ||
          mappedCooperpressPublications :
          <option></option>
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
