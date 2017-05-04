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
            <th>Publish Date</th>
            <th>Cost</th>
          </tr>
        </thead>
        <Table
          publisher={this.props.publisher}
          publication={this.props.publication}
          sponsorship={this.props.sponsorship}
          publishDate={this.props.publishDate}
          cost={this.props.cost}
        />
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
    publishDate: state.publishDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, null)(AdBuysTable);
