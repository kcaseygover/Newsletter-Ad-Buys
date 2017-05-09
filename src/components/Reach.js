import React from 'react';
import PropTypes from 'prop-types';

import data from '../../data';

const phpWeeklyReach = data.Publishers['PHP Weekly'].Publication['PHP Weekly'].Reach;
const laravelNewsReach = data.Publishers['Laravel News'].Publication['Laravel News'].Reach;
const dbWeeklyReach = data.Publishers['Cooperpress'].Publication['DB Weekly'].Reach;
const nodeWeeklyReach = data.Publishers['Cooperpress'].Publication['Node Weekly'].Reach;
const pgWeeklyReach = data.Publishers['Cooperpress'].Publication['Postgres Weekly'].Reach;

const Reach = (props) => {
  return (
    <div>
      <label htmlFor="reach">Reach: </label>
        <select
          name="reach"
          onChange={props.onChangeReach}>
          <option defaultValue >Select...</option>
          <option defaultValue >{phpWeeklyReach || laravelNewsReach || dbWeeklyReach || nodeWeeklyReach || pgWeeklyReach}</option>
          <option defaultValue >{laravelNewsReach || dbWeeklyReach || nodeWeeklyReach || pgWeeklyReach}</option>
        </select>
    </div>
  )
}

export default Reach;
