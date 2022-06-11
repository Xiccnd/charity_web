<!--  -->
<template>
  <program>
    <template v-slot:catagory>
          <div class="category" >
            <h2 class="category__title">项目区域</h2>
            <div class="category__content">
               <a href="javascript:void(0);" class="category__item active">全部</a>
               <a class="category__item" v-for="(ter,i) in territory" :key="i">
                {{ter.territorydes}}
              </a>
            </div>
            <div class="category__wrap" style="display: none">
              <div class="category__content">
                <a href="javascript:void(0); " class="category__item active">全部</a>
              </div>
            </div>
          </div>
          <div class="category">
            <h2 class="category__title">服务类别</h2>
            <div class="category__content">
              <a href="javascript:void(0);" class="category__item active">全部</a>
               <a href="javascript:void(0);" v-for="(item,i) in class_of_service" :key="i"
                class="category__item ">{{item.serviceName}}</a>
            </div>
          </div>
          <div class="category">
            <h2 class="category__title">项目状态</h2>
            <div class="category__content">
              <a href="javascript:void(0);" class="category__item active"
                >全部</a
              >
              <a href="javascript:void(0);" class="category__item"
                >招募待启动</a
              >
              <a href="javascript:void(0);" class="category__item">招募中</a>
              <a href="javascript:void(0);" class="category__item"
                >招募已结束</a
              >
            </div>
          </div>
          <div class="category-handle">
            <span class="hidden">收起</span>
            <span class="">更多条件</span>
          </div>
    </template>
    <template v-slot:search>
      <search @searchdata="getdata"></search>
    </template>
    <template v-slot:panel>
          <div  id="getList" >
            <ul  class="panel-list">
              <li class="panel-list__item" style="width: 25%" v-for="(item,i) in volunteer_program_details" :key="i">
                <div class="panel-card">
                  <router-link :to="{path:'/volunteer_program/volunteer_program_details',query:{id:item.pid}}">
                  <img src="../assets/images/program/1.png" alt="" style="width: 260px; height: 170px"/>
                  </router-link>
                  <p  class="t-c">
                    <a href="javascript:void(0);" class="button button-small success round">{{item.statusName}}</a>
                  </p>
                  <h2 class="panel-card__name">
                    <a href="javascript:void(0);" title="给外卖骑手送温暖">{{item.pname}}</a>
                  </h2>
                  <ul  class="row w panel-card__info">
                    <li  class="col v-m">
                      <h2 >岗位</h2>
                      <p >{{item.posts}}个</p>
                    </li>
                    <li  class="col v-m">
                      <h2 >目标</h2>
                      <p >{{item.targetNumber}}个</p>
                    </li>
                    <li  class="col v-m">
                      <h2 >报名</h2>
                      <p >{{item.enrolledNumber}}个</p>
                    </li>
                  </ul>
                  <div class="progress" style="text-align: left">
                    <span class="bar" style="width: 0%"></span>
                  </div>
                  <p class="row w">
                    <span  class="col v-m">项目进度：
                      <b >0%</b>
                    </span>
                    <span class="col v-m t-r"><em  class="danger">截止日期：</em><b >
                      {{item.recruitDate.substring(0,10)}}
                    </b></span>
                  </p>
                </div>
              </li>   
            </ul>
           
        </div>
       
 <Pages></Pages>

    </template>
  </program>
