const addFormReducer = (state, action) => {
  if (state === undefined) {
    return {
      label: '',
    };
  }

  switch (action.type) {
    case 'ITEM_INPUT_CHANGE':
      return {
        label: action.payload,
      };
    case 'INPUT_CLEAR':
      return {
        label: '',
      };
    default:
      return state.addForm;
  }
};

export default addFormReducer;
