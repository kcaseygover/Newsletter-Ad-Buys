import React from 'react';

const Publisher = () => (
  <select name="publisher">
    <option value="" disabled selected hidden>Publisher</option>
    <option value="php-weekly">PHP Weekly</option>
    <option value="laravel-news">Laravel News</option>
    <option value="cooperpress">Cooperpress</option>
  </select>
)

export default Publisher;
