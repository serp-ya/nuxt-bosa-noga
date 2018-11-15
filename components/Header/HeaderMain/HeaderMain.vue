<template>
  <div class="header-main">
    <div class="header-main__wrapper wrapper">
      <HeaderMainPhone />
      <HeaderMainLogo />
      <HeaderMainProfile />
    </div>

    <div class="header-main__hidden-panel hidden-panel">
      <div class="wrapper">
        
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

        <div class="hidden-panel__basket basket-dropped">
          <div class="basket-dropped__title">В вашей корзине:</div>
          <div class="basket-dropped__product-list product-list">
            <div class="product-list__item">
              <a class="product-list__pic">
                <img 
                  src="img/product-list__pic_1.jpg"
                  alt="product"
                >
              </a>
              <a 
                href="#"
                class="product-list__product"
              >
                Ботинки женские, Baldinini
              </a>
              <div class="product-list__fill" />
              <div class="product-list__price">12 360
                <i
                  class="fa fa-rub"
                  aria-hidden="true"
                />
              </div>
              <div class="product-list__delete">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div class="product-list__item">
              <a class="product-list__pic">
                <img 
                  src="img/product-list__pic_1.jpg"
                  alt="product"
                >
              </a>
              <a
                href="#"
                class="product-list__product"
              >
                Ботинки женские, Baldinini
              </a>
              <div class="product-list__fill" />
              <div class="product-list__price">
                12 360
                <i
                  class="fa fa-rub"
                  aria-hidden="true"
                />
              </div>
              <div class="product-list__delete">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div class="product-list__item">
              <a class="product-list__pic">
                <img
                  src="img/product-list__pic_1.jpg"
                  alt="product"
                >
              </a>
              <a
                href="#"
                class="product-list__product"
              >
                Ботинки женские, Baldinini
              </a>
              <div class="product-list__fill" />
              <div class="product-list__price">
                12 360
                <i
                  class="fa fa-rub"
                  aria-hidden="true"
                />
              </div>
              <div class="product-list__delete">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div class="product-list__item">
              <a class="product-list__pic">
                <img
                  src="img/product-list__pic_1.jpg"
                  alt="product"
                >
              </a>
              <a
                href="#"
                class="product-list__product"
              >
                Ботинки женские, Baldinini
              </a>
              <div class="product-list__fill" />
              <div class="product-list__price">
                12 360
                <i
                  class="fa fa-rub"
                  aria-hidden="true"
                />
              </div>
              <div class="product-list__delete">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <a
            class="basket-dropped__order-button"
            href="order.html"
          >
            Оформить заказ
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMainPhone from './HeaderMainPhone';
import HeaderMainLogo from './HeaderMainLogo';
import HeaderMainProfile from './HeaderMainProfile';

export default {
  name: 'HeaderMain',
  components: {
    HeaderMainPhone,
    HeaderMainLogo,
    HeaderMainProfile,
  },
};
</script>

<style scoped>
.header .header-main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 124px;
  background: url(/img/header-waves.png) bottom center repeat-x, linear-gradient(93.68deg, #ebe5e9 5.29%, #d1e3e5 95.42%);
}

.header .header-main__wrapper {
  min-height: 139px;
  display: flex;
  padding: 0 28px;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  text-align: center;
}

.header .header-main__hidden-panel {
  display: none;
  min-height: 70px;
  background: url(/img/header-waves.png) bottom center repeat-x, linear-gradient(90deg, #ff65a5 0%, #ff8076 100.22%);
  box-shadow: inset 0px 2px 2px rgba(41, 42, 58, 0.25);
}

.header .header-main__hidden-panel_visible {
  display: block;
}

.hidden-panel {
  padding: 10px 158px 15px;
  text-align: right;
}

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

.hidden-panel__basket {
  display: none;
}

.hidden-panel__basket_visible {
  display: flex;
}

.basket-dropped {
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 3px 0;
}

.basket-dropped__title {
  padding-top: 12px;
  align-self: flex-start;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
}

.basket-dropped__product-list {
  flex: 1;
  max-height: 135px;
  padding-right: 25px;
  overflow-y: auto;
}

.basket-dropped__order-button {
  padding: 9px 41px;
  font-size: 18px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  background: #FFFFFF;
  box-shadow: 0px 2px 8px rgba(173, 71, 113, 0.6), inset 0px 1px 1px #ff8076;
  border-radius: 8px;
  border: none;
}

.basket-dropped__order-button:hover {
  background-color: #A1B3BF;
  color: #ffffff;
  cursor: pointer;
}

.product-list {
  margin: 0 30px;
}

.product-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  color: #ffffff;
}

.product-list__pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 39px;
  background-color: #ffffff;
}

.product-list__product {
  margin: 0 20px;
  font-weight: 300;
  font-size: 18px;
  color: #ffffff;
  text-decoration: none;
}

.product-list__fill {
  flex: 1;
  align-self: flex-end;
  margin-bottom: 13px;
  border-bottom: dotted 1px #ffffff;
}

.product-list__price {
  margin: 0 17px;
  font-weight: bold;
  font-size: 18px;
}

.product-list__delete {
  color: #D4D4D4;
}

.product-list__delete:hover {
  color: #ffffff;
  cursor: pointer;
}
</style>
