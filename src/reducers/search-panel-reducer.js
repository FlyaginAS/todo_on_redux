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
