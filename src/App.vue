<template>
  <div id="app">
    <HeaderNav>123</HeaderNav>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
