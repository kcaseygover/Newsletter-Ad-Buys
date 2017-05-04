import React from 'react';

import data from '../../data';

const phpWeeklyReach = data.Publishers['PHP Weekly'].Publication['PHP Weekly'].Reach;
const laravelNewsReach = data.Publishers['Laravel News'].Publication['Laravel News'].Reach;
const dbWeeklyReach = data.Publishers['Cooperpress'].Publication['DB Weekly'].Reach;
const nodeWeeklyReach = data.Publishers['Cooperpress'].Publication['Node Weekly'].Reach;
const pgWeeklyReach = data.Publishers['Cooperpress'].Publication['Postgres Weekly'].Reach;

const Reach = () => (
  <div>
    <label htmlFor="reach">Reach: </label>
    <input
      name="reach"
      value={phpWeeklyReach || laravelNewsReach || dbWeeklyReach || nodeWeeklyReach || pgWeeklyReach}
      readOnly
    />
  </div>
)

export default Reach;
