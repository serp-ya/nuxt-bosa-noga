<template>
  <div class="header-main__profile">
    <div class="header-main__pics">
      <div class="header-main__pic header-main__pic_search" />
      <div class="header-main__pic_border" />
      <div class="header-main__pic header-main__pic_profile">
        <div class="header-main__pic_profile_menu" />
      </div>
      <div class="header-main__pic_border" />
      <div class="header-main__pic header-main__pic_basket">
        <div class="header-main__pic_basket_full">1</div>
        <div class="header-main__pic_basket_menu" />
      </div>
    </div>
    <form class="header-main__search">
      <input placeholder="Поиск">
      <i class="fa fa-search" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'HeaderMainProfile',
};
</script>

<style scoped>
.header .header-main__profile {
  flex: 1;
  position: relative;
}

.header .header-main__pics {
  display: flex;
  justify-content: space-between;
  max-width: 270px;
  margin-left: auto;
}

.header .header-main__pic {
  height: 32px;
  width: 32px;
  margin: 0 auto;
  background-image: url(/img/header__profile_sprite.png);
  background-repeat: no-repeat;
}

.header .header-main__pic_search {
  position: relative;
  z-index: 1;
  background-position: -64px 0;
}

.header .header-main__pic_search_is-hidden {
  opacity: 0;
}

.header .header-main__pic_profile {
  position: relative;
  background-position: -32px 0;
}

.header .header-main__pic_profile_menu {
  display: none;
}

.header .header-main__pic_profile_menu_is-active {
  position: absolute;
  left: 4px;
  top: 78px;
  display: block;
  width: 21px;
  height: 11px;
  background-repeat: no-repeat;
  background-image: url(/img/header-main__pic_is-active.png);
  background-position: center bottom;
}

.header .header-main__pic_basket {
  position: relative;
  background-position: 0 0;
}

.header .header-main__pic_basket_full {
  position: absolute;
  right: -10px;
  top: -5px;
  display: none;
  height: 21px;
  width: 21px;
  font-size: 11px;
  line-height: 21px;
  text-align: center;
  color: #FFFFFF;
  border-radius: 50%;
  background: linear-gradient(90deg, #ff65a5 1.11%, #ff8076 100%);
  box-shadow: 0px 2px 8px rgba(255, 101, 165, 0.6), inset 0px 1px 1px #ff8076;
}

.header .header-main__pic_basket_menu {
  display: none;
}

.header .header-main__pic_basket_menu_is-active {
  position: absolute;
  left: 4px;
  top: 78px;
  display: block;
  width: 21px;
  height: 11px;
  background-repeat: no-repeat;
  background-image: url(/img/header-main__pic_is-active.png);
  background-position: center bottom;
}

.header .header-main__pic:hover {
  background-position-y: -32px;
  cursor: pointer;
}

.header .header-main__pic_border {
  border-left: 2px solid #F4F5F2;
}

.header .header-main__search {
  display: none;
}

.header .header-main__search_active {
  position: absolute;
  right: 200px;
  bottom: -2px;
  display: block;
  width: 233px;
  height: 38px;
  padding: 0 20px;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px #D4E4E6;
  border-radius: 50px;
  text-align: right;
}

.header .header-main__search_active input {
  width: 80%;
  height: 80%;
  font-weight: 300;
  font-size: 14px;
  color: #333333;
  border: none;
  outline: none;
}

.header .header-main__search_active input::placeholder {
  color: #D6D6D6;
}

.header .header-main__search_active i {
  display: inline-block;
  margin-left: 10px;
  font-size: 20px;
  color: #AFC1CD;
  line-height: 35px;
}
</style>
