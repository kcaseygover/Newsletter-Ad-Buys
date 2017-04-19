import React from 'react';

const Publication = () => (
  <div>
    <label htmlFor="publication">Publication: </label>
    <select name="publication">
      <option value="" disabled selected hidden>Select...</option>
      <option value="php-weekly">PHP Weekly</option>
      <option value="laravel-news">Laravel News</option>
      <option value="db-weekly">DB Weekly</option>
      <option value="node-weekly">Node Weekly</option>
      <option value="postgres-weekly">Postgres Weekly</option>
    </select>
  </div>
)

export default Publication;
