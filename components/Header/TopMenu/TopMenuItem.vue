<template>
  <li class="top-menu__item">
    <nuxt-link :to="link">
      <slot />
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      isRequired: true,
    },
  },
};
</script>

<style>
.header .top-menu__items {
  height: 100%;
  display: flex;
  padding: 0 35px;
  justify-content: space-between;
  align-items: center;
}

.header .top-menu__item {
  list-style: none;
  flex: 1;
  text-align: center;
}

.header .top-menu__item a {
  text-decoration: none;
  font-size: 18px;
  color: #333333;
}

.header .top-menu__item a:hover {
  color: #DBE4E7;
  text-decoration: underline;
}
</style>
