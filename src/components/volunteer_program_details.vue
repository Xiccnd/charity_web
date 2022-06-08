<!--  -->
<template>
  <div id="all">
    <div class="container">
      <div class="row" style="margin-top:30px">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 text-left">
              <img src="..\assets\images\2.png" style="width: 260px; height: 170px"/>
            </div>
            <div class="col-md-6">
              <div class="row h2">
                <p class="text-left">{{ volunteer.pname }}</p>
              </div>
              <div class="row pt-5">
                <p class="text-left">编号：{{ volunteer.pid }}</p>
              </div>
              <div class="row pt-5">
                <p class="text-left">
                  服务类别：{{ volunteer.Service_object }}
                </p>
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
                <td class="col-md-6 text-left">项目地点：{{ volunteer.location }}</td>
                <td class="col-md-6 text-left">发布日期：{{ volunteer.Release_date }}</td>
              </tr>
              <tr>
                <td class="col-md-6 text-left">项目日期：{{ volunteer.Project_date }}</td>
                <td class="col-md-6 text-left">招募日期：{{ volunteer.Recruit_date }}</td>
              </tr>
              <tr>
                <td class="col-md-6 text-left">服务对象：{{ volunteer.Service_object }}</td>
                <td class="col-md-6 text-left">志愿者保障：{{ volunteer.Volunteer_upport }}</td>
              </tr>
              <tr>
                <td colspan="2" class="text-left">服务时间描述:<p>{{ volunteer.Service_description }}</p></td>
              </tr>
              <tr>
                <td colspan="2" class="text-left">项目详情:<p>{{ volunteer.Project_details }}</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <table class="table table-striped">
              <thead>
              <tr>
                <th colspan="2">岗位1：志愿者 计划招募：200 已招募：0</th>
                <th>
                  <button type="button" class="btn btn-default" v-on:click="myfun()">{{ btn }}</button>
                </th>
              </tr>
              <tr>
                <th class="text-center">岗位ID</th>
                <th class="text-center">岗位描述</th>
                <th class="text-center">岗位条件</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Tanmay</td>
                <td>Bangalore</td>
                <td>560001</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="row h3 text-left" style="border-left: red solid 5px;padding-left: 15px">项目发起人</div>
              <div class="row">
                <div class="row text-left h4" style="margin-top: 30px">{{ volunteer.Team_name }}</div>
                <div class="row text-left h4" style="margin-top: 10px">地址：{{ volunteer.address }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="row h3 text-left" style="border-left: red solid 5px;padding-left: 15px">项目联系人</div>
              <div class="row">
                <div class="row text-left h4" style="margin-top: 30px">{{ volunteer.contact }}</div>
                <div class="row text-left h4" style="margin-top: 10px">手机：{{ volunteer.telephone }}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-9">
              <div class="row h3 text-left" style="border-left: red solid 5px;padding-left: 15px">项目地址</div>
              <div class="row">
                <div class="row text-left h4" style="margin-top: 30px">{{ volunteer.Detailed_address }}</div>
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
      volunteer: {
        pid: 1,
        pname: "小太阳特教助教志愿活动",
        Project_status: "招募中",
        location: "	重庆市渝北区西南政法大学(渝北校区)",
        Release_date: "2022-06-06",
        Project_date: "	2022-06-05 至 2023-01-01",
        Recruit_date: "	2022-06-05 至 2023-01-01",
        Service_object: "贫困家庭,农村居民,其他,儿童",
        Volunteer_upport: "志愿服务工具,志愿服务证书,志愿者服装,专项培训",
        Service_description:
            "2022年6月5日到2023年1月1日，周一至周四上午8:40-12:00，下午2:00-5:10，周五上午8:40-12:00，周五1:00-4:10。开展义工活动，助教服务分为每天分为上午段和下午段，每个时间段招募1人，每天合计需要2人。全周合计招募10人次。",
        Project_details: "小太阳特教中心每周常规陪伴助教活动恢复招募，周一至周四上午8:40-12:00，下午2:00-5:10，周五上午8:40-12:00，周五1:00-4:10。开展义工活动，助教服务分为每天分为上午段和下午段，每个时间段招募1人，每天合计需要2人。全周合计招募10人次。 岗位描述: 辅助特教老师，帮助孩子们完成老师教授的内容，促进孩子们的成长。 岗位条件: 人品正直诚信，有善心，不歧视特殊儿童。 岗位内容： 志愿者到达后参与集体课，辅助特教老师，帮助孩子们完成老师教授的内容，促进孩子们的成长。 仅限QQ群内报名人员，联系QQ群：118269827 （志汇秀山4群）",
        Team_name: "秀山团团青年志愿服务队",
        address: "秀山土家族苗族自治县",
        contact: "马云",
        telephone: "123456789",
        Detailed_address: "重庆市渝北区西南政法大学(渝北校区)",
      },
      btn: "我要报名"
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