<template>
  <div>
    <p>Detail</p>
    <p>Username: {{ $store.state.system.username }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Detail',
});
</script>
