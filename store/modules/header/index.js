import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import dropdown from './modules/dropdown';
import topMenu from './modules/topMenu';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    dropdown,
    topMenu,
  }
};
