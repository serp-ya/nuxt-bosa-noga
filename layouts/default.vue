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
import cartStorage from '~/services/LocalStorage/CartStorage';
import { mapActions } from 'vuex';

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions('cart', [
      'getCartData'
    ]),
  },
  created() {
    const cartId = cartStorage.getId();

    if (!cartId) {
      return;
    }
    this.getCartData({ cartId });
  },
};
</script>
