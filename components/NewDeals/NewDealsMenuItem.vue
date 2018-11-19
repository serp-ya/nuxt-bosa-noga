<template>
  <li
    class="new-deals__menu-item"
    :class="activeItemClasses"
    @click="onClickHandler"
  >
    <span>{{ title }}</span>
  </li>
</template>

<script>
export default {
  name: 'NewDealsMenuItem',
  props: {
    categoryId: {
      type: Number,
      isRequired: true,
    },
    title: {
      type: String,
      isRequired: true,
    },
    onClick: {
      type: Function,
      isRequired: true,
    },
    activeItemId: {
      type: Number,
      isRequired: false,
    },
  },
  computed: {
    activeItemClasses() {
      return {
        'new-deals__menu-item_active': this.categoryId === this.activeItemId,
      };
    },
  },
  methods: {
    onClickHandler() {
      this.onClick(this.categoryId);
    },
  },
};
</script>

<style scoped>
.new-deals__menu-item {
  padding-bottom: 10px;
  list-style: none;
  text-align: center;
  text-transform: uppercase;
}
.new-deals__menu-item span {
  text-decoration: none;
  font-size: 18px;
  color: #D4D4D4;
  cursor: pointer;
}
.new-deals__menu-item span:hover {
  color: #333333;
  cursor: pointer;
  text-decoration: underline;
}
.new-deals__menu-item_active {
  background-image: linear-gradient(90deg, #ff65a5 0%, #ff8076 100%);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 4px;
}
.new-deals__menu-item_active span {
  font-weight: bold;
  color: #333333;
}
</style>
