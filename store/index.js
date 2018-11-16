import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import header from './modules/header';
import cart from './modules/cart';
import products from './modules/products';

export default () => new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    header,
    cart,
    products,
  },
});
