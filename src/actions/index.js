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

const form = () => {
  return {
    type: 'FORM',
  };
};

const search = () => {
  return {
    type: 'SEARCH',
  };
};

export { itemAdd, itemInputChange, form, search };
