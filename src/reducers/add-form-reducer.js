const addFormReducer = (state, action) => {
  if (state === undefined) {
    return {
      label: '',
    };
  }

  switch (action.type) {
    case 'ITEM_ADD':
      console.log(`item ${action.payload} added`);
      return {
        label: action.payload,
      };
    case 'ITEM_INPUT_CHANGE':
      console.log(`item ${action.payload} changed`);
      return {
        label: action.payload,
      };
    default:
      return state.addForm;
  }
};

export default addFormReducer;
