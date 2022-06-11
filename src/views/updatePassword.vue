<template>
  <login-head></login-head>
  <div class="main bannerimg">
    <div class="mid">
      <ul class="row w">
        <li class="col">
          <guidebar>
            <template v-slot:pp>
              <span class="">首页</span>
            </template>
            <template v-slot:cp>
              <span> 用户中心</span>
            </template>
            <template v-slot:tp>
              <span> 修改密码</span>
            </template>
          </guidebar>
        </li>
      </ul>
      <ul class="row w">
        <li class="col v-t" style="width: 130px !important">
          <ul
              id="usermenu"
              class="navbar"
              style="background: rgb(255, 255, 255)"
          >
            <li class="active">
              <em>用户中心<i>&gt;</i></em>
              <div>
                <a
                  href="javascript:void(0);"
                  class="router-link-exact-active router-link-active active"
                  aria-current="page"
                  >修改资料</a>
                 <a href="javascript:void(0);" v-on:click="myProject" class="">我的项目</a>
                 <a href="javascript:void(0);" v-on:click="myTeam" class="">我的队伍</a>
              </div>
            </li>
          </ul>
        </li>
          <li class="col v-t white tab-container" id="thisLi">
            <div id="updatemenu" class="tabbar tabbar-tight mb-30">
              <a
                  href="javascript:void(0)"
                  v-on:click="volunteer_center"
              >基本信息</a
              >
              <a 
                  href="javascript:void(0);" 
                  aria-current="page"
                  class="router-link-exact-active router-link-active active"
                >修改密码</a>
            </div>
            <form data-v-596866b0="" id="pwForm">
               <div data-v-596866b0="" class="grid g-14 auto">
                   <div data-v-596866b0="" class="form">
                       <p data-v-596866b0="" class="form-label">
                           <em data-v-596866b0="">*</em>原密码：
                        </p> 
                        <input data-v-596866b0="" type="password" id="oldPw" maxlength="20" placeholder="请输入原密码" style="opacity:0.7"  v-on:blur="oldPasswordFunc()">
                        <p data-v-596866b0="" id="oldPwTips" class="form-error" style="color: red;" v-show="oldPassword">原密码不能为空</p>
                    </div> 
                        <div data-v-596866b0="" class="form">
                            <p data-v-596866b0="" class="form-label">
                                <em data-v-596866b0="">*</em>新密码：
                            </p> 
                            <input data-v-596866b0="" type="password" id="newPw" maxlength="20" placeholder="请输入新密码" style="opacity:0.7" v-on:blur="newPasswordFunc()">
                            <p data-v-596866b0="" id="newPwTips" class="form-error" style="color: red;" v-show="newPassword">新密码不能为空</p>
                        </div> 
                        <div data-v-596866b0="" class="form">
                            <p data-v-596866b0="" class="form-label">
                                <em data-v-596866b0="">*</em>确认新密码：
                            </p> 
                            <input data-v-596866b0="" type="password" id="confirmPw" maxlength="20" placeholder="请输入确认新密码" style="opacity:0.7" v-on:blur="checkPasswordFunc()">
                            <p data-v-596866b0="" id="confirmPwTips" class="form-error" style="color: red;" v-show="checkPassword">确认新密码不能为空</p>
                        </div> 
                        <div data-v-596866b0="" class="pt-30 pb-40 t-c">
                            <a data-v-596866b0="" href="javascript:void(0);" class="button" style="width: 200px; margin-top: 10px" v-on:click="updatePassword()">修改密码</a>
                        </div>
                </div>
            </form>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Guidebar from "@/components/guidebar";
import LoginHead from "@/components/login_head";


