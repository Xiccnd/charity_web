<template>
  <Header></Header>
  <Banner></Banner>
  <navigation-bar></navigation-bar>
</template>

<script>
import Banner from './banner.vue';
import Header from "./header.vue";
import NavigationBar from './navigation_bar.vue';
export default {
 components:{
   Header,
   NavigationBar,
   Banner,
 }
}
</script>

<style scoped>
.header {
    position: absolute;
    width: 100%;
}
</style>