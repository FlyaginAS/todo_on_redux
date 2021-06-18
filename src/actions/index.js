const list = () => {
  return {
    type: 'LIST',
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

export { list, form, search };
