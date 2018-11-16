<template>
  <div class="hidden-panel__basket basket-dropped hidden-panel__basket_visible">
    <div class="basket-dropped__title">В вашей корзине:</div>
    <div class="basket-dropped__product-list product-list">
      <HiddenPanelProductListItem 
        v-for="item in cartItems"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :imageLink="item.imageLink"
        :price="item.price"
      />
    </div>

    <nuxt-link
      class="basket-dropped__order-button"
      to="/order"
    >
      Оформить заказ
    </nuxt-link>
  </div>
</template>

<script>
import HiddenPanelProductListItem from './HiddenPanelProductListItem';
import { mapState } from 'vuex';

export default {
  name: 'HiddenPanelBasket',
  components: {
    HiddenPanelProductListItem,
  },
  computed: {
    ...mapState('cart', {
      cartItems: 'items',
    }),
  }
};
</script>

<style scoped>
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
</style>
