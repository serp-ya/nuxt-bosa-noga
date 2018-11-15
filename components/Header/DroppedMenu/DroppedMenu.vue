<template>
  <div class="dropped-menu">
    <div class="wrapper">
      <div class="dropped-menu__lists dropped-menu__lists_women">
        <h3 class="dropped-menu__list-title">Повод:</h3>
        <ul class="dropped-menu__list">
          <li class="dropped-menu__item">
            <a href="#">Офис</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Вечеринка</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Свадьба</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Спорт</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Море</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Дом</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Повседневное</a>
          </li>
        </ul>
      </div>
      <div class="dropped-menu__lists dropped-menu__lists_three-coloumns">
        <h3 class="dropped-menu__list-title">Категории:</h3>
        <ul class="dropped-menu__list">
          <li class="dropped-menu__item">
            <a href="#">Балетки</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Босоножки</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Ботильоны</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Ботинки</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Ботфорты</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Галоши</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Кеды и кроссовки</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Мокасины</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Полусапоги</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Резиновые сапоги</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Сабо</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Сапоги</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Сникерсы</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Тапочки</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Туфли</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Шлёпанцы и вьетнамки</a>
          </li>
        </ul>
      </div>
      <div class="dropped-menu__lists">
        <h3 class="dropped-menu__list-title">Сезон:</h3>
        <ul class="dropped-menu__list">
          <li class="dropped-menu__item">
            <a href="#">Зима</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Весна</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Лето</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Осень</a>
          </li>
        </ul>
      </div>
      <div class="dropped-menu__lists">
        <h3 class="dropped-menu__list-title">Бренды:</h3>
        <ul class="dropped-menu__list">
          <li class="dropped-menu__item">
            <a href="#">Albano</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Ballin</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Baldinini</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Damlax</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Pegia</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Renzi</a>
          </li>
          <li class="dropped-menu__item">
            <a href="#">Все</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DroppedMenu',
};
</script>

<style>
.dropped-menu {
  display: none;
  height: 295px;
  margin-bottom: 24px;
  padding: 32px 0 60px;
  background: #EEEEEE;
  box-shadow: inset 0px 0px 6px rgba(255, 101, 165, 0.25);
}

.dropped-menu_visible {
  display: block;
}

.dropped-menu .wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1120px;
}

.dropped-menu__lists {
  flex: 1;
  height: 100%;
  color: #333333;
}

.dropped-menu__lists_three-coloumns {
  flex: 4;
}

.dropped-menu__list-title {
  width: 100%;
  margin-bottom: 17px;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
}

.dropped-menu__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;
  list-style: none;
}

.dropped-menu__item {
  margin-right: 48px;
  line-height: 1.5;
}

.dropped-menu__item a {
  font-size: 18px;
  color: #333333;
  text-decoration: none;
}
</style>
