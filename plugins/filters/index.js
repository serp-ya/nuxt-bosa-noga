import Vue from 'vue';
import phoneFormat from './phoneFormat';
import currencyFormat from './currencyFormat';

Vue.filter('phoneFormat', phoneFormat);
Vue.filter('currencyFormat', currencyFormat);
