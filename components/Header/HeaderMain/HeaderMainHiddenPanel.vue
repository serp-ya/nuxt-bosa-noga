<template>
  <div
    class="header-main__hidden-panel hidden-panel"
    :class="panelClasses"
  >
    <div class="wrapper">
      <keep-alive>
        <component 
          :is="profileIsOpen 
            ? 'HiddenPanelProfile' 
            : 'HiddenPanelBasket'"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import HiddenPanelProfile from './HiddenPanel/HiddenPanelProfile';
import HiddenPanelBasket from './HiddenPanel/HiddenPanelBasket';
import { mapState } from 'vuex';

export default {
  name: 'HeaderMainHiddenPanel',
  components: {
    HiddenPanelProfile,
    HiddenPanelBasket,
  },
  computed: {
    ...mapState('header/dropdown', [
      'profileIsOpen',
      'basketIsOpen',
    ]),
    panelClasses() {
      return {
        'header-main__hidden-panel_visible': this.profileIsOpen || this.basketIsOpen,
      };
    },
  },
};
</script>

<style scoped>
.header .header-main__hidden-panel {
  display: none;
  min-height: 70px;
  background: url(/img/header-waves.png) bottom center repeat-x, linear-gradient(90deg, #ff65a5 0%, #ff8076 100.22%);
  box-shadow: inset 0px 2px 2px rgba(41, 42, 58, 0.25);
}

.header .header-main__hidden-panel_visible {
  display: block;
}

.hidden-panel {
  padding: 10px 158px 15px;
  text-align: right;
}
</style>
