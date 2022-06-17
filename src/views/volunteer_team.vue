<!--  -->
<template>
  <program>
    <template v-slot:tip>
      <span>志愿队伍</span>
    </template>
    <template v-slot:catagory>
      <div class="category">
        <h2 class="category__title">所属区域</h2>
        <div class="category__content">
          <!-- <a href="javascript:void(0);"  class="category__item active">全部</a> -->
          <a href="javascript:void(0);" class="category__item"  :class="selectedIndex == i ? 'active':''" @click="btnlocal(ter.territorydes,i)" v-for="(ter, i) in territory" :key="i">
            {{ ter.territorydes }}
          </a>
        </div>
      </div>
      <div class="category">
        <h2 class="category__title">服务类型</h2>
        <div class="category__content">
          <a
            href="javascript:void(0);"
            v-for="(item, i) in class_of_service"
            :key="i"
            :class="selectedIndex1 == i ? 'active':''"
            class="category__item" @click="btnservce(item.serviceName,i)"
            >{{ item.serviceName }}</a
          >
        </div>
      </div>
      <div class="category-handle">
        <!-- <span class="hidden">收起</span>
        <span class="">更多条件</span> -->
      </div>


    </template>
    <template v-slot:search>
      <search @searchdata="getdata"></search>
    </template>
    <template v-slot:panel>
      <li
        class="panel-list__item"
        style="width: 25%"
        v-for="(item, i) in currentPageData"
        :key="i"
      >
        <div class="panel-card">
          <router-link
            :to="{
              path: '/volunteer_team/volunteer_team_details',
              query: { id: item.teamid, flet:JSON.stringify(this.team) },
            }"
          >
            <img
              src="../assets/images/program/11.e6f7787.png"
              alt=""
              style="width: 260px; height: 170px"
            />
          </router-link>
          <h2 class="panel-card__name">
            <a href="javascript:void(0);" title="给外卖骑手送温暖">{{
              item.teamName
            }}</a>
          </h2>
          <p  class="row w">
            <span  class="col v-m">队伍人数：0</span>
            <span  class="col v-m t-r">分项满意度</span>
          </p>
          <ul  class="row w panel-card__info">
            <li  class="col v-m">
              <img style="margin-right: 5px;" src="../assets/images/program/team_02.png" alt=""/>
              <h2 >培训</h2>
              <p >5.0</p>
            </li>
            <li  class="col v-m">
              <img style="margin-right: 5px;"
                
                src="../assets/images/program/team_03.png"
                alt=""
              />
              <h2 >合作</h2>
              <p >5.0</p>
            </li>
            <li  class="col v-m">
              <img style="margin-right: 5px;"
                
                src="../assets/images/program/team_04.png"
                alt=""
              />
              <h2 >计划</h2>
              <p >5.0</p>
            </li>
          </ul>
        </div>
      </li>

      <Pages></Pages>

      <div   id="cpaginate">
        <div  class="pages">
          <a href="javascript:void(0);" class="pages-btn" @click="firstPage">首页</a>
          <a href="javascript:void(0);" class="pages-btn" @click="prevPage">上一页</a>
          <span v-for="(item,index) in totalPage" :key="index">
            <a href="javascript:void(0);" @click="currentPages(item)">{{ item }}</a>
          </span>
          <a href="javascript:void(0);" class="pages-btn" @click="nextPage">下一页</a>
          <a href="javascript:void(0);" class="pages-btn" @click="lastPage">尾页</a>
          <span >第</span>
          <input  type="text" v-model="currentPage" />
          <span >页</span>
          <a href="javascript:void(0);" class="pages-btn" @click="currentPages(currentPage)">跳转</a>
          <span >{{ currentPage }}/{{ totalPage }}页</span>
        </div>
      </div>
    </template>
  </program>
