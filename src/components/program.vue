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
            <table class="table table-hover">
              <thead>
              <tr>
                <th>
                  项目名称
                </th>
                <th>
                  联系方式
                </th>
                <th>
                  加入时间
                </th>
                <th>
                  岗位
                </th>
                <th>
                  状态
                </th>
                <th>
                  操作
                </th>

              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  TB - Monthly
                </td>
                <td>
                  01/04/2012
                </td>
                <td>
                  Default
                </td>
                <td>
                  Default
                </td>
                <td>
                  Default
                </td>
              </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
<script>
export default {}
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

.table th {
  text-align: center;
}

</style>