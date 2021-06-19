const searchPanelReducer = (state, action) => {
  if (state === undefined) {
    return {
      filter: 'all',
      input: '',
    };
  }

  switch (action.type) {
    case 'SEARCH_CHANGED':
      return {
        ...state.search,
        input: action.payload,
      };
    case 'FILTER_CHANGED':
      return {
        ...state.search,
        filter: action.payload,
      };
    default:
      return state.search;
  }
};

export default searchPanelReducer;
