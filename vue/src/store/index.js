import { defineStore } from 'pinia'


export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlist: []
  }),

  getters: {
    countWishlist: (state) => state.wishlist.length
  },

  actions: {
    addToWishlist(id) {
      this.wishlist.push(id)
    },

    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter((itemId) => itemId !== id)
    },

    toggleWishlistItem(id) {
      const isItemInWishlist = this.wishlist.includes(id)

      if (isItemInWishlist) {
        this.removeFromWishlist(id)
      } else {
        this.addToWishlist(id)
      }
    }
  }
})

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  getters: {
    countCart: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0)
  },

  actions: {
    addItemToCart(item, quantity) {
      const cartItem = this.cart.find(({ id }) => id === item.id)

      if (cartItem) {
        const newQuantity = cartItem.quantity + quantity
        this.updateItemQuantity(item.id, newQuantity)
      } else {
        this.cart.push({ ...item, quantity })
      }
    },

    removeItemFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
    },

    handleCartClear() {
      this.cart = []
    },

    updateItemQuantity(id, quantity) {
      const index = this.cart.findIndex((item) => item.id === id)

      this.cart[index] = { ...this.cart[index], quantity }
    }
  }
})
