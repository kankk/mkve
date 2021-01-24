<template>
  <a-layout-sider class="mk-aside">
    <a-menu
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu :key="first.id" v-for="first of menus">
        <template #title>
          <span>{{ first.name }}</span>
        </template>
        <a-menu-item :key="second.id" v-for="second of first.children" >
          <router-link :to="second.path">{{ second.name }}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAsideMenu } from '../routers/routes';

export default defineComponent({
  name: 'MkAside',
  data() {
    return {
      menus: getAsideMenu(),
    };
  },
});
</script>

<style lang="scss" scoped>
.mk-aside {
  width: 200px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
