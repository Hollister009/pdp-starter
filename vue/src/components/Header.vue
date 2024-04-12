<script setup>
import heart from '../images/heart-gray.svg';
import cart from '../images/cart.svg';
import Counter from './Counter.vue';

import { useWishlistStore, useCartStore } from '../store';
const wishlistStore = useWishlistStore();
const cartStore = useCartStore();

defineProps({
  handleCartOpen: {
    type: Function,
  },
})

</script>

<template>
  <div class="header">
    <div class="header__container">
      <div class="wish__list">
        <button>
          <Counter :count="wishlistStore.countWishlist" />
          <img :src="heart" alt="heart" width="20">
        </button>
        <span>Обране</span>
      </div>
      <div class="cart__list">
        <button @click="handleCartOpen">
          <Counter :count="cartStore.countCart" />
          <img :src="cart" alt="cart" width="20">
        </button>
        <span>Кошик</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.wish__list,
.cart__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.wish__list button,
.cart__list button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>