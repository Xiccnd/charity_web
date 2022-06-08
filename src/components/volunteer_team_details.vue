<!--  -->
<template>
  <div id="all">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 text-left">
              <img src="..\assets\images\3.png" style="width: 260px; height: 170px"/>
            </div>
            <div class="col-md-6">
              <div class="row h2">
                <p class="text-left">{{ volunteer_team.Team_name }}</p>
              </div>
              <div class="row pt-5">
                <p class="text-left">编号：{{ volunteer_team.Teamid }}</p>
              </div>
              <div class="row pt-5">
                <p class="text-left">分享到：
                  &nbsp;<img src="..\assets\images\4.png"/>
                  &nbsp;<img src="..\assets\images\5.png"/>
                  &nbsp;<img src="..\assets\images\6.png"/>
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <table class="table">
              <tbody>
              <tr>
                <td class="col-md-6 text-left">登记部门：{{ volunteer_team.Regis_department }}</td>
                <td class="col-md-6 text-left">登记机关：{{ volunteer_team.registration_authority }}</td>
              </tr>
              <tr>
                <td class="col-md-6 text-left">成立日期：{{ volunteer_team.Register_date }}</td>
                <td class="col-md-6 text-left">联络组织：{{ volunteer_team.Liaison_organization }}</td>
              </tr>
              <tr>
                <td colspan="2" class="col-md-6 text-left">地址：{{ volunteer_team.address }}</td>
              </tr>
              <tr>
                <td class="col-md-6 text-left" style="height: 50px;line-height: 50px">队伍简介:</td>
                <td class="col-md-6 text-right" style="height: 50px;line-height: 50px">
                  <button type="button" class="btn btn-default" v-on:click="myfun()">{{ btn }}</button>
                </td>
              </tr>
              <tr>
                <td colspan="2" class="text-left">
                  <p>{{ volunteer_team.Team_profile }}</p></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="row h3 text-left" style="border-left: red solid 5px;padding-left: 15px">队伍联系人</div>
              <div class="row">
                <div class="row text-left h4" style="margin-top: 30px">{{ volunteer_team.contact }}</div>
                <div class="row text-left h4" style="margin-top: 10px">手机：{{ volunteer_team.telephone }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="row h3 text-left" style="border-left: red solid 5px;padding-left: 15px">队伍地址</div>
              <div class="row">
                <div class="row text-left h4" style="margin-top: 30px">{{ volunteer_team.Detailed_address }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      volunteer_team: {
        Teamid: 1,
        Team_name: "涪陵区发展中心志愿服务队",
        contact: "麻辣鸡丝",
        telephone: "123456789",
        Detailed_address: "重庆市涪陵区",
        Liaison_organization: "重庆市蓝帽子城市环境服务站",
        Team_profile: "志愿志愿志愿志愿志愿志愿",
        address: "重庆市涪陵区",
        Register_date: "2020-07-25",
        Regis_department: "银河系",
        registration_authority: "银河系"
      },
      btn: "我要加入"
    };
  },
  props: [],
  components: {},
  created() {
  },
  mounted() {
  },
  methods: {
    myfun: function () {
      this.btn = "申请成功"
    }
  },
};
</script>
<style>
#all {
  background-image: url(../assets/images/1.png);
  background-repeat: no-repeat;
  font-size: 16px;
}
</style>