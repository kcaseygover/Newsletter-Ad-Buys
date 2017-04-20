import React from 'react';

import Publisher from '../components/Publisher.js';
import DateAdded from '../components/DateAdded.js';
import PublishDate from '../components/PublishDate.js';
import Publication from '../components/Publication.js';
import Cost from '../components/Cost.js';
import Reach from '../components/Reach.js';
import Sponsorship from '../components/Sponsorship.js';

class NewsletterForm extends React.PureComponent {

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit();
  }

  render() {
    // const { onSubmit } = this.props;

    return (
      <form>
        <DateAdded />
        <Publisher />
        <Publication />
        <Sponsorship />
        <Reach />
        <PublishDate />
        <Cost />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

NewsletterForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,

};

export default NewsletterForm;
