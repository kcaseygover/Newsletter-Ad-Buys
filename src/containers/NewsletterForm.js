import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import store from '../store';

import {
  saveAdBuy,
  changeCost,
  changePublisher,
  changePublication,
  changeSponsorship,
  changeReach,
  changePublishDate,
  changeDateAdded,
} from '../actions/index.js'

import Publisher from '../components/Publisher.js';
import DateAdded from '../components/DateAdded.js';
import PublishDate from '../components/PublishDate.js';
import Publication from '../components/Publication.js';
import Cost from '../components/Cost.js';
import Reach from '../components/Reach.js';
import Sponsorship from '../components/Sponsorship.js';

class NewsletterForm extends React.PureComponent {
  // static propTypes = {
  //   dispatch: PropTypes.func,
  //   onChangeCost: PropTypes.func,
  //   onChangePublisher: PropTypes.func,
  //   onChangePublishDate: PropTypes.func,
  //   cost: PropTypes.string,
  //   publisher: PropTypes.string,
  // };

  render() {
// console.log(store.getState());
// console.log("test input: ", e.target.value)
    console.log('this.props in Newsletterform?', this.props.cost, this.props.onChangeCost);
    store.subscribe(() => {
      console.log('get state in newsletter form container', store.getState());
    });
    const {
      onChangeCost,
      onChangePublisher,
      onChangePublication,
      onChangeSponsorship,
      onChangeReach,
      onChangePublishDate,
      onChangeDateAdded,
      cost,
      publisher,
      publication,
      sponsorship,
      reach,
      dateAdded,
      dispatch
    } = this.props;

let today = new Date();
let input;
console.log('dateAdded', this.props.dateAdded)
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(saveAdBuy())
        console.log("test submit")
      }}>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <Publisher
          publisher={publisher}
          onChangePublisher={onChangePublisher}
        />
        <Publication
          publisher={publisher}
          publication={publication}
          onChangePublication={onChangePublication}
        />
        <Sponsorship
          sponsorship={sponsorship}
          onChangeSponsorship={onChangeSponsorship}
        />
        <Reach
          reach={reach}
          onChangeReach={onChangeReach}
        />
        <Cost
          cost={cost}
          onChangeCost={onChangeCost}
        />
        <PublishDate
          onChangePublishDate={onChangePublishDate}
        />
        <DateAdded
          dateAdded={today}
          onChangeDateAdded={onChangeDateAdded}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cost: state.cost,
    publisher: state.publisher,
    publication: state.publication,
    sponsorship: state.sponsorship,
    reach: state.reach,
    publishDate: state.publishDate,
    dateAdded: state.dateAdded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCost: (e) => dispatch(changeCost(e.target.value)),
    onChangePublisher: (e) => dispatch(changePublisher(e.target.value)),
    onChangePublication: (e) => dispatch(changePublication(e.target.value)),
    onChangeReach: (e) => dispatch(changeReach(e.target.value)),
    onChangeSponsorship: (e) => dispatch(changeSponsorship(e.target.value)),
    onChangePublishDate: (e) => dispatch(changePublishDate(e.target.value)),
    onChangeDateAdded: (e) => dispatch(changeDateAdded(e.target.value)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
