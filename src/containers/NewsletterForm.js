import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { addAdBuy, changeCost, changePublisher } from '../actions/index.js'

import Publisher from '../components/Publisher.js';
import DateAdded from '../components/DateAdded.js';
import PublishDate from '../components/PublishDate.js';
import Publication from '../components/Publication.js';
import Cost from '../components/Cost.js';
import Reach from '../components/Reach.js';
import Sponsorship from '../components/Sponsorship.js';

class NewsletterForm extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
    onChangeCost: PropTypes.func,
    onChangePublisher: PropTypes.func,
    cost: PropTypes.string,
    publisher: PropTypes.string,
  };


    // onSubmit={e => {
    //     e.preventDefault()
    //     dispatch(addAdBuy(input.value))
    //   }

  render() {
// console.log(store.getState());
  console.log('this.props in form container?', this.props);
const { newCost } = this.props;

    return (
      <form>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <Publisher

        />
        <Publication/>
        <Sponsorship />
        <Reach/>
        <Cost
          onChangeCost={newCost}
        />
        <PublishDate/>
        <DateAdded />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}



const mapStateToProps = (state) => ({
  cost: state.cost,
  publisher: state.publisher,
})

const mapDispatchToProps = (dispatch) => {
  return {
    newCost: (cost) => dispatch(changeCost(cost)),
    onChangePublisher: (publisher) => dispatch(changePublisher(publisher)),
  }
};


// export default NewsletterForm;
export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
