<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div style="width:220px;height: 60px;">
          <ul class="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Library</a>
            </li>
            <li class="active">
              我的首页
            </li>
          </ul>
        </div>
      </div>

      <div class="left_nav">
        <ul>
          <li>
            <router-link to="/user">个人资料</router-link>
          </li>
          <li>
            <router-link to="/program">我的项目</router-link>
          </li>
          <li>
            <router-link to="/team">我的队伍</router-link>
          </li>
        </ul>
      </div>

      <div style="float:right; width: 1000px;">

        <div class="col-md-12 column">
          <div class="row clearfix">
            <div class="col-md-6 column">
              <ul class="personal_profile_l">
                <li style="text-align:left;margin-left: 81px;">用户名：test</li>
                <li>姓名：<input type="text"/></li>
                <li>身份证号码：<input type="text"/></li>
                <li> 政治面貌：<input type="text"/></li>
                <li> 手机号码：<input type="text"/></li>
              </ul>

            </div>
            <div class="col-md-6 column">

              <ul class="personal_profile_r">

                <li>
                  头像：
                  <img width="80" height="100" src="" alt=""
                       style="border:1px solid #999;"
                       ondblclick="chooseImageFile('EmployeePicture')"/>
                  <input type="file" style="margin-top:5px"/>

                </li>
                <li> 民族：<input type="text"/></li>
                <li> 籍贯：<input type="text"/></li>
              </ul>


            </div>

            <button type="submit" class="btn btn-default btn-primary" style="text-align:center;margin-top:20px">保存修改
            </button>

          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {
  methods: {
    checkUser: function () {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (username != null && password != null) {
        alert("已登录")
      } else {
        alert('未登录')
      }
    }
  },
  mounted: function () {
    this.checkUser();
  }
}
</script>
<style>
.left_nav {
  width: 120px;
  float: left;
}

.left_nav ul {
  width: 120px;
}

.left_nav ul li {
  height: 45px;
  line-height: 45px;
}

.personal_profile_l li {
  margin-left: 0;
  margin-top: 20px;
  width: 320px;
  text-align: right;
}

.personal_profile_r li {

  margin-top: 15px;
  width: 320px;
  text-align: left;
}

</style>