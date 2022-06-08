<template>
  <Head></Head>
  <div id="login">
    <div class="main bannerimg">
      <div class="mid">
        <guidebar>
          <template v-slot:pp>
            <span class="" >首页</span>
          </template>
          <template v-slot:cp>
            <span > 志愿者登录</span>
          </template>
        </guidebar>
        <div class="row w login">
          <div class="col v-t">
            <img src="../assets/images/login/login.0c7d6f8.png" style="height: 460px; width: 754px;">
          </div>
          <div class="col v-t white">
            <h2 class="login_header">
              <div>
                <a href="#/chongqing/login/3" class="col v-m login-txt a_1">志愿队伍登录</a> 
                <a href="#/chongqing/login/2" aria-current="page" class="col v-m login-txt a_1 router-link-exact-active router-link-active" style="display: none;">志愿者登录</a>
              </div> 
                <a style="text-decoration: none;color:red">志愿者登录</a> 
                <a href="#/chongqing/login/1" class="a_2" style="color: rgb(153, 153, 153); font-size: 14px;">管理部门登录</a>
            </h2>
            <div class="login-wrap">
              <div class="login-input">
                <img src="../assets/images/login/head.png">
                <input type="text" id="username" placeholder="请输入用户名或身份证号码" maxlength="30" onchange="this.value=this.value.replace(/[^\w_.]/g,'')">
              </div>
              <span id="usernameTips" class="login-tips"></span> 
              <div class="login-input">
                <img src="../assets/images/login/password.png">
                <input type="password" id="password" placeholder="请输入密码" maxlength="30"> 
                <img src="../assets/images/login/closeeyes.png" alt="" class="pwd_img"> 
                <img src="../assets/images/login/openeyes.png" alt="" class="pwd_img" style="display: none;">
              </div> 
              <span id="passwordTips" class="login-tips"></span> 
              <div class="login-input" style="line-height: 2.1;">
                <img src="../assets/images/login/safe.png" alt="">
                <input type="text" placeholder="请输入验证码" id="code" maxlength="4" onchange="this.value=this.value.replace(/[^0-9a-zA-Z]/g,'')" style="display: inline-block; width: 60%;">
                <span id="imgCode" style="margin-left: 10px; cursor: pointer; border: 1px solid rgb(223, 223, 223); text-align: center; width: 35%; height: 46px; border-radius: 4px; float: right;">
                  <b style="font-size:20px;margin-left:1px;color: rgb(93,65,26)">X</b>&nbsp;<font style="font-size:20px;margin-left:1px;color: rgb(87,80,57)">K</font>&nbsp;
                  <i style="font-size:20px;margin-left:1px;color: rgb(145,21,0)">J</i>&nbsp;<font style="font-size:20px;margin-left:1px;color: rgb(72,40,119)">B</font>&nbsp;
                </span>
              </div> 
              <span id="imgCodeTips" class="login-tips">&nbsp;</span> 
              <a href="javascript:void(0);" class="button">登 录</a> 
              <div class="row w login_footer">
                <a href="#/chongqing/volreg" class="col v-m login-txt a_3 width1">立即注册</a> 
                <a href="#/chongqing/orgreg" class="col v-m login-txt a_4 width1" style="display: none;">立即注册</a>
                <a href="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/index.html#/forgetpwd1/1" id="Forgot_password" class="col v-m t-r login-txt a_5 width1">忘记密码?</a> 
                <a href="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/index.html#/findpwd" id="Account_appeal" class="col v-m t-r login-txt a_6 width1">账户申诉</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../components/login_head.vue'
import guidebar from "../components/guidebar.vue";
export default {
  components: {
    guidebar,
    Head
  }
}
</script>

<style scoped>
/* ======== main */
.login{
  box-shadow: 0 10px 20px #ddd;
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
/* ======== top */

/* ======== left */
.login > .col:first-child {
  width: 754px;
}

/* ======== right */
.white {
  background: #fff;
}
.login_header{
  text-align: center;
  position: relative;
}
.login h2 {
  font-size: 24px;
  color: #e60012;
  margin: 0;
  padding: 24px 0;
  text-align: center;
  font-weight: normal;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
}
.login_header a{
  width: 33.3%;
}

.login_header a {
  width: 33.3%;
}
.a_1,.a_2,.a_3,.a_4,.a_5,.a_6 {
  font-size: 15px!important;
  color: #666!important;
}
.a_1,.a_2 {
  position: absolute;
  top: 48px;
}
.login-txt {
  font-size: 14px;
  color: #999;
  transition: 0.3s;
}

.login-wrap {
  padding: 0 40px;
}
.login-input {
  margin: 5px 0;
  position: relative;
}
.login-input img {
  position: absolute;
  left: 15px;
  top: 15px;
}
.login-input img.pwd_img {
    left: 320px;
    top: 12px;
}
.login-input input {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  line-height: 36px;
  height: 48px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  padding: 0 20px;
  padding-left: 40px;
  transition: 0.3s;
}
.login-tips{
  display: inline-block;
  font-size: 14px;
}
.login-wrap .button {
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    margin-bottom: 20px;
}
.login_footer {
    margin-bottom: 10px;
}
.login_footer>a {
    font-size: 18px;
}
.width1,.width2[data-v-48baf364] {
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.width1 {
    width: 33.3%;
}
body .bannerimg {
  background: url(../assets/images/background/banner.1e1ab6c.png) no-repeat center top;
}
</style>