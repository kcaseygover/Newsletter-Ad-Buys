import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveState, loadState } from '../../localStorage';
import store from '../store'
import { deleteRow, clearTable } from '../actions/index.js';
import Table from '../components/Table.js';
import ClearTableButton from '../components/ClearTableButton';

class AdBuysTable extends React.PureComponent {


  render() {
    let rows = loadState();
    return (
      <div>
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
          <Table
            rows={rows}
            onDeleteRow={this.props.onDeleteRow}
          />
        </table>
        <ClearTableButton
          onClearTable={this.props.onClearTable}>Clear Table
        </ClearTableButton>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dateAdded: state.dateAdded,
    rows: store.getState(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteRow: (dateAdded) => dispatch(deleteRow(dateAdded)),
    onClearTable: () => dispatch(clearTable()),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdBuysTable);
