import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import store from '../../store';
import NewsletterForm from '../../containers/NewsletterForm.js';
import Fruit from '../../../Fruit.js';

// @connect()
export default class App extends Component {

  render() {
    console.log('app container index', this.props, this)
    store.subscribe(() => {
      console.log('get state in form container', store.getState());
    });
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Newsletter Form</Link></li>
            <li><Link to="/fruit">Fruit</Link></li>
          </ul>
          <Route exact path="/" component={NewsletterForm} />
          <Route path="/fruit" component={Fruit}/>
        </div>
      </Router>
    );
  };

}
