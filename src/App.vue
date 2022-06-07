<template>
  <Header></Header>
  <Navigation-bar></Navigation-bar>
  <div>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from "../src/components/footer.vue";
import Header from "../src/components/header.vue";
import NavigationBar from "../src/components/navigationBar.vue";
export default {
  name: "App",
  components: {
    Footer,
    Header,
    NavigationBar
  },
  methods: {},
};
</script>

<style>
@import "./assets/css/base.css";
.w {
  width: 100%;
}
.row::before{
  content: none;
}
.row::after{
  content: none;
}
.row {
  display: table;
  table-layout: fixed;
  box-sizing: border-box;
}
.mid {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.v-t {
  vertical-align: top;
}
.col {
  display: table-cell;
  box-sizing: border-box;
}
.v-m {
  vertical-align: middle;
}
.list-margin{
    margin: 0;
}
.g-18 {
    width: 75%;
}
.g-16 {
    width: 66.66%;
}
.t-l {
    text-align: left;
}
.t-r {
    text-align: right;
}
.js-top-bar .login-box a, .js-top-bar .login-box span, .js-top-bar .login-box img {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    color: #666;
    margin-left: 7px;
    /* margin-right: 2px; */
}
.col .login-box .a:hover, .red {
    color: red!important;
}
.login-box a:first-of-type {
    color: #e60012 !important;
}
.js-top-bar .js-search input, .js-top-bar .js-search button {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    outline: none;
    border: none;
}
</style>
