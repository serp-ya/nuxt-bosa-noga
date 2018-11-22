export default {
  getCartData(state, { cartData }) {
    state.cartId = cartData.cartId;
    state.items = cartData.items;
  },
  createCart(state, { cartData }) {
    state.cartId = cartData.cartId;
    state.items = cartData.items;
  },
  updateCart(state, { cartData }) {
    state.items = cartData.items;
  },
  deleteCart(state) {
    state.cartId = '';
    state.items = [];
  },
};
