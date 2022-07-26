export let reduxStore;

export const injectReduxStore = (_store) => {
  reduxStore = _store;
};
