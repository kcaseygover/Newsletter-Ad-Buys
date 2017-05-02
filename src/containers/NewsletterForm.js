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
  changePublishDate,
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
    console.log('this.props.cost in form container?', this.props.cost, this.props);
    store.subscribe(() => {
      console.log('get state in newsletter form container', store.getState());
    });
    const {
      onChangeCost,
      onChangePublisher,
      onChangePublication,
      onChangeSponsorship,
      onChangePublishDate,
      cost,
      publisher,
      publication,
      publishDate,
      sponsorship,
      dispatch
    } = this.props;

let input;

    return (
      <form onSubmit={e => {
              e.preventDefault()
              dispatch(saveAdBuy())
              console.log("test submit: ", e.target.value)


            }}>
        <h1>Newsletter Ads Buy Tracking Form</h1>
        <Publisher
          publisher={this.props.publisher}
          onChange={(e) => {
            e.preventDefault()
            onChangePublisher(e.target.value)
            console.log("test select: ", e.target.value)
          }}
        />
        <Publication
          publication={this.props.publication}
          onChange={(e) => {
            e.preventDefault()
            onChangePublication(e.target.value)
            console.log("test select: ", e.target.value)
          }}
        />
        <Sponsorship
          sponsorship={this.props.sponsorship}
            onChange={(e) => {
              e.preventDefault()
              onChangeSponsorship(e.target.value)
              console.log("test select: ", e.target.value)
            }}
        />
        <Reach/>
        <Cost
          onChange={(e) => {
            onChangeCost(e.target.value)
            console.log("test input: ", e.target.value)
          }}
        />
        <PublishDate
          publishDate={this.props.publishDate}
          onChange={(e) => {
            e.preventDefault()
            onChangePublishDate(e.target.value)
            console.log("test input: ", e.target.value)
          }}
        />
        <DateAdded />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}



const mapStateToProps = (state) => ({
  cost: state.cost,
  publisher: state.publisher,
  publication: state.publication,
  sponsorship: state.sponsorship,
  publishDate: state.publishDate,
})

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCost: (cost) => dispatch(changeCost(cost)),
    onChangePublisher: (publisher) => dispatch(changePublisher(publisher)),
    onChangePublication: (publication) => dispatch(changePublication(publication)),
    onChangeSponsorship: (sponsorship) => dispatch(changeSponsorship(sponsorship)),
    onChangePublishDate: (publishDate) => dispatch(changePublishDate(publishDate)),
    dispatch,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterForm);
