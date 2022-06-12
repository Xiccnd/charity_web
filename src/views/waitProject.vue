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
            <table class="user-table" >
                <colgroup>
                <col width="25%">
                <col width="18%">
                <col width="15%">
                <col width="12%">
                <!-- <col width="10%">  -->
                <col width="13%">
                <col width="19%">
                </colgroup> 
                <tr class="iteamName">
                    <th>项目名称</th>
                    <th>联系方式</th>
                    <th>申请时间</th>
                    <th>岗位</th>
                    <!-- <th>服务时长</th>  -->
                    <th>状态</th>
                    <th>操作</th>
                </tr> 
                <tr>
                    <td colspan="7" style="text-align: center; border-bottom: 1px rgb(246, 243, 247);"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC">
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
  methods: {
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

</style>