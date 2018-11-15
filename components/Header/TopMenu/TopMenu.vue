<template>
  <div class="top-menu">
    <div class="wrapper">
      <ul class="top-menu__items">
        <TopMenuItem 
          v-for="link in links"
          :key="link.title"
          :link="link.link"
        >
          {{ link.title }}
        </TopMenuItem>
      </ul>
    </div>
  </div>
</template>

<script>
import TopMenuItem from './TopMenuItem';
import { mapState } from 'vuex';

export default {
  components: {
    TopMenuItem,
  },
  computed: {
    ...mapState('topMenu', [
      'links',
    ]),
  },
}
</script>

<style>
.header .top-menu {
  min-height: 49px;
  height: 1px;
  background: #A1B3BF;
}
</style>
