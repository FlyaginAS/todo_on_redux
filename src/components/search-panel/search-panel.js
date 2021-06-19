import React from 'react';
import { connect } from 'react-redux';
import { searchChanged } from '../../actions';

import './search-panel.css';

const SearchPanel = ({ search, searchChanged }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={search}
      onChange={(evt) => searchChanged(evt.target.value)}
    />
  );
};

const mapStateToProps = ({ search: { input } }) => {
  return {
    search: input,
  };
};

const mapDispatchToProps = {
  searchChanged,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
