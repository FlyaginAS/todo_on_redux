import React from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div className="todo-app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList />
      <ItemAddForm />
    </div>
  );
};

// class App extends Component {

//   onFilterChange = (filter) => {
//     this.setState({ filter });
//   };

//   onSearchChange = (search) => {
//     this.setState({ search });
//   };

//   filterItems(items, filter) {
//     if (filter === 'all') {
//       return items;
//     } else if (filter === 'active') {
//       return items.filter((item) => !item.done);
//     } else if (filter === 'done') {
//       return items.filter((item) => item.done);
//     }
//   }

//   searchItems(items, search) {
//     if (search.length === 0) {
//       return items;
//     }

//     return items.filter((item) => {
//       return (
//         item.label.toLowerCase().indexOf(search.toLowerCase()) > -1
//       );
//     });
//   }

//   render() {
//     const { items, filter, search } = this.props;

//     const visibleItems = this.searchItems(
//       this.filterItems(items, filter),
//       search
//     );

//     return (
//       <div className="todo-app">
//         <AppHeader />
//         <div className="search-panel d-flex">
//           <SearchPanel />
//           <ItemStatusFilter />
//         </div>

//         <TodoList
//         // items={visibleItems}
//         // onToggleImportant={this.onToggleImportant}
//         // onToggleDone={this.onToggleDone}
//         // onDelete={this.onDelete}
//         />

//         <ItemAddForm />
//       </div>
//     );
//   }
// }

const mapStateToProps = ({
  list: { items },
  search: { input, filter },
}) => {
  return {
    items,
    filter,
    search: input,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(App);
