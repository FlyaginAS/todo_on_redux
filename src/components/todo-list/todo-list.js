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
  filter,
  search,
}) => {
  const filterItems = (items, filter) => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => !item.done);
    } else if (filter === 'done') {
      return items.filter((item) => item.done);
    }
  };

  const searchItems = (items, search) => {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
      );
    });
  };

  const visibleItems = searchItems(
    filterItems(items, filter),
    search
  );

  const elements = visibleItems.map((item) => {
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

const mapStateToProps = ({
  list: { items },
  search: { filter, input },
}) => {
  return {
    items,
    filter,
    search: input,
  };
};

const mapDispatchToProps = {
  itemToggleDone,
  itemToggleImportant,
  itemDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
