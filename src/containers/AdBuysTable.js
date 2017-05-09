import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../components/Table.js';

class AdBuysTable extends React.PureComponent {
  render() {
    console.log('intable container: ', this.props)

    return (

      <table>
        <thead>
          <tr>
            <th>Publisher</th>
            <th>Publication</th>
            <th>Sponsorship</th>
            <th>Reach</th>
            <th>Cost</th>
            <th>Publish Date</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>



          <Table
            publisher={this.props.publisher}
            publication={this.props.publication}
            sponsorship={this.props.sponsorship}
            reach={this.props.reach}
            cost={this.props.cost}
            publishDate={this.props.publishDate}
            dateAdded={this.props.dateAdded}
          />

        </tbody>
      </table>

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

  };
};

export default connect(mapStateToProps, null)(AdBuysTable);
