const searchPanelReducer = (state, action) => {
  if (state === undefined) {
    return {
      search: 'searchDefault',
    };
  }

  switch (action.type) {
    case 'SEARCH':
      return {
        search: 'search',
      };
    default:
      return state.search;
  }
};

export default searchPanelReducer;

/**
 *  items: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Learn React', important: true, done: false },
      {
        id: 3,
        label: 'Make Awesome App',
        important: false,
        done: false,
      },
    ],
    filter: 'all',
    search: '',
 */
