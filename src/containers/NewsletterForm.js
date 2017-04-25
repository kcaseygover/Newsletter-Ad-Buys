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
import FruitSelector from '../../Fruit.js';


class NewsletterForm extends React.PureComponent {
  static propTypes = {
   onChangeCost: PropTypes.func,
   cost: PropTypes.string,
   dispatch: PropTypes.func,
   onChangePublisher: PropTypes.func,
  };


    // onSubmit={e => {
    //     e.preventDefault()
    //     dispatch(addAdBuy(input.value))
    //   }

  render() {
// console.log(store.getState());
  console.log('this.props in form container?', this.props);

    return (
      <form>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <Publisher
          onChangePublisher={this.props.onChangePublisher}
        />
        <Publication/>
        <Sponsorship />
        <Reach/>
        <Cost
          onChangeCost={this.props.cost}
        />
        <PublishDate/>
        <DateAdded />
        <FruitSelector name="World" />

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
    onChangeCost: (cost) => dispatch(changeCost(cost)),
    onChangePublisher: (publisher) => dispatch(changePublisher(publisher)),
    dispatch,
  }
};


// export default NewsletterForm;
export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
