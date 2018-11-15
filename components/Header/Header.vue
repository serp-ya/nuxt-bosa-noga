<template>
  <header class="header">
    <TopMenu />
    <HeaderMain />
    <MainMenu />
    <DroppedMenu />
  </header>
</template>

<script>
import TopMenu from './TopMenu/TopMenu';
import HeaderMain from './HeaderMain/HeaderMain';
import MainMenu from './MainMenu/MainMenu';
import DroppedMenu from './DroppedMenu/DroppedMenu';

export default {
  name: 'Header',
  components: {
    TopMenu,
    HeaderMain,
    MainMenu,
    DroppedMenu,
  }
};
</script>
