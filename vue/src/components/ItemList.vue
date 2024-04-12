<script setup>
import Item from './Item.vue';

import { useWishlistStore, useCartStore } from '../store';
const { toggleWishlistItem } = useWishlistStore();
const { addItemToCart } = useCartStore();

defineProps({
  data: {
    type: Array,
  },
})

</script>

<template>
  <div class="grid">
    <Item v-for="item in data" :key="item.id" :item="item" :toggleWishlistItem :addItemToCart />
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
</style>