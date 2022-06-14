<template>
  <Head></Head>
  <div id="login">
    <div class="main bannerimg">
      <div class="mid">
        <guidebar>
          <template v-slot:pp>
            <span class="">首页</span>
          </template>
          <template v-slot:cp>
            <span> 志愿者登录</span>
          </template>
        </guidebar>
        <div class="row w login">
          <div class="col v-t">
            <img src="../assets/images/login/login.0c7d6f8.png" style="height: 460px; width: 754px;">
          </div>
          <div class="col v-t white">
            <h2 class="login_header">
              <div>
                <a href="#/chongqing/login/3" class="col v-m login-txt a_1" @click="myfun">{{ a }}</a>
                <a href="#/chongqing/login/2" aria-current="page"
                   class="col v-m login-txt a_1 router-link-exact-active router-link-active" style="display: none;">志愿者登录</a>
              </div>
              <a style="text-decoration: none;color:red">{{ b }}</a>
              <a href="#/chongqing/login/1" class="a_2" style="color: rgb(153, 153, 153); font-size: 14px;">管理部门登录</a>
            </h2>
            <div class="login-wrap">
              <div class="login-input">
                <img src="../assets/images/login/head.png">
                <input type="text" id="username" placeholder="请输入用户名" v-on:blur="checkUsername"/>
              </div>
              <span id="usernameTips" class="login-tips" v-show="username"></span>
              <div class="login-input" style="margin-top: 20px;">
                <img src="../assets/images/login/password.png">
                <input type="password" id="password" placeholder="请输入密码" v-on:blur="checkPassword">
              </div>
              <span id="passwordTips" class="login-tips" v-show="password"></span>
              <a class="button" v-on:click="login()" style="margin-top: 30px">登 录</a>
              <span id="imgCodeTips" class="login-tips">&nbsp;</span>
              <div class="row w login_footer">
                <a class="col v-m login-txt a_3 width1" v-on:click="toRegister">立即注册</a>
                <a href="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/index.html#/forgetpwd1/1" id="Forgot_password"
                   class="col v-m t-r login-txt a_5 width1">忘记密码?</a>
                <a href="https://chinavolunteer.mca.gov.cn/NVSI/LEAP/site/index.html#/findpwd" id="Account_appeal"
                   class="col v-m t-r login-txt a_6 width1">账户申诉</a>
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
  data(){
    return{
      a:"志愿队伍登录",
      b:"志愿者登录",
      as:"",
      bs:"display: none",
      username: false,
      password: false
    }
  },
  components: {
    guidebar,
    Head
  },
  methods: {
    checkUsername: function () {
      if (document.getElementById('username').value === "") {
        document.getElementById('usernameTips').innerHTML = "用户名不能为空";
        this.username = true;
      } else {
        this.username = false;
      }
    },
    checkPassword: function () {
      if (document.getElementById('password').value === "") {
        document.getElementById('passwordTips').innerHTML = "密码不能为空";
        this.password = true;
      } else {
        this.password = false;
      }
    },
    login: function () {
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      if (document.getElementById('username').value === "") {
        alert('用户名不能为空')
      } else if (document.getElementById('password').value === "") {
        alert('密码不能为空')
      } else {
        this.$http.post("/user/Login",
            {
              name:username,
              password:password
            },
        ).then(res => {
          if (res.data === -2) {
            alert("用户名不存在！");
            document.getElementById('username').value = "";
          } else if (res.data === -1) {
            alert("密码错误！");
            document.getElementById('password').value = "";
          } else {
            localStorage.setItem("username", username)
            localStorage.setItem("perId", res.data)
            document.getElementById('password').value = ''
            this.$router.push("center")
          }
        }).catch(err => {
          console.log(err);
        })
      }
    },

    myfun(){
      var c = this.a
      var cs = this.as
      this.as=this.bs
      this.bs=cs
      this.a=this.b
      this.b=c

    },
    toRegister: function () {
      this.$router.push("/volunteer_register")
    }
  }
}
</script>

<style scoped>
/* ======== main */
.login {
  box-shadow: 0 10px 20px #ddd;
}

.w {
  width: 100%;
}

.row::before {
  content: none;
}

.row::after {
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

.login_header {
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

.login_header a {
  width: 33.3%;
}

.login_header a {
  width: 33.3%;
}

.a_1, .a_2, .a_3, .a_4, .a_5, .a_6 {
  font-size: 15px !important;
  color: #666 !important;
}

.a_1, .a_2 {
  position: absolute;
  top: 48px;
}

.login-txt {
  font-size: 14px;
  color: #999;
  transition: 0.3s;
}

.login-txt:hover {
  cursor: pointer;
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

.login-tips {
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

.login_footer > a {
  font-size: 18px;
}

.width1, .width2[data-v-48baf364] {
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
.login-tips{
  display: inline-block;
  font-size: 14px;
  color: red;
}
</style>