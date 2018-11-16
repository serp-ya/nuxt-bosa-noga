import Vuex from 'vuex';
import topMenu from './modules/topMenu';
import cart from './modules/cart';
import headerDropdown from './modules/headerDropdown';

export default () => new Vuex.Store({
  state: {
    phone: '+74957903503',
    email: 'office@bosanoga.ru',
    siteName: 'BosaNoga',
    openHours: 'Ежедневно с 09-00 до 21-00',
    logoBlueLink: 'img/header-logo.png',
    slogan: 'Обувь и аксессуары для всей семьи',
  },
  modules: {
    topMenu,
    cart,
    headerDropdown,
  },
});
