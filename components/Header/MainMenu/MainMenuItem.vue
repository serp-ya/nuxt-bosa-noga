<template>
  <li
    class="main-menu__item main-menu__item_new"
    :class="liClasses"
    @click="selectCategoryClickHandler"
  >
    <span>{{ title }}</span>
  </li>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MainMenuItem',
  props: {
    id: {
      type: Number,
      isRequired: true,
    },
    title: {
      type: String,
      isRequired: true,
    },
  },
  computed: {
    ...mapGetters('header/dropdown', [
      'getOpenCatId'
    ]),
    liClasses() {
      return {
        'main-menu__item_active': this.id == this.getOpenCatId
      };
    }
  },
  methods: {
    ...mapMutations('header/dropdown', [
      'setOpenCatId',
    ]),
    selectCategoryClickHandler() {
      this.setOpenCatId({ catId: this.id });
    },
  }
};
</script>

<style>
.header .main-menu {
  min-height: 58px;
  height: 1px;
}

.header .main-menu__items {
  height: 100%;
  display: flex;
  padding: 0 24px;
  justify-content: space-around;
  align-items: center;
}

.header .main-menu__item {
  padding-bottom: 10px;
  list-style: none;
  text-align: center;
}

.header .main-menu__item span {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #A1B3BF;
}

.header .main-menu__item span:hover {
  color: #000000;
  text-decoration: underline;
}

.header .main-menu__item_active {
  background-image: linear-gradient(90deg, #ff65a5 0%, #ff8076 100%);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 4px;
}

.header .main-menu__item_active span {
  font-weight: bold;
  color: #333333;
}
</style>
