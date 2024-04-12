<script setup>
import trash from '../images/trash.png';
import { ref } from 'vue';

import { useCartStore } from '../store';
const cartStore = useCartStore();

const MAX_QUANTITY = 31;
const MIN_QUANTITY = 1;


const { item } = defineProps({
  item: {
    type: Object,
  },
  removeItemFromCart: {
    type: Function,
  }
})

const quantity = ref(item.quantity);

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
});

const handleChangeQuantity = () => {
  cartStore.updateItemQuantity(item.id, quantity);
};

const removeItem = () => {
  cartStore.removeItemFromCart(item.id);
}

</script>

<template>
  <li class="cart__item">
    <div class="cart__item-info">
      <h4>{{ item.title }}</h4>
      <span>
        Quantity:
        <input id="item__quantity" class="count__quantity" type="number" v-model.number='quantity' :min='MIN_QUANTITY'
          :max='MAX_QUANTITY' @change='handleChangeQuantity' />
      </span>
      <span> Price: {{ formatCurrency.format(item.price) }}</span>
      <span> Total: {{ formatCurrency.format(item.price * quantity) }}</span>
    </div>
    <button class="remove__button" @click='removeItem'>
      <img :src='trash' alt="trash" width="15" />
    </button>
  </li>
</template>

<style scoped>

.cart__item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cart__item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.remove__button {
  display: block;
  width: 90%;
  cursor: pointer;
}

</style>