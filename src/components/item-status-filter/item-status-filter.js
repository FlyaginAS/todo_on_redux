import React from 'react';
import { connect } from 'react-redux';
import { filterChanged } from '../../actions';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' },
];

const ItemStatusFilter = ({ filterChanged, filter }) => {
  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames =
      'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button
        key={name}
        type="button"
        onClick={() => filterChanged(name)}
        className={classNames}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

const mapStateToProps = ({ search: { filter } }) => {
  return {
    filter,
  };
};

const mapDispatchToProps = {
  filterChanged,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemStatusFilter);
