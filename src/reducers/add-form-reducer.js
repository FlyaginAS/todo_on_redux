const addFormReducer = (state, action) => {
  if (state === undefined) {
    return {
      addForm: 'formDefault',
    };
  }

  switch (action.type) {
    case 'FORM':
      return {
        addForm: 'form',
      };
    default:
      return state.addForm;
  }
};

export default addFormReducer;
