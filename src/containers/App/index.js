import React, { Component } from 'react';

import NewsletterForm from '../../containers/NewsletterForm.js';


export default class App extends Component {
  render() {
    console.log('in app container index')
    return (
      <div>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <NewsletterForm />
      </div>
    );
  };

}
