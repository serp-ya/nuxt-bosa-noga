<template>
  <nav class="main-menu">
    <div class="wrapper">
      <ul class="main-menu__items" v-if="categories.length">
        <MainMenuItem 
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :title="category.title"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import MainMenuItem from './MainMenuItem';
import { mapState } from 'vuex';

export default {
  name: 'MainMenu',
  components: {
    MainMenuItem,
  },
  computed: {
    ...mapState('products', [
      'categories',
    ]),
  },
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

.header .main-menu__item a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #A1B3BF;
}

.header .main-menu__item a:hover {
  color: #000000;
  text-decoration: underline;
}

.header .main-menu__item_active {
  background-image: linear-gradient(90deg, #ff65a5 0%, #ff8076 100%);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 4px;
}

.header .main-menu__item_active a {
  font-weight: bold;
  color: #333333;
}
</style>
