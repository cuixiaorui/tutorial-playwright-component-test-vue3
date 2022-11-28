<template>
  <div>
    <h1>Counter</h1>
    <div>
      <div id="count">{{ count }}</div>
      <button id="increaseBtn" @click="handleIncrease">increase</button>
      <button id="decreaseBtn" @click="handleDecrease">decrease</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  initCount: number;
  min?: number;
  max?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initCount: 0,
  min: 0,
  max: 10,
});

const count = ref(props.initCount);
function handleIncrease() {
  if (count.value >= props.max) {
    return;
  }
  count.value++;
}

function handleDecrease() {
  if (count.value <= props.min) {
    return;
  }
  count.value--;
}
</script>

<style lang="scss" scoped></style>
