export default {
  checkCatsIsEmpty(state) {
    return state.categories.length === 0;
  },
  checkFiltersIsEmpty(state) {
    return state.filters.length === 0;
  },
  checkFeaturedIsEmpty(state) {
    return state.featured.length === 0;
  },
};
