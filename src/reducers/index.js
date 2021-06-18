import addFormReducer from './add-form-reducer';
import listReducer from './list-reducer';
import searchPanelReducer from './search-panel-reducer';

const reducer = (state, action) => {
  return {
    search: searchPanelReducer(state, action),
    list: listReducer(state, action),
    addForm: addFormReducer(state, action),
  };
};

export default reducer;