</template>
<script >
import NormalHead from "@/components/normal_head";
import Guidebar from "@/components/guidebar";
import Program from "@/components/program";
import Search from "@/components/team_search";
export default {
  data() {
    return {
      selectedIndex: 0,
      selectedIndex1: 0,
      searchinfo:{
      local:'全部',
      serviceName:'全部',
    },
      //区域
      territory: [
      ],
      //服务类别
      class_of_service: [
      ],
      list: null,//所有队伍
      listLoading: true,
      totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 8, // 每页显示数量
      currentPageData: [],//当前页显示内容
      headPage: 1,
      team:[]//该用户申请的队伍
    };
  },
  props: [],
  created() {
    this.proList();
    this.territorylist();
    this.servicelist();
    const _this = this
    //获取用户申请的队伍
    if(localStorage.getItem("username") != null){
      this.$http({
        method:"get",
        url:"/volunteersTeamid/selectOne",
        params: {
          name: localStorage.getItem("username")
        }
      }).then(res => {
        _this.team=res.data
      })
    }

  },
  mounted() {},
  components: {
    NormalHead,
    Guidebar,
    Program,
    Search,
  },
  methods: {
    btnlocal(data,i) {
      this.searchinfo.local = data
      this.proList(this.searchinfo.serviceName,this.searchinfo.local)
      this.checkcolor(i)
    },
    btnservce(data,i){
      this.searchinfo.serviceName = data
      this.proList(this.searchinfo.serviceName,this.searchinfo.local)
      this.checkcolor1(i)
    },
    checkcolor(index){
       this.selectedIndex = index;
    },
    checkcolor1(index){
       this.selectedIndex1 = index;
    },
    getdata(data) {
      this.list = data;
      this.currentPages(1)
      this.totalPage=Math.ceil(this.list.length / this.pageSize);
      this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
      this.getCurrentPageData();
    },
    proList: function (serviceName,local) {
       if(serviceName == '全部'){
          serviceName=''
        }
        if(local == '全部'){
          local=''
        }
      const _this = this;
      this.$http({
        method: "get",
        url: "/volunteerTeam/queryAll",
        params:{
            address:local,
            serviceName:serviceName,
          }
      })
        .then((res) => {
          _this.list=res.data
          this.totalPage=Math.ceil(this.list.length / this.pageSize);
          this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
          this.getCurrentPageData();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    territorylist: function () {
      const _this = this;
      this.$http({
        method: "get",
        url: "/territory/selectAll",
      })
        .then((res) => {
          _this.territory = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    servicelist:function(){
        const _this = this
        this.$http({
                  method:"get",
                  url:"classOfService/queryAll"
               })
              .then(res => {
                _this.class_of_service=res.data
              })
              .catch(err => {
                console.error(err); 
              })
      },
    queryList: function () {
      const _this = this;
      this.$http({
        method: "get",
        url: "/volunteerProgramDetails/selectOne?id=1",
      })
        .then((res) => {
          console.log(res.data);
          _this.volunteer_program_details[0] = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCurrentPageData() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.list.slice(
          begin,
          end
      );
    },
    //当前页
    currentPages(i) {
      if(i>this.totalPage){
        alert("超出最大页数,自动跳到尾页")
        this.currentPage=this.totalPage
      }else if(i<1){
        alert("小于最小页数,自动跳到首页")
        this.currentPage=1
      }else{
          this.currentPage=i;
      }
      this.getCurrentPageData();
    },
    //上一页
    prevPage() {

      if (this.currentPage == 1) {
        return false;
      } else {
        this.currentPage--;
        this.getCurrentPageData();
      }
    },
    // 下一页
    nextPage() {
      if (this.currentPage == this.totalPage) {
        return false;
      } else {
        this.currentPage++;
        this.getCurrentPageData();
      }
    },
    //尾页
    lastPage() {

      if (this.currentPage == this.totalPage) {
        return false;
      } else {
        this.currentPage=this.totalPage;
        this.getCurrentPageData();
      }

    } ,
    //首页
    firstPage(){
      this.currentPage= this.headPage;
      this.getCurrentPageData();
    }
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
.panel-lists .panel-card p.row {
    margin: 0;
    padding: 14px 10px 14px 10px;
    background: url(../assets/images/program/team_01.png) no-repeat left bottom;
    border: 0;
}
.panel-lists .panel-card__info {
    padding: 10px;
}
.panel-card__info .col {
  position: relative;
}
.panel-lists .panel-card__info h2, .panel-lists .panel-card__info p {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    margin-right: 5px;
    width: auto;
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
.pages {
  padding: 20px 0;
  text-align: center;
  font-size: 0;
}
.pages .pages-btn, .pages input {
  border-radius: 4px;
}
.pages .pages-btn {
  white-space: nowrap;
  width: 48px;
  border-radius: 24px;
}
.disabled{
  display: none!important;
}

.pages a {
  display: inline-block;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 22px;
  font-size: 12px;
  color: #999;
  vertical-align: middle;
  margin: 0 5px;
  transition: 0.3s;
}
.pages a.active, .pages .pages-btn:last-child:hover {
  border-color: #cc0000;
  background: #cc0000;
  color: #fff;
}
.pages span {
  font-size: 12px;
  color: #333;
  margin: 0 5px;
  vertical-align: middle;
}
.pages input {
  display: inline-block;
  width: 48px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ccc;
  border-radius: 24px;
  text-align: center;
  font-size: 12px;
  color: #333;
  vertical-align: middle;
  padding: 0;
}
</style>