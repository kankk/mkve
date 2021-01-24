<template>
  <a-layout-header class="mk-header">
    Header
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MkHeader',
});
</script>

<style lang="scss" scoped>
.mk-header {
  height: 40px;
}
</style>
