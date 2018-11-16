export default {
  async nuxtServerInit({ commit, getters }, { app }) {
    const catsIsEmpty = getters['products/checkCatsIsEmpty'];
    const filtersIsEmptu = getters['products/checkFiltersIsEmpty'];

    if (catsIsEmpty) {
      const categories = await app.$axios.$get('categories.json');
      commit('products/initCategories', { categoriesList: categories });
    }

    if (filtersIsEmptu) {
      const filters = await app.$axios.$get('filters.json');
      commit('products/initFilters', { filtersList: filters });
    }
  },
};
