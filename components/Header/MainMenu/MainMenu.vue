<template>
  <nav class="main-menu">
    <div class="wrapper">
      <ul class="main-menu__items">
        <li class="main-menu__item main-menu__item_sales">
          <a href="#">Акции</a>
        </li>
        <li class="main-menu__item main-menu__item_women">
          <a href="#">Женская обувь</a>
        </li>
        <li class="main-menu__item main-menu__item_men">
          <a href="#">Мужская обувь</a>
        </li>
        <li class="main-menu__item main-menu__item_kids">
          <a href="#">Детская обувь</a>
        </li>
        <li class="main-menu__item main-menu__item_accessories">
          <a href="#">Аксессуары</a>
        </li>
        <li class="main-menu__item main-menu__item_home">
          <a href="#">Для дома</a>
        </li>
        <li class="main-menu__item main-menu__item_brands">
          <a href="#">Бренды</a>
        </li>
        <li class="main-menu__item main-menu__item_new">
          <a href="#">Новинки</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainMenu',
};
</script>

<style>
.header .main-menu {
  min-height: 58px;
  height: 1px;
}

.header .main-menu__items {
  height: 100%;
  display: flex;
  padding: 0 24px;
  justify-content: space-around;
  align-items: center;
}

.header .main-menu__item {
  padding-bottom: 10px;
  list-style: none;
  text-align: center;
}

.header .main-menu__item a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #A1B3BF;
}

.header .main-menu__item a:hover {
  color: #000000;
  text-decoration: underline;
}

.header .main-menu__item_active {
  background-image: linear-gradient(90deg, #ff65a5 0%, #ff8076 100%);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% 4px;
}

.header .main-menu__item_active a {
  font-weight: bold;
  color: #333333;
}
</style>