export default {
  components: {
    Guidebar,
    LoginHead,
  },
  data() {
    return {
      oldPassword: false,
      newPassword: false,
      checkPassword: false,
    }
  },
  methods: {
    oldPasswordFunc: function () {
      let oldPasswordText = document.getElementById('oldPw').value;
      this.oldPassword = oldPasswordText === "";
      if (document.getElementById('newPw').value !== "" && document.getElementById('newPw').value !== oldPasswordText) {
        this.newPassword = false;
      } else if (document.getElementById('newPw').value !== "" && document.getElementById('newPw').value === oldPasswordText) {
        this.newPassword = true;
      }
    },
    newPasswordFunc: function () {
      let newPasswordText = document.getElementById('newPw').value;
      if (newPasswordText === "") {
        document.getElementById('newPwTips').innerHTML = "新密码不能为空";
        this.newPassword = true;
      } else if (newPasswordText === document.getElementById('oldPw').value) {
        document.getElementById('newPwTips').innerHTML = "新密码不能和原密码相同";
        this.newPassword = true;
      } else {
        this.newPassword = false;
      }
      if (document.getElementById('confirmPw').value !== "" && document.getElementById('confirmPw').value === newPasswordText) {
        this.checkPassword = false;
      } else if (document.getElementById('confirmPw').value !== "" && document.getElementById('confirmPw').value !== newPasswordText){
        this.checkPassword = true;
      }
    },
    checkPasswordFunc: function () {
      let checkPasswordText = document.getElementById('confirmPw').value;
      if (checkPasswordText === "") {
        document.getElementById('confirmPwTips').innerHTML = "确认新密码不能为空";
        this.checkPassword = true;
      } else if (checkPasswordText !== document.getElementById('newPw').value) {
        document.getElementById('confirmPwTips').innerHTML = "确认新密码和新密码不匹配";
        this.checkPassword = true;
      } else {
        this.checkPassword = false;
      }
    },
    updatePassword: function () {
      if (document.getElementById('oldPw').value === "") {
        alert('原密码不能为空');
      } else if (document.getElementById('newPw').value === "") {
        alert('新密码不能为空');
      } else if (this.newPassword) {
        alert('新密码不能和原密码相同');
      } else if (document.getElementById('confirmPw').value === "") {
        alert('确认新密码不能为空');
      } else if (this.checkPassword) {
        alert('确认新密码和新密码不匹配');
      } else {
        this.$http({
          url: "/user/update",
          method: "POST",
          data: {
            user: {
              name: localStorage.getItem("username"),
              password: document.getElementById('oldPw').value,
            },
            newPasswordValue: document.getElementById('confirmPw').value
          }
        }).then(res => {
          console.log(res);
          if (res.data === 1) {
            alert('修改密码成功');
            localStorage.clear();
            this.$router.push("/volunteer_login")
          } else if (res.data === -1) {
            alert('原密码错误');
            document.getElementById('oldPw').value = "";
          } else {
            alert('修改失败');
            location.reload();
          }
        }).catch(err => {
          alert('修改失败');
          location.reload();
          console.log(err);
        })
      }
    },
    volunteer_center: function (){
      console.log("tiaotiaotiao")
      this.$router.push("/volunteer_center")
    },
    myProject: function (){
      this.$router.push("/myProject")
    },
    myTeam: function (){
      this.$router.push("/myTeam")
    }
  },
  mounted: function () {
    // eslint-disable-next-line no-empty
    if (localStorage.getItem("username") != null) {
    } else {
      this.$router.push("/volunteer_login")
    }
  }
};
</script>
<style scoped>
#usermenu {
  width: 90%;
  opacity: 0.74;
}
#thisLi{
  width: 100%;
}
.auto {
    margin: 0 auto;
}
.g-14 {
    width: 58.33%;
}
.form {
    padding-left: 0;
    margin-right: 20px;
    padding: 5px 0 0 20px;
    position: relative;
}
.form-label {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
    white-space: pre;
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
.pwd_img[data-v-596866b0] {
    bottom: 28px;
}
.navbar {
  text-align: center;
  width: 110px;
  border: 1px solid #f0f0f0;
}

.navbar > .active em {
  font-weight: 700;
}

.navbar em {
  display: block;
  font-size: 14px;
  color: #333;
  background: #f5f5f5;
  line-height: 40px;
  font-weight: normal;
}

.navbar > .active em i {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.navbar em i {
  margin-left: 5px;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.navbar > .active > div {
  display: block;
}

.navbar a.active,
.navbar a:hover {
  background: linear-gradient(
      90deg,
      rgba(255, 211, 211, 1) 0%,
      rgba(255, 246, 246, 1) 100%
  );
  border-color: #cc0000;
}

.navbar a.active {
  font-weight: bold;
}

.navbar a.active,
.navbar a:hover {
  color: #e60012;
}

.navbar a {
  border-left: 4px solid transparent;
}

.navbar a {
  display: block;
  font-size: 14px;
  color: #8d8d8d;
  line-height: 45px;
  position: relative;
}

.tab-container {
  padding: 0 36px;
}

.tabbar.tabbar-tight {
  /* display: none; */
  margin: 36px 0;
}

.tabbar-tight span,
.tabbar-tight a {
  padding-top: 10px;
}

.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}

.form {
  padding: 5px 0 0 20px;
  position: relative;
}

p {
  font-size: 14px;
}

.select {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.select select {
  -webkit-appearance: none;
  display: inline-block;
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  border: 0;
  position: relative;
  z-index: 3;
  background: transparent;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
}

.select:after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 8px;
  background: url(../assets/images/center/arrow.png);
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -4px;
}

.form .button-line {
  width: 80px;
  margin-top: 0;
  padding: 0;
}

.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}

.upload {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.avatar-upload-small .button-line {
  width: 130px;
  padding: 0;
  font-size: 12px;
  height: 30px;
  line-height: 28px;
}

.avatar-upload {
  text-align: center;
  margin-bottom: 40px;
}

.avatar-upload-small .avatar-upload-wrap {
  width: 110px;
  height: 150px;
  margin-top: 0;
}

.avatar-upload-wrap {
  width: 158px;
  height: 196px;
  margin: 20px auto;
}

.avatar-upload-wrap img {
  border: 1px solid #ededed;
}

.cropperBox,
.cropperBox1,
.cropperBox2,
.cropperBox3 {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 840px;
  margin: -2000px 0 0 -400px;
  padding: 10px;
  background-color: #f5f5f5;
  opacity: 0;
  transition: margin-top 1s, opacity 1s;
  -moz-transition: margin-top 1s, opacity 1s, -moz-transform 1s;
  z-index: 9999;
}

.cropperInner {
  width: 800px;
  height: 520px;
  padding: 10px;
}

.btnCropper,
.btnCancel {
  width: 70px;
  height: 30px;
  margin-left: 10px;
  background-color: red;
  color: #fff;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.btnCancel {
  background-color: #ccc;
  border-color: #ccc;
}

.btnCropper,
.btnCancel {
  width: 70px;
  height: 30px;
  margin-left: 10px;
  background-color: red;
  color: #fff;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.introjs-tips {
  margin-left: 10px;
  color: #999;
  font-size: 13px;
}

.jcrop-preview,
.preview {
  background-color: #fff;
  overflow: hidden;
}

.jcrop-preview {
  position: fixed;
  right: 20px;
  top: 20px;
}

.form .form-error {
  padding-top: 5px;
  height: 17px;
}

.grid-item:nth-child(2) .form {
  margin-right: 0;
}

</style>