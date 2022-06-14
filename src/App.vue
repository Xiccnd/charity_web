<template>
  <div>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: "App",
  components: {
   Footer
  },
};
</script>
<style>
@import "./assets/css/base.css";
.white {
    background: #fff;
}
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
.g-12 {
    width: 50%;
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
.t-c {
    text-align: center;
}
.g-16 {
    width: 66.66%;
}
.g-12 {
    width: 50%;
}
.pwd_img {
    position: absolute;
    right: 10px;
    bottom: 12px;
    width: 26px;
    cursor: pointer;
}
.form {
    padding-left: 0 !important;
    margin-right: 20px;
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
.label {
    font-size: 14px;
    color: #333;
    margin-right: 5px;
}
em, i {
    font-style: normal;
}
.tabbar {
  background: #fff0f1;
  height: 50px;
}

.tabbar span.active,
.tabbar a.active {
  color: #e60012;
  font-weight: bold;
  border-bottom: 3px solid #e60012;
}

.tabbar-tight {
    height: 40px;
}
.tabbar span,
.tabbar a {
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  color: #333;
  padding-top: 15px;
  padding-bottom: 5px;
  margin: 0 20px;
  transition: 0.3s;
}
.form-label em {
    color: #f00;
}
.form input[type="text"] {
    height: 42px !important;
}
.form input{
    height: 42px;
    line-height: 42px;
}
.form input, .form textarea, .input, .textarea {
    width: 100%;
    font-size: 14px;
    color: #333;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #dfdfdf;
    padding-left: 15px;
    transition: 0.3s;
    box-sizing: border-box;
}
.form-label {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
    white-space: pre;
}
.warn-tip{
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURf+mOf+nOEdwTP+nOP+vMP+nOP+mOf+nOP+nOfJbFKsAAAAIdFJOU8/QAF0QQHDg0JdO1AAAAExJREFUCNdjUFLjaDBSYlDh6OhocGJQ7GiX6GBiyOho1ehoZpAAUQ0MHSCqA0ZJdLRzdDQClTR7AJUognhCDCoSHR2NTgxKyhKNRkoALAgZncZKVlgAAAAASUVORK5CYII=) 10px no-repeat;
    color: #666;
}
.pl-10 {
    padding-left: 10px;
}
.form-label em {
    color: #f00;
}
.form input[type="text"] {
    height: 42px !important;
}
.form input{
    height: 42px;
    line-height: 42px;
}
.button-line {
    border: 1px solid #e60012;
    color: #e60012;
    background: #fff;
    line-height: 38px;
}
.mt-neg19 {
    margin-top: -19px;
}
.p-rel {
    position: relative;
}
.avatar-upload .button-line {
    width: 150px;
    font-size: 16px;
    font-weight: bold;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    table-layout: fixed;
}
</style>
