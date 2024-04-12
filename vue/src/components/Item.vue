<script setup>
import { ref } from 'vue';
import heart from '../images/heart.svg';
import cart from '../images/cart.svg';

const MAX_QUANTITY = 31;
const MIN_QUANTITY = 1;

defineProps({
  item: {
    type: Object,
  },

  addItemToCart: {
    type: Function,
    default: () => { }
  },

  toggleWishlistItem: {
    type: Function,
    default: (id) => {
      console.log(id)
    }
  }
});

const formatCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
});

const quantity = ref(1);
</script>

<template>
  <div class="item">
    <div class="item__info">
      <h4 class="item__title">{{ item.title }}</h4>
      <span class="item__category">{{ item.category }}</span>
      <span class="item__description">{{ item.description }}</span>
      <span class="item__price">{{ formatCurrency.format(item.price) }}</span>
      <span class="item__quantity">
        Quantity: <input id="quantity" class="count__quantity" type="number" v-model.number="quantity"
          :max="MAX_QUANTITY" :min="MIN_QUANTITY" />
      </span>
      <div class="item__buttons">
        <button class="item__button" @click="toggleWishlistItem(item.id)">
          Add to <img :src="heart" alt="heart" width="15" />
        </button>
        <button class="item__button" @click="addItemToCart(item, quantity)">
          Add to <img :src="cart" alt="cart" width="15" />
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  width: 400px;
  border: 2px solid #fff;
}

.item__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
}

.item__buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item__button {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  width: 120px;
  color: #000;
  border: 1px solid black;
  text-align: center;
}
</style>