import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Route,
  Link,
  HashRouter
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import NewsletterForm from '../../containers/NewsletterForm.js';
import AdBuysTable from '../../containers/AdBuysTable.js';

const history = createHistory();

// Get the current location.
const location = history.location

// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state)
  console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
  console.log(`The last navigation action was ${action}`)
})

// Use push, replace, and go to navigate around.
// history.push()
// history.goBack()

// To stop listening, call the function returned from listen().
unlisten()

export default class App extends Component {

  render() {
    return (
      <HashRouter history={history}>
      <div>
        <ul>
          <li><Link to="/">Newsletter Form</Link></li>
          <li><Link to="/table">Ad Buys Table</Link></li>
        </ul>
        <Route exact path="/" component={NewsletterForm} />
        <Route path="/table" component={AdBuysTable}/>
      </div>
    </HashRouter>
    );
  };

}
