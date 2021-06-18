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
