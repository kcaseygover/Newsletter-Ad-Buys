import React from 'react';

const Sponsorship = () => (
  <div>
    <label htmlFor="sponsorship">Sponsorship: </label>
    <select name="sponsorship">
      <option value="" disabled selected>Select...</option>
      <option value="primary-sponsor">Primary Sponsor</option>
      <option value="sponsored-link" href="#">Sponsored Link</option>
    </select>
  </div>
)

export default Sponsorship;
