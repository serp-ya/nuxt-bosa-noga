<template>
  <div class="hidden-panel__profile hidden-panel__profile_visible">
    <nuxt-link to="/">Личный кабинет</nuxt-link>
    <nuxt-link to="/favorite">
      <i class="fa fa-heart-o"/>
      Избранное
    </nuxt-link>
    <nuxt-link to="/">Выйти</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'HiddenPanelProfile',
};
</script>

<style scoped>
.hidden-panel__profile {
  display: none;
}

.hidden-panel__profile_visible {
  display: block;
  line-height: 45px;
}

.hidden-panel__profile a {
  margin-left: 25px;
  line-height: 30px;
  font-size: 18px;
  text-decoration: none;
  color: #FFFFFF;
}

.hidden-panel__profile a i {
  margin-right: 5px;
}

.hidden-panel__profile a:hover {
  text-decoration: underline;
}

</style>
