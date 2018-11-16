<template>
  <footer class="footer">
    <Subscribe />
    <FooterBottom />
  </footer>
</template>

<script>
import Subscribe from './Subscribe/Subscribe';
import FooterBottom from './FooterBottom';

export default {
  name: 'Footer',
  components: {
    Subscribe,
    FooterBottom,
  }
};
</script>

<style>
  
</style>
