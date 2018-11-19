<template>
  <li
    class="dropped-menu__item"
    @click="onClick"
  >
    <span href="#">{{ title }}</span>
  </li>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DroppedMenuListItem',
  props: {
    title: {
      type: String,
      isRequired: true,
    },
    filterType: {
      type: String,
      isRequired: true,
    },
  },
  computed: {
    ...mapState('header/dropdown', [
      'openCatId'
    ]),
  },
  methods: {
    ...mapMutations('header/dropdown', [
      'clearOpenCatId'
    ]),
    onClick() {
      const route = `/products?categoryId=${this.openCatId}&${this.filterType}=${this.title}`;
      this.$router.push(route);
      this.clearOpenCatId();
    }
  },
};
</script>

<style>
.dropped-menu__item {
  margin-right: 48px;
  line-height: 1.5;
}

.dropped-menu__item span {
  font-size: 18px;
  color: #333333;
  text-decoration: none;
  cursor: pointer;
}
</style>
