<template>
  <mk-layout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MkLayout from '@layouts/mk-layout.vue';

export default defineComponent({
  name: 'App',
  components: {
    MkLayout,
  },
});
</script>

<style>
#app {
  height: 100vh;
}
</style>
