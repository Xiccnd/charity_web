  <template>
  <div id="header" class="js-top-bar header" style="padding-bottom: 15px">
    <div class="mid row">
      <div class="col t-l">
        <h1>
          <img src="../assets/images/header/logo.png" alt=""/>
          <b class="top_title">
            重庆志愿服务
            <b class="top_title1">中国志愿服务网</b>
            <span class="span_little">重庆</span>
          </b>
          <br/>
        </h1>
      </div>
      <div class="col t-r v-m">
        <div class="login-box" style="margin-bottom: -23px !important">
          <span>
            <a href="https://chinavolunteer.mca.gov.cn" target="_blank">中国志愿服务网</a>
          </span>
          <div style="display: inline-block"></div>
          <span class="red" @click="bthClick('/volunteer_login')" style="cursor: pointer" v-show="!isLogin">请登录</span>
          <span class="red" id="login_username" @click="bthClick('/volunteer_center')" style="cursor: pointer" v-show="isLogin"></span>
          <a href="javascript:void(0);" class="a" v-show="!isLogin" @click="bthClick('/volunteer_register')">志愿者注册</a> <span v-show="!isLogin">|</span>
          <a href="javascript:void(0);" class="a" v-show="!isLogin" @click="bthClick('/volunteer_team_register')">志愿队伍注册</a>
          <a href="javascript:void(0);" v-show="isLogin" v-on:click="logout()">注销</a>
          <img src="../assets/images/header/font.png" alt="" style="margin-bottom: 13px"/>
        </div>
        <div class="js-search" style="margin-top: -20px;overflow: visible;background: rgb(255, 255, 255);border:none">

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin : false
    }
  },
  methods:{
    bthClick(address) {
      this.$router.replace(address)
    },
    checkLoginUser: function () {
      const username = localStorage.getItem("username")
      let login_username = document.getElementById("login_username")
      if(username != null) {
        login_username.innerHTML = '你好！' + username
        // login_username.setAttribute("@click", "bthClick('/volunteer_center')")
        this.isLogin = true
      } else {
        login_username.innerHTML = ''
        this.isLogin = false
      }
    },
    logout:function () {
      // location.reload()
      this.$router.push("/volunteer_login")
      localStorage.clear()
      if (this.$route.path === "/volunteer_login") {
        location.reload()
      } else {
        this.$router.push("/volunteer_login")
      }
    }
  },
  mounted: function () {
    this.checkLoginUser()
    // console.log(this.isLogin);
  }
};
</script>

<style>
.js-top-bar h1 {
  position: relative;
  display: inline-block;
}

.top_title {
  font-size: 41px;
  font-weight: 700;
  letter-spacing: 7px;
  position: absolute;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  min-width: 18rem;
  left: 85px;
  top: -8px;
}

.top_title1 {
  font-size: 16px;
  font-weight: 600;
  letter-spacing: .4em;
  position: absolute;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  bottom: -30px;
  left: 0;
  width: 65%;
}

.js-top-bar h1 span {
  position: absolute;
  height: 28px;
  right: 0;
  background: #e60012;
  border-radius: 24px 24px 24px 24px;
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  color: #fff;
  font-family: "SourceHanSansCN-Bold";
}

.span_little {
  bottom: -30px;
  right: 11px;
  width: 35%;
}

.login-box {
  margin-top: -2px;
  margin-bottom: -15px;
}

.col .login-box span > a {
  color: #333 !important;
  font-weight: 700;
  line-height: 51px !important;
}

.col .login-box .a {
  color: #666 !important;
}

.js-top-bar .login-box img {
  margin-left: 10px;
}

.js-top-bar .js-search {
  display: inline-block;
  height: 37px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #e60012;
  font-size: 0;
  border-radius: 99px;
  overflow: hidden;
  /* margin-top: 16px; */
  margin-top: -10px;
}

.js-select {
  vertical-align: top;
  position: relative;
  display: inline-block;
  width: 90px;
  height: 100%;
}

b.js-select-core {
  display: inline-block;
  width: 100%;
  height: 36px;
  padding-left: 20px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  background: url(../assets/images/header/arror.png) no-repeat right 0px center / 9px;
  box-sizing: border-box;
  cursor: pointer;
}

ul.js-select-options {
  display: none;
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 999;
  width: 100%;
  background: #fff;
  box-shadow: 0 0 12px rgb(0 0 0 / 10%);
}

select-options .active {
  color: #cc0204;
}

.js-select-options li {
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: #333333;
  cursor: pointer;
}

.js-top-bar .js-search input {
  width: 490px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 15px;
  color: #333;
  font-size: 14px;
}

.js-top-bar .js-search button {
  width: 60px;
  background: #e60012 url(../assets/images/header/search.png) no-repeat center center;
}
</style>