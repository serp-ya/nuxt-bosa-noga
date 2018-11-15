<template>
  <div class="header-main__hidden-panel hidden-panel">
    <div class="wrapper">
      <HeaderMainHiddenPanelProfile />
      <HeaderMainHiddenPanelBasket />
    </div>
  </div>
</template>

<script>
import HeaderMainHiddenPanelProfile from './HeaderMainHiddenPanelProfile';
import HeaderMainHiddenPanelBasket from './HeaderMainHiddenPanelBasket';

export default {
  name: 'HeaderMainHiddenPanel',
  components: {
    HeaderMainHiddenPanelProfile,
    HeaderMainHiddenPanelBasket,
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
