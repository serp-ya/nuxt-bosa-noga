<template>
  <div
  class="dropped-menu"
  :class="droppedMenyClasses"
  >
    <div class="wrapper">
      <DroppedMenuList
        title="Повод:"
        filterType="reason"
        :filterItems="filters['reason']"
      />
      <DroppedMenuList
        title="Категории:"
        filterType="type"
        :filterItems="filters['type']"
      />
      <DroppedMenuList
        title="Сезон:"
        filterType="season"
        :filterItems="filters['season']"
      />
      <DroppedMenuList
        title="Бренды:"
        listType="three-columns"
        filterType="brand"
        :filterItems="filters['brand']"
      />
    </div>
  </div>
</template>

<script>
import DroppedMenuList from './DroppedMenuList';
import { mapState } from 'vuex';

export default {
  name: 'DroppedMenu',
  components: {
    DroppedMenuList,
  },
  computed: {
    ...mapState('products', [
      'filters',
    ]),
    ...mapState('header/dropdown', [
      'openCatId',
    ]),
    droppedMenyClasses() {
      return {
        'dropped-menu_visible': this.openCatId,
      };
    },
  },
};
</script>

<style>
.dropped-menu {
  display: none;
  height: 440px;
  margin-bottom: 24px;
  padding: 32px 0 60px;
  background: #EEEEEE;
  box-shadow: inset 0px 0px 6px rgba(255, 101, 165, 0.25);
}

.dropped-menu_visible {
  display: block;
}

.dropped-menu .wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1120px;
}
</style>
