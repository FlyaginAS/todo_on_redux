//search
const searchChanged = (text) => {
  return {
    type: 'SEARCH_CHANGED',
    payload: text,
  };
};

const filterChanged = (text) => {
  return {
    type: 'FILTER_CHANGED',
    payload: text,
  };
};

//list
const itemToggleDone = (id) => {
  return {
    type: 'ITEM_TOGGLE_DONE',
    payload: id,
  };
};
const itemToggleImportant = (id) => {
  return {
    type: 'ITEM_TOGGLE_IMPORTANT',
    payload: id,
  };
};
const itemDelete = (id) => {
  return {
    type: 'ITEM_DELETE',
    payload: id,
  };
};

//addForm
const itemAdd = (label) => {
  return {
    type: 'ITEM_ADD',
    payload: label,
  };
};

const itemInputChange = (label) => {
  return {
    type: 'ITEM_INPUT_CHANGE',
    payload: label,
  };
};

export {
  itemAdd,
  itemInputChange,
  itemToggleDone,
  itemToggleImportant,
  itemDelete,
  searchChanged,
  filterChanged,
};
