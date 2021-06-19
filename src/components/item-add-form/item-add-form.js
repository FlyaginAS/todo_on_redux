import React from 'react';
import { connect } from 'react-redux';
import { itemAdd, itemInputChange } from '../../actions';

import './item-add-form.css';

const ItemAddForm = ({ label, itemAdd, itemInputChange }) => {
  const onLabelChange = (evt) => {
    let valueInput = evt.target.value;

    itemInputChange(valueInput);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    itemAdd(label);
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        className="form-control new-todo-label"
        value={label}
        onChange={onLabelChange}
        placeholder="What needs to be done?"
      />

      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

const mapStateToProps = (store) => {
  return {
    label: store.addForm.label,
  };
};

const mapDispatchToProps = {
  itemAdd,
  itemInputChange,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemAddForm);
