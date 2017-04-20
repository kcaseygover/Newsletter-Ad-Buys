import React from 'react';

const Publisher = () => (
  <div>
    <label htmlFor="publisher">Publisher: </label>
    <select name="publisher">
      <option value="" disabled selected>Select...</option>
      <option value="php-weekly">PHP Weekly</option>
      <option value="laravel-news">Laravel News</option>
      <option value="cooperpress">Cooperpress</option>
    </select>
  </div>
)

export default Publisher;
