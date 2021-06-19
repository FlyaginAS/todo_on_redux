import React from 'react';
import { connect } from 'react-redux';
import {
  itemToggleDone,
  itemToggleImportant,
  itemDelete,
} from '../../actions';

import TodoListItem from '../todo-list-item/todo-list-item';

import './todo-list.css';

const TodoList = ({
  items,
  itemToggleDone,
  itemToggleImportant,
  itemDelete,
}) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onToggleImportant={() => itemToggleImportant(id)}
          onToggleDone={() => itemToggleDone(id)}
          onDelete={() => itemDelete(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list list-group">{elements}</ul>;
};

const mapStateToProps = ({ list: { items } }) => {
  return {
    items,
  };
};

const mapDispatchToProps = {
  itemToggleDone,
  itemToggleImportant,
  itemDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
