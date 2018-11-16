<template>
  <div class="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer/Footer';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  }
};
</script>
