<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue'
import ItemList from './components/ItemList.vue'
import Cart from './components/Cart.vue';
import Footer from './components/Footer.vue';
import data from './data/pdp.json';

const isCartOpen = ref(false);

const handleCartOpen = () => {
 isCartOpen.value = true;
}

const handleCartClose = () => {
  isCartOpen.value = false;
}
</script>

<template>
  <div class="container">
    <Header :handleCartOpen />
    <ItemList :data="data" />
    <Cart :isCartOpen :handleCartClose />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}
</style>