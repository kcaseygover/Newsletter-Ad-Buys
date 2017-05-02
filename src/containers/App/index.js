import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import store from '../../store';
import NewsletterForm from '../../containers/NewsletterForm.js';
import AdBuysTable from '../../containers/AdBuysTable.js';

export default class App extends Component {

  render() {
    console.log('app container index', this.props, this)
    store.subscribe(() => {
      console.log('get state in app container', store.getState());
    });
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Newsletter Form</Link></li>
            <li><Link to="/table">Ad Buys Table</Link></li>
          </ul>
          <Route exact path="/" component={NewsletterForm} />
          <Route path="/table" component={AdBuysTable}/>
        </div>
      </Router>
    );
  };

}
