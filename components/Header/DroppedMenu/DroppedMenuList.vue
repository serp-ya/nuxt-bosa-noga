<template>
  <div
    class="dropped-menu__lists"
    :class="listClasses"
  >
    <h3 class="dropped-menu__list-title">
      {{ title }}
    </h3>
    <ul class="dropped-menu__list">
      <DroppedMenuListItem
        v-for="item in filterItems"
        :key="item"
        :title="item"
        :filterType="filterType"
      />
    </ul>
  </div>
</template>

<script>
import DroppedMenuListItem from './DroppedMenuListItem';

export default {
  name: 'DroppedMenuList',
  props: {
    title: {
      type: String,
      isRequired: true,
    },
    listType: {
      type: String,
      isRequired: false,
    },
    filterType: {
      type: String,
      isRequired: true,
    },
    filterItems: {
      type: Array,
      isRequired: true,
    },
  },
  components: {
    DroppedMenuListItem,
  },
  computed: {
    listClasses() {
      return {
        'dropped-menu__lists_three-coloumns': this.listType === 'three-columns',
      };
    },
  }
};
</script>

<style>
.dropped-menu__lists {
  flex: 1;
  height: 100%;
  color: #333333;
}

.dropped-menu__lists_three-coloumns {
  flex: 4;
}

.dropped-menu__list-title {
  width: 100%;
  margin-bottom: 17px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
}

.dropped-menu__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;
  list-style: none;
}
</style>
