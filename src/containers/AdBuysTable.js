import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '../components/Table.js';

class AdBuysTable extends React.PureComponent {
  render() {
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
        <Table />
      </table>

    )
  }
}

export default connect(null, null)(AdBuysTable);
