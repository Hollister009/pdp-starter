<script setup>
import { computed } from 'vue';
import CartItem from './CartItem.vue';
import cart from '../images/cart.svg';

import { useCartStore } from '../store';
const cartStore = useCartStore();

const purchaseHandler = () => {
  cartStore.handleCartClear();

  setTimeout(() => {
    alert('Thank you for your purchase!');
  });
};

const cartTotalPrice = computed(() => cartStore.cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0));

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
});

defineProps({
  isCartOpen: {
    type: Boolean,
  },
  handleCartClose: {
    type: Function,
  },
})

</script>

<template>
  <div v-if="!isCartOpen"></div>
  <div v-else-if="cartStore.cart.length === 0">
    <div class="cart__container">
      <div class="cart__buttons">
        <button class="cart__button" disabled>
          Purchase
        </button>
        <button class="cart__button" @click='handleCartClose'>
          X
        </button>
      </div>
      <div class="cart-icon">
        <img :src="cart" alt="cart" width="40" />
      </div>
      <span>Cart empty...</span>
    </div>
  </div>
  <div v-else>
    <div class="cart__container">
      <div class="cart__buttons">
        <button class="cart__button" @click='purchaseHandler'>
          Purchase
        </button>
        <button class="cart__button" @click='handleCartClose'>
          X
        </button>
      </div>
      <ul class="cart__item-list">
        <CartItem v-for="item in cartStore.cart" :key="item.id" :item="item" :updateItemQuantity :removeItemFromCart />
      </ul>
      <span class="total">
        Total price: {{ formatCurrency.format(cartTotalPrice) }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.cart__container {
  z-index: 1;
  position: fixed;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  top: 0px;
  right: 0;
  width: 400px;
  height: 100vh;
  transform: none;
  border: 1px solid black;
}

.cart__buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  position: sticky;
  top: 10px;
  right: 20px;
}

.cart__button {
  display: flex;
  justify-content: center;
  width: 100px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
}

.cart__item-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  overflow-y: auto;
  width: 80%;
  list-style: none;
}


.cart-icon {
  width: 40px;
}


.total {
  font-weight: 600;
  font-size: 16px;
  align-self: baseline;
  color: orangered;
  padding: 10px;
}
</style>