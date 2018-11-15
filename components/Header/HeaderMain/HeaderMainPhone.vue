<template>
  <div class="header-main__phone">
    <a 
      :href="`tel:${phone}`"
    >
      {{ phone | phoneFormat }}
    </a>
    <p>
      {{ openHours }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HeaderMainPhone',
  computed: {
    ...mapState([
      'phone',
      'openHours',
    ]),
  }
};
</script>

<style scoped>
.header .header-main__phone {
  flex: 1;
  text-align: left;
}

.header .header-main__phone a {
  font-weight: bold;
  font-size: 27px;
  text-decoration: none;
  color: #A1B3BF;
}

.header .header-main__phone a:hover {
  text-decoration: underline;
}

.header .header-main__phone p {
  font-weight: 300;
  font-size: 16px;
  color: #A1B3BF;
}
</style>
