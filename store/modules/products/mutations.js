export default {
  initCategories(state, { categoriesList }) {
    state.categories = categoriesList;
  },
  initFilters(state, { filtersList }) {
    state.filters = filtersList;
  },
  initFeatured(state, { featuredItems }) {
    state.featured = featuredItems;
  },
  loadCategory(state, { categoryData }) {
    const { id, items } = categoryData;
    state.items = [...state.items, ...items];

    if (id || id === 0) {
      state.loadedItemsByCategoryId.push(id);
    }
  },
};
