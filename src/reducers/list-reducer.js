const toggleProperty = (arr, id, propName) => {
  const idx = arr.findIndex((item) => item.id === id);
  const oldItem = arr[idx];
  const value = !oldItem[propName];

  const item = { ...arr[idx], [propName]: value };
  return [...arr.slice(0, idx), item, ...arr.slice(idx + 1)];
};

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
      maxId: 100,
    };
  }
  switch (action.type) {
    //   onDelete = (id) => {
    //     this.setState((state) => {
    //       const idx = state.items.findIndex((item) => item.id === id);
    //       const items = [
    //         ...state.items.slice(0, idx),
    //         ...state.items.slice(idx + 1),
    //       ];
    //       return { items };
    //     });
    //   };
    case 'ITEM_TOGGLE_DONE':
      let items = toggleProperty(
        state.list.items,
        action.payload,
        'done'
      );
      return { ...state.list, items };

    case 'ITEM_TOGGLE_IMPORTANT':
      let arr = toggleProperty(
        state.list.items,
        action.payload,
        'important'
      );
      return { ...state.list, items: arr };

    case 'ITEM_DELETE':
      const idx = state.list.items.findIndex(
        (item) => item.id === action.payload
      );
      let newArr = state.list.items.slice();
      newArr.splice(idx, 1);
      return {
        ...state.list,
        items: newArr,
      };
    case 'ITEM_ADD':
      const createItem = (label) => {
        return {
          id: ++state.list.maxId,
          label,
          important: false,
          done: false,
        };
      };
      const item = createItem(action.payload);

      return {
        items: [...state.list.items, item],
        maxId: ++state.list.maxId,
      };

    default:
      return state.list;
  }
};
export default listReducer;
