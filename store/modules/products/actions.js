export default {
  initCategories({ commit }, { categoriesList }) {
    commit('initCategories', categoriesList);
  },
  initFilters({ commit }, { filtersList }) {
    commit('initFilters', filtersList);
  },
  initFeatured({ commit }, { featuredItems }) {
    commit('initFeatured', { featuredItems });
  },
  loadCategory({ commit }, { categoryData }) {
    commit('loadCategory', { categoryData });
  },
  loadProduct({ commit }, { productData }) {
    commit('loadProduct', { productData });
  },
};
