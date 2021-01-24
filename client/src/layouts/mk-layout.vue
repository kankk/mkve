<template>
  <el-container direction="vertical" class="layout-container">
    <mk-header />
    <el-container direction="horizontal">
      <mk-aside />
      <mk-content />
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MkHeader from '@layouts/mk-header.vue';
import MkAside from '@layouts/mk-aside.vue';
import MkContent from '@layouts/mk-content.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    MkHeader,
    MkAside,
    MkContent,
  },
});
</script>

<style lang="scss">
.layout-container {
  height: 100%;
}
</style>
