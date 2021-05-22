<template>
  <div id="app">
    <router-view />
    <tabbar-main></tabbar-main>
  </div>
</template>
<script>
import tabbarMain from 'components/content/tabbarMain.vue';
export default {
  name: 'App',
  components: {
    tabbarMain
  }
};
</script>
<style>
@import 'assets/css/base.css';
</style>
