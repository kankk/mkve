<template>
  <a-layout-sider class="mk-aside">
    Aside
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MkAside',
});
</script>

<style lang="scss" scoped>
.mk-aside {
  width: 200px
}
</style>
