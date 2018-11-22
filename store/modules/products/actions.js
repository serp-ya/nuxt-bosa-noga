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
  async fetchProduct({ state, commit }, { productId }) {
    const products = state.itemsFull;
    const productIsLoaded = products.find(
      product => product.id === +productId
    );

    if (productIsLoaded) {
      return;
    }

    const url = `products.json?orderBy="id"&equalTo=${productId}`;
    const productData = await this.$axios.$get(url);
    const productKey = Object.keys(productData)[0];
    const productIsEmpty = typeof productKey === 'undefined';

    if (productIsEmpty) {
      return { statusCode: 404, message: '404 - product not found' };
    }

    return commit('loadProduct', { productData: productData[productKey] });
  },
};
