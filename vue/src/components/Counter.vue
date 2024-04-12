<template>
  <div class="counter">
    <span class="counter__count">{{ count }}</span>
  </div>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
  },
})

</script>

<style>
.counter {
  position: relative;
}

.counter__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -15px;
  border-radius: 50%;
  background-color: orangered;
  color: #fff;
  min-width: 20px;
  min-height: 20px;
  font-size: 14px;
  font-weight: 600;
}
</style>