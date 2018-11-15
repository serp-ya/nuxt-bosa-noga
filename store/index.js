import Vuex from 'vuex';
import topMenu from './modules/topMenu';

export default () => new Vuex.Store({
  state: {
    phone: '+74957903503',
    email: 'office@bosanoga.ru',
    siteName: 'BosaNoga',
    openHours: 'Ежедневно с 09-00 до 21-00',
  },
  modules: {
    topMenu,
  },
});