</template>
<script >
import NormalHead from "@/components/normal_head";
import Guidebar from "@/components/guidebar";
import Pages from "@/components/pages"
import Program from "@/components/program"
import Search from "@/components/program_search"
export default {
  data() {
    return {
      //项目
    volunteer_program_details:[
      {
        pid:0,
        pname:"汛期安全知识”志愿宣讲活动 ",
        projectStatus:"招募中",
        posts:1,
        targetNumber:3,
        enrolledNumber:2,
        recruitDate:"2022-6-9",
        statusName:""
      }],
    territory:[
      {territoryid:0,territorydes:"全部"},
      {territoryid:1,territorydes:"万州区"},
      {territoryid:2,territorydes:"永川区"}
    ],
      class_of_service: [
        { sid: 0, serviceName: "全部" },
        { sid: 1, serviceName: "社区服务" },
        { sid: 2, serviceName: "扶贫减贫" },
      ],

      volunteer_program_details: [
        {
          pid: 0,
          pname: "汛期安全知识”志愿宣讲活动 ",
          Project_status: "招募中",
          posts: 1,
          targetNumber: 3,
          enrolledNumber: 2,
          recruitDate: "2022-6-9",
        },
      ],
    };
  },
  props: [],
  created() {
    this.proList();
    this.territorylist();
  },
  mounted() {},
  components: {
    NormalHead,
    Guidebar,
    Pages,
    Program,
    Search
  },
  methods: { 
    getdata(data){
      this.volunteer_program_details = data
     },
    proList:function(){
        const _this = this
        this.$http({
                  method:"get",
                  url:"/volunteerProgramDetails/selectAll"
               })
              .then(res => {
                _this.volunteer_program_details=res.data
              })
              .catch(err => {
                console.error(err); 
              })
      },
    territorylist:function(){
        const _this = this
        this.$http({
                  method:"get",
                  url:"/territory/selectAll"
               })
              .then(res => {
                _this.territory=res.data
              })
              .catch(err => {
                console.error(err); 
              })
      },
    queryList: function () {
        const _this = this;
        this.$http({

                  method:"get",
                  url:"/volunteerProgramDetails/selectAll",
                  params:{
                  pid:_this.searchid,
                  pname:_this.searchpname,
                  releaseDate:_this.releaseDate,
                  recruitDate:_this.recruitDate
                   }
               })
              .then(res => {
                console.log(res.data)
                 _this.volunteer_program_details=res.data
                 console.log(_this.volunteer_program_details)
              })
              .catch(err => {
                console.error(err); 
              })
      
// =======
//           method: "get",
//           url: "/volunteerProgramDetails/selectOne?id=1",
//         })
//           .then((res) => {
//             console.log(res.data);
//             _this.volunteer_program_details[0] = res.data;
//           })
//           .catch((err) => {
//             console.error(err);
//           });
// >>>>>>> 41380502cb2a2c64464c772cb9d04585cc857a4f
      },
  },
};
</script>
<style scoped>
.panel-list__item {
  display: inline-block;
  padding: 15px;
  box-sizing: border-box;
  vertical-align: top;
}
.panel-card {
  box-shadow: 0 2px 10px rgb(0 0 0 / 3%);
  padding-bottom: 10px;
  transition: 0.3s;
  cursor: pointer;
  width: 260px;
}
.panel-card .t-c {
  margin-top: -20px;
  margin-bottom: 20px;
  height: 24px;
}
.button.success {
  background: #1cac1f;
  border-color: #1cac1f;
}
.button-small {
  width: 46px;
  height: 28px;
  line-height: 28px;
  padding: 0;
}
.button.round {
  border-radius: 14px;
}
.panel-card .button {
  width: 88px;
}
.panel-card__name a {
  display: block;
  font-size: 16px;
  color: #333;
  padding: 0 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.panel-card .row {
  font-size: 12px;
  color: #808080;
  padding: 0 10px;
  box-sizing: border-box;
}
.panel-card__info {
  font-size: 12px;
  color: #333;
}
.panel-card__info .col {
  position: relative;
}
.panel-card__info h2 {
  text-align: center;
}
.panel-card__info h2 {
  font-weight: normal;
  font-size: 12px;
  color: #808080;
}
.panel-card__info p {
  width: 100%;
  text-align: center;
  font-weight: bold;
}

.panel-card__info .col {
  position: relative;
}
.panel-card__info .col:before {
  content: "";
  width: 1px;
  height: 34px;
  background: #f0f0f0;
  position: absolute;
  left: 0;
  top: 55%;
  margin-top: -17px;
}
.panel-card .progress {
  margin-top: 16px;
  margin-bottom: 6px;
}
.panel-card .progress {
  margin: 10px;
}
.progress {
  height: 6px;
  background: #f0f0f0;
  border-radius: 4px;
  position: relative;
}
.progress .bar {
  height: 6px;
  background: #ee7767;
  border-radius: 4px;
}
.panel-card p.row {
  margin-top: 0;
}
.panel-card p.row {
  margin: 15px 0;
}
.panel-card .row {
  font-size: 12px;
  color: #808080;
  padding: 0 10px;
  box-sizing: border-box;
}
.panel-card b {
  font-weight: bold;
  color: #333;
}
.panel-card em.danger {
  color: #cc0000;
}
.category {
  font-size: 0;
  position: relative;
  padding-left: 70px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.category__title {
  font-size: 14px;
  color: #333;
  line-height: 1.8;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.category__item.active {
  background: #cc0000;
  color: #fff;
}
.category__item {
  font-size: 14px;
  color: #333;
  line-height: 1.8;
  margin: 0 10px 5px 0;
  padding: 0 7px;
  display: inline-block;
  transition: 0.3s;
}
.category__wrap {
  background: #f6f3f7;
  border: 1px solid #e5e5e5;
  padding: 10px 20px 5px 20px;
  margin: 10px 0 20px 0;
  position: relative;
}
.category-handle {
  text-align: center;
  position: relative;
  margin: 20px 0 40px 0;
}
.category-handle:before {
  content: "";
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #f0f0f0;
  position: absolute;
  left: 0;
  top: 50%;
}
.hidden {
  display: none;
}
.category-handle span {
  border: 1px solid #c4c4c4;
  background: #fff;
  position: relative;
  z-index: 10;
  border-radius: 20px;
  font-size: 14;
  color: #333;
  height: 26px;
  line-height: 26px;
  padding: 0 30px;
  cursor: pointer;
  transition: 0.3s;
}
</style>