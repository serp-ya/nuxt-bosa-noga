export default {
  initCategories(state, { categoriesList }) {
    state.categories = categoriesList;
  },
  initFilters(state, { filtersList }) {
    state.filters = filtersList;
  },
};
