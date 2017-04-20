import React, { PropTypes } from 'react';
import { connect } from 'react-redux'

import { addAdBuy } from '../actions/index.js'

import Publisher from '../components/Publisher.js';
import DateAdded from '../components/DateAdded.js';
import PublishDate from '../components/PublishDate.js';
import Publication from '../components/Publication.js';
import Cost from '../components/Cost.js';
import Reach from '../components/Reach.js';
import Sponsorship from '../components/Sponsorship.js';

class NewsletterForm extends React.PureComponent {

  saveAdBuyHandler(e) {
    e.preventDefault();
    this.props.addAdBuy();
  }
  render() {


    return (
      <form>

        <Publisher/>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

NewsletterForm.propTypes = {

  
};

export default NewsletterForm;
