<!--  -->
<!--  -->
<template>
  <div class="container">
    <div class="row clearfix">
      <div class="col-md-12 column">
        <div style="width:220px;margin-top: 5px;">
          <ul class="breadcrumb">

            <li>
              <a href="#">首页</a>
            </li>
            <li class="active">
              志愿队伍
            </li>
          </ul>
        </div>


        <div class="category">
          <span>队伍属地</span>
          <ul>
            <li>全部</li>
            <li>万州区</li>
            <li>永川区</li>
            <li>南川区</li>
            <li>渝中区</li>
            <li>渝中区</li>

          </ul>
        </div>


        <div class="category">
          <span>服务类别</span>
          <ul>
            <li>{{ class_of_service[0].service_name }}</li>
            <li>{{ class_of_service[1].service_name }}</li>
            <li>{{ class_of_service[2].service_name }}</li>
          </ul>
        </div>

        <div class="category">
          <span>队伍人数</span>
          <ul>
            <li>全部</li>
            <li>0</li>
            <li>1-100</li>
            <li>100以上</li>
          </ul>
        </div>


      </div>


    </div>
  </div>


  <div class="container">
    <div class="row clearfix">

      <div>
      <span style="margin-right: 5px;">
        项目起止日期&nbsp;&nbsp;<input type="date"/>&nbsp;至&nbsp;<input type="date"/>
      </span>
        <span style="margin-left: 5px;">
        项目编号:<input type="text"/>
      </span>
        <span style="margin-left: 5px;margin-right: 10px;">
        项目名称:<input type="text"/>
      </span>

        <button type="submit" class="btn btn-default btn-primary" style="margin-right: 5px;">搜索</button>
        <button type="reset" class="btn btn-default btn-inverse" style="margin-left: 5px;">重置</button>
      </div>


      <div class="col-md-12 column">
        <div class="row clearfix" style="margin-top:5px">
          <div class="col-md-3 column p_card">
            <router-link to="/volunteer_team_details">
              <img style="width:260px;height:170px;" src="../assets/images/team1.png"/>
            </router-link>

            <h5>
              籽贝子乔公益童心会
            </h5>

            <div>
          <span style="float:right;">
         队伍人数：0
        </span>

            </div>


          </div>

        </div>
      </div>


      <div class="col-md-12 column">
        <ul class="pagination">
          <li>
            <a href="#">Prev</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li>
            <a href="#">Next</a>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>
<script>
export default {
  data() {
    return {
      class_of_service: [{Sid: 0, service_name: "全部"},
        {Sid: 1, service_name: "社区服务"},
        {Sid: 2, service_name: "扶贫减贫"}
      ],

      volunteer_program_details: [
        {
          pid: 0,
          pname: "汛期安全知识”志愿宣讲活动 ",
          Project_status: "招募中",
          Posts: 1,
          Target_number: 3,
          Enrolled_number: 2,
          Recruit_date: "2022-6-9"
        }
      ]


    }
  },
  props: [],
  components: {},
  created() {
    this.queryList();
  },
  mounted() {
  },
  methods: {
    queryList: function () {
      //c查询所有的数据信息，进行绑定显示
      // console.log(111111111111111111111111111111111111)
    },


  }
};
</script>
<style>
ul li {
  list-style: none;
}
</style>
