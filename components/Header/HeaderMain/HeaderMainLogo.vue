<template>
  <div class="header-main__logo">
    <nuxt-link to="/">
      <h1>
        <img
          :src="logoBlueLink"
          alt="logotype"
        >
      </h1>
    </nuxt-link>
    <p>{{ slogan }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderMainLogo',
  computed: {
    ...mapState([
      'logoBlueLink',
      'slogan',
    ]),
  }
};
</script>

<style scoped>
.header .header-main__logo {
  flex: 1;
}

.header .header-main__logo h1 {
  margin: 0;
}

.header .header-main__logo p {
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 16px;
  color: #A1B3BF;
}
</style>
