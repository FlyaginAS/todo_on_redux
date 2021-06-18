const listReducer = (state, action) => {
  if (state === undefined) {
    return {
      list: 'listDefault',
    };
  }
  switch (action.type) {
    case 'LIST':
      return {
        list: 'list',
      };
    default:
      return state.list;
  }
};
export default listReducer;

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
