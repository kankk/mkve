<template>
  <a-layout direction="vertical" class="mk-layout">
    <mk-header />
    <a-layout direction="horizontal">
      <mk-aside />
      <mk-content />
    </a-layout>
  </a-layout>
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

<style lang="scss" scoped>
.mk-layout {
  height: 100%;
}
</style>
