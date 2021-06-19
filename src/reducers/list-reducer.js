const listReducer = (state, action) => {
  if (state === undefined) {
    return {
      items: [
        {
          id: 1,
          label: 'Drink Coffee',
          important: false,
          done: false,
        },
        { id: 2, label: 'Learn React', important: true, done: false },
        {
          id: 3,
          label: 'Make Awesome App',
          important: false,
          done: false,
        },
      ],
    };
  }
  switch (action.type) {
    case 'ITEM_TOGGLE_DONE':
      console.log(`item id  ${action.payload} toggle done`);
      return {
        items: [
          {
            id: 1,
            label: 'Drink Coffee',
            important: false,
            done: false,
          },
          {
            id: 2,
            label: 'Learn React',
            important: true,
            done: false,
          },
          {
            id: 3,
            label: 'Make Awesome App',
            important: false,
            done: false,
          },
        ],
      };
    case 'ITEM_TOGGLE_IMPORTANT':
      console.log(`item id  ${action.payload} toggle important`);
      return {
        items: [
          {
            id: 1,
            label: 'Drink Coffee',
            important: false,
            done: false,
          },
          {
            id: 2,
            label: 'Learn React',
            important: true,
            done: false,
          },
          {
            id: 3,
            label: 'Make Awesome App',
            important: false,
            done: false,
          },
        ],
      };
    case 'ITEM_DELETE':
      console.log(`item id  ${action.payload} toggle delete`);
      return {
        items: [
          {
            id: 1,
            label: 'Drink Coffee',
            important: false,
            done: false,
          },
          {
            id: 2,
            label: 'Learn React',
            important: true,
            done: false,
          },
          {
            id: 3,
            label: 'Make Awesome App',
            important: false,
            done: false,
          },
        ],
      };

    default:
      return state.list;
  }
};
export default listReducer;
