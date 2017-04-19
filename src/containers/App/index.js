import React, { Component } from 'react';

import Publisher from '../../components/Publisher.js';
import DateAdded from '../../components/DateAdded.js';
import PublishDate from '../../components/PublishDate.js';
import Publication from '../../components/Publication.js';
import Cost from '../../components/Cost.js';
import Reach from '../../components/Reach.js';
import Sponsorship from '../../components/Sponsorship.js';


export default class App extends Component {
  render() {
    console.log('in app container index')
    return (
      <div>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <DateAdded />
        <PublishDate />
        <Publisher />
        <Publication />
        <Sponsorship />
        <Reach />
        <Cost />
      </div>
    );
  };

}
