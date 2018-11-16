export default {
  initCategories({ commit }, { categoriesList }) {
    commit('initCategories', categoriesList);
  },
  initFilters({ commit }, { filtersList }) {
    commit('initFilters', filtersList);
  },
};
