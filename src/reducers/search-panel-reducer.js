const searchPanelReducer = (state, action) => {
  if (state === undefined) {
    return {
      filter: 'all',
      input: '',
    };
  }

  switch (action.type) {
    case 'SEARCH_CHANGED':
      console.log(`search chaned`);
      return {
        filter: 'all',
        input: '',
      };
    case 'FILTER_CHANGED':
      console.log(`FILTER chaned`);
      return {
        filter: 'all',
        input: '',
      };
    default:
      return state.search;
  }
};

export default searchPanelReducer;
