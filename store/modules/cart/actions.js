import cartStorage from '~/services/LocalStorage/CartStorage';

export default {
  async getCartData({ commit, dispatch }, { cartId }) {
    return this.$axios.$get(`cart/${cartId}.json`)
      .then(items => {
        const cartData = {
          cartId,
          items,
        };
        commit('getCartData', { cartData });
        items.forEach(
          item => dispatch('products/fetchProduct', { productId: item.id }, { root: true })
        );
      })
      .catch(error => console.log(error));
  },
  async createCart({ commit }, { items }) {
    return this.$axios.$post('cart.json', items)
      .then(cartId => {
        const cartData = {
          cartId,
          items,
        };
        cartStorage.addId(cartId);
        commit('createCart', { cartData });
      })
      .catch(error => console.log(error));
  },
  async updateCart({ state, commit }, { items }) {
    const cartId = state.cartId;

    return this.$axios.$put(`cart/${cartId}.json`, items)
      .then(items => {
        const cartData = {
          items
        };
        commit('updateCart', { cartData });
      })
      .catch(error => console.log(error));
  },
  async deleteCart({ state, commit }) {
    const cartId = state.cartId;

    return this.$axios.$delete(`cart/${cartId}.json`)
      .then(() => {
        cartStorage.deleteId()
        commit('deleteCart');
      })
      .catch(error => console.log(error));
  },
};
