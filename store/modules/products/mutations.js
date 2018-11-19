export default {
  initCategories(state, { categoriesList }) {
    state.categories = categoriesList;
  },
  initFilters(state, { filtersList }) {
    state.filters = filtersList;
  },
  initFeatured(state, { featuredItems }) {
    state.featured = featuredItems;
  }
};
