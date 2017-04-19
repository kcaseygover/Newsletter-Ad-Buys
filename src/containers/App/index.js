import React, { Component } from 'react';

import Publisher from '../../components/Publisher.js';

export default class App extends Component {
  render() {
    console.log('in app container index')
    return (
      <div>
      <h1>Newsletter Ads Buy Tracking Form</h1>
      <Publisher />
    </div>
    );
  };

}
