<template>
  <div>
    <p>Home</p>
    <div>
      <button @click="$store.commit('counter/increment')">increment</button>
      <button @click="$store.commit('counter/reduction')">reduction</button>
    </div>
    <div>
      <span>count: {{ $store.state.counter.count }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  mounted() {
    console.log(this.$store);
  },
});
</script>
