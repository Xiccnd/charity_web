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
              <span> 待定项目</span>
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
                <a href="javascript:void(0);" v-on:click="volunteer_center">修改资料</a>
                 <a href="javascript:void(0);"
                    class="router-link-exact-active router-link-active active"
                    aria-current="page">我的项目</a>
                 <a v-on:click="myTeam" class="">我的队伍</a>
              </div>
            </li>
          </ul>
        </li>
        <div id="updatedata">
          <li class="col v-t white tab-container">
            <!-- <div id="updatemenu" class="tabbar tabbar-tight mb-30">
              <a
                href="#/chongqing/updatedata"
                aria-current="page"
                class="router-link-exact-active router-link-active active"
                >我的项目</a
              >
              <a href="#/chongqing/updateiden" class="">待定项目</a>
            </div> -->
            <div class="tabbar tabbar-tight mb-20 row w">
                <span data-a="1" class="col v-m" v-on:click="myProject">我的项目</span>
                <span data-a="2" class="col v-m active">待定项目</span>
                <div class="col v-m t-r twoIteam">
                    <a class="button button-normal" v-on:click="refresh()">项目同步</a>
                    <a class="button button-normal" v-on:click="moreProject()">参加更多项目</a>
                </div>
            </div>
            <table class="user-table" style="text-align: center">
              <tr class="iteamName">
                <th style="width: 20%">项目名称</th>
                <th style="width: 20%">联系方式</th>
                <th style="width: 20%">申请时间</th>
                <th style="width: 20%">岗位</th>
                <th style="width: 10%">状态</th>
                <th style="width: 10%">操作</th>
              </tr>
              <tr v-for="item in allProject" style="height: 50px;">
                <td><a v-on:click="toDetail(item.pid)">{{item.pname}}</a></td>
                <td>{{item.telephone}}</td>
                <td>{{item.joinTime}}</td>
                <td>{{item.postName}}</td>
                <td>{{item.statusName}}</td>
                <td>
                  <a v-if="item.statusName === '审核中'" v-on:click="cancelApply(item.pid)">取消申请</a>
                  <a v-if="item.statusName === '取消中'" v-on:click="reApply(item.pid)">重新申请</a>
                </td>
              </tr>
            </table>
          </li>
        </div>
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
      allProject: [
        {
          pid: "",
          pname: "",
          telephone: "",
          joinTime: "",
          postName: "",
          statusName: "",
        }
      ]
    }
  },
  methods: {
    cancelApply: function (id) {
      this.$http({
        url: "/volunteersProject/upData",
        method: "GET",
        params: {
          name: localStorage.getItem("username"),
          pid: id
        }
      }).then(res => {
        location.reload();
      }).catch(err => {
        console.log(err);
        alert('出错了！');
      })
    },
    reApply: function (id) {
      this.$http({
        url: "/volunteersProject/upData2",
        method: "GET",
        params: {
          name: localStorage.getItem("username"),
          pid: id
        }
      }).then(res => {
        location.reload()
      }).catch(err => {
        console.log(err);
        alert('出错了！');
      })
    },
    toDetail: function (id) {
      this.$router.push("/volunteer_program/volunteer_program_details?id=" + id)
    },
    getProject: function () {
      this.$http({
        url: "/volunteersProject/myJoinInProject",
        method: "POST",
        data: {
          name: localStorage.getItem("username")
        }
      }).then(res =>{
        this.allProject = res.data;
      }).catch(err => {
        console.log(err);
      })
    },
    refresh: function () {
      location.reload();
    },
    moreProject: function () {
      this.$router.push("/volunteer_program")
    },
    myProject: function (){
      this.$router.push("/myProject")
    },
    myTeam: function (){
      this.$router.push("/myTeam")
    },
    volunteer_center: function (){
      this.$router.push("/volunteer_center")
    }
  },
  mounted() {
    this.getProject();
  }
};
</script >

<style scoped>
#usermenu {
  width: 90%;
  opacity: 0.74;
}
.user-table{
    width: 100%;
    border: 1px solid #f0f0f0;
    margin-bottom: 30px;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
}
.iteamName{
    background: rgb(255, 240, 241);
    font-family: "Microsoft YaHei";
    font-size: 14px;
    height: 40px;
}
.iteamName th{
    padding-left: 10px;
    font-weight: 400 !important;
}
.twoIteam a{
    height: 30px;
    line-height: 30px;
    color: #fff !important;
    padding-top: 0 !important;
    margin: 0 10px !important;
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
table tr td a:hover{
  color: red;
  cursor: pointer;
}
</style>