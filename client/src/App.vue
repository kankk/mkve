<template>
  <div>
    <div>App</div>
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/detail">Go to Detail</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
</style>
