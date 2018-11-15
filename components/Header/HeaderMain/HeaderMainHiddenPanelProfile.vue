<template>
  <div class="hidden-panel__profile">
    <a href="#">Личный кабинет</a>
    <a href="favorite.html">
      <i
        class="fa fa-heart-o"
        aria-hidden="true"
      />
      Избранное
    </a>
    <a href="#">Выйти</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderMainHiddenPanelProfile',
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
