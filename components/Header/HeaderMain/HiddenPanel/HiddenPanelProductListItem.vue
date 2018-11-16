<template>
  <div class="product-list__item">
    <span class="product-list__pic">
      <img 
        :src="imageLink" 
        :alt="title"
      >
    </span>
    <nuxt-link :to="'/products/' + id" class="product-list__product">
      {{ title }}
    </nuxt-link>
    <div class="product-list__fill" />
    <div class="product-list__price">
      {{ price | currencyFormat }}
      <i class="fa fa-rub" />
    </div>
    <div class="product-list__delete">
      <i class="fa fa-times" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HiddenPanelProductListItem',
  props: {
    id: { type: Number, isRequired: true, },
    title: { type: String, isRequired: true },
    imageLink: { type: String, isRequired: true },
    price: { type: Number, isRequired: true },
  },
};
</script>

<style scoped>
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
