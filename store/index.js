import Vuex from 'vuex';
import topMenu from './modules/topMenu';

export default () => new Vuex.Store({
  modules: {
    topMenu,
  },
});
