<!--  -->
<template>
  <normal-head></normal-head>
  <div id="project">
    <div class="main bannerimg">
      <div class="mid">
        <ul class="row w">
          <li class="col">
            <div class="router">
              <span>当前位置：</span>
              <a href="#/home" class="">首页</a>
              <span>志愿项目</span>
            </div>
          </li>
        </ul>
        <div class="section">
          <div class="category">
            <h2 class="category__title">项目区域</h2>
            <div class="category__content">
              <a href="javascript:void(0);" class="category__item active"
                >全部</a
              >
              <a href="javascript:void(0);" class="category__item">北京市</a>
              <a href="javascript:void(0);" class="category__item">重庆市</a>
            </div>
            <div class="category__wrap" style="display: none">
              <div class="category__content">
                <a href="javascript:void(0); " class="category__item active"
                  >全部</a
                >
              </div>
            </div>
          </div>
          <div class="category">
            <h2 class="category__title">服务类别</h2>
            <div class="category__content">
              <a href="javascript:void(0);" class="category__item active"
                >全部</a
              >
              <a href="javascript:void(0);" class="category__item">社区服务</a>
              <a href="javascript:void(0);" class="category__item">扶贫减贫</a>
              <a href="javascript:void(0);" class="category__item">其他</a>
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
          <ul class="row w">
            <li class="col v-m" style="width: 90%">
              <span class="label">项目起止日期</span>
              <div slot="" class="mx-datepicker" style="width: 120px">
                <div class="mx-input-wrapper">
                  <input
                    name="date"
                    type="text"
                    autocomplete="off"
                    placeholder=""
                    class="mx-input"
                  />
                  <i class="mx-icon-calendar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
              <span class="label">至</span>
              <div class="mx-datepicker" style="width: 120px">
                <div class="mx-input-wrapper">
                  <input
                    name="date"
                    type="text"
                    autocomplete="off"
                    placeholder=""
                    class="mx-input"
                  />
                  <i class="mx-icon-calendar">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      width="1em"
                      height="1em"
                    >
                      <path
                        d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                      ></path>
                    </svg>
                  </i>
                </div>
              </div>
              <span class="label">项目编号</span>
              <input
                type="text"
                maxlength="18"
                class="input"
                style="width: 180px; height: 34px"
              />
              <span class="label">项目名称</span>
              <input
                type="text"
                maxlength="30"
                class="input"
                style="width: 180px; height: 34px"
              />
              <a
                href="javascript:void(0);"
                class="button button-small"
                style="height: 34px; line-height: 34px"
                >搜索</a
              >
              <a
                href="javascript:void(0);"
                class="button button-small"
                style="
                  margin-left: 6px;
                  background-color: rgb(204, 204, 204);
                  height: 34px;
                  line-height: 34px;
                "
                >重置</a
              >
            </li>
            <li class="col v-m t-r">
              <div class="text-tab" style="margin-right: -10px">
                <a href="javascript:void(0);" id="list" class="active">列表</a>
                <a href="javascript:void(0);" id="map">地图</a>
              </div>
            </li>
          </ul>
          <div  id="getList">
            <ul  class="panel-list">
              <li class="panel-list__item" style="width: 25%">
                <div class="panel-card">
                  <img src="../assets/images/program/1.png" alt="" style="width: 260px; height: 170px"/>
                  <p  class="t-c">
                    <a href="javascript:void(0);" class="button button-small success round">招募中</a>
                  </p>
                  <h2 class="panel-card__name">
                    <a href="javascript:void(0);" title="给外卖骑手送温暖">给外卖骑手送温暖</a>
                  </h2>
                  <ul  class="row w panel-card__info">
                    <li  class="col v-m">
                      <h2 >岗位</h2>
                      <p >1个</p>
                    </li>
                    <li  class="col v-m">
                      <h2 >目标</h2>
                      <p >10个</p>
                    </li>
                    <li  class="col v-m">
                      <h2 >报名</h2>
                      <p >0个</p>
                    </li>
                  </ul>
                  <div class="progress" style="text-align: left">
                    <span class="bar" style="width: 0%"></span>
                  </div>
                  <p class="row w">
                    <span  class="col v-m">项目进度：
                      <b >0%</b>
                    </span>
                    <span class="col v-m t-r"><em  class="danger">离招募结束：</em><b >3天</b></span>
                  </p>
                </div>
              </li>   
            </ul>
            <Pages></Pages>
          </div>
        </div>
      </div>

      <div class="tj-bj" style="height: 440px" lazy="loaded">
        <div class="mid">
          <div
            class="tabbar protabbar"
            style="margin-top: 40px; background: none"
          >
            <span
              class="active"
              style="
                display: block;
                position: relative;
                text-align: center;
                font-size: 18px;
                border-bottom: none;
                margin-left: 0px;
              "
              >推荐项目</span
            >
          </div>
          <ul class="panel-list" style="margin-top: 0px">
            <li class="panel-list__item" style="width: 25%">
              <div class="panel-card" style="background: rgb(255, 255, 255)">
                <img
                  src="../assets/images/tabbar/1.jpg"
                  alt=""
                  style="width: 260px; height: 170px"
                />
                <p class="t-c">
                  <!---->
                  <a
                    href="javascript:void(0);"
                    class="button button-small success round"
                    >招募中</a
                  >
                  <!---->
                  <!---->
                </p>
                <h2 class="panel-card__name">
                  <a
                    href="javascript:void(0);"
                    title="世界联合海上森林新媒体运营志愿者招募"
                    >世界联合海上森林新媒体运...</a
                  >
                </h2>
                <ul class="row w panel-card__info">
                  <li class="col v-m">
                    <h2>岗位</h2>
                    <p>1个</p>
                  </li>
                  <li class="col v-m">
                    <h2>目标</h2>
                    <p>5个</p>
                  </li>
                  <li class="col v-m">
                    <h2>报名</h2>
                    <p>0个</p>
                  </li>
                </ul>
                <div class="progress" style="text-align: left">
                  <span class="bar" style="width: 6%"></span>
                </div>
                <p class="row w">
                  <span class="col v-m">项目进度：<b>6%</b></span>
                  <span class="col v-m t-r"
                    ><em class="danger">离招募结束：</em><b>342天</b></span
                  >
                </p>
              </div>
            </li>
            <li class="panel-list__item" style="width: 25%">
              <div class="panel-card" style="background: rgb(255, 255, 255)">
                <img
                  src="../assets/images/tabbar/2.jpeg"
                  alt=""
                  style="width: 260px; height: 170px"
                />
                <p class="t-c">
                  <!---->
                  <a
                    href="javascript:void(0);"
                    class="button button-small success round"
                    >招募中</a
                  >
                  <!---->
                  <!---->
                </p>
                <h2 class="panel-card__name">
                  <a href="javascript:void(0);" title="海南乡村公益图书馆志愿者"
                    >海南乡村公益图书馆志愿者</a
                  >
                </h2>
                <ul class="row w panel-card__info">
                  <li class="col v-m">
                    <h2>岗位</h2>
                    <p>1个</p>
                  </li>
                  <li class="col v-m">
                    <h2>目标</h2>
                    <p>20个</p>
                  </li>
                  <li class="col v-m">
                    <h2>报名</h2>
                    <p>0个</p>
                  </li>
                </ul>
                <div class="progress" style="text-align: left">
                  <span class="bar" style="width: 5%"></span>
                </div>
                <p class="row w">
                  <span class="col v-m">项目进度：<b>5%</b></span>
                  <span class="col v-m t-r"
                    ><em class="danger">离招募结束：</em><b>203天</b></span
                  >
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import NormalHead from "@/components/normal_head";
import Guidebar from "@/components/guidebar";
import Pages from "@/components/pages"
export default {
  data() {
    return {
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
    // this.queryList();
  },
  mounted() {},
  components: {
    NormalHead,
    Guidebar,
    Pages
  },
  methods: {
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
  },
};
</script>
<style scoped>
.tj-bj {
  height: 440px;
  margin-bottom: -40px;
  background: url(../assets/images/background/tj-bg-img.c47e13c.png) no-repeat
    center top;
}
.tabbar {
  background: #fff0f1;
  height: 50px;
}
.tabbar span.active,
.tabbar a.active {
  color: #cc0000;
  font-weight: bold;
  border-bottom: 3px solid #cc0000;
}
.tabbar span,
.tabbar a {
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  color: #333;
  padding-top: 15px;
  padding-bottom: 5px;
  margin: 0 20px;
  transition: 0.3s;
}
.protabbar span.active:before {
  background: -webkit-linear-gradient(to right, #fff, #cc0000);
  background: linear-gradient(to right, #fff, #cc0000);
}
.protabbar span:before {
  content: "";
  position: absolute;
  top: 62%;
  height: 2px;
  width: 46%;
  left: 0;
}
.protabbar span.active:after {
  background: -webkit-linear-gradient(to right, #cc0000, #fff);
  background: linear-gradient(to right, #cc0000, #fff);
}
.protabbar span.active:after {
  background: -webkit-linear-gradient(to right, #cc0000, #fff);
  background: linear-gradient(to right, #cc0000, #fff);
}
.protabbar span:after {
  content: "";
  position: absolute;
  top: 62%;
  height: 2px;
  width: 46%;
  right: 0;
}
.panel-list {
  font-size: 0;
  margin: 20px -15px;
}
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
.panel-card .button {
  width: 88px;
}
.button.round {
  border-radius: 14px;
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

.section {
  padding: 20px;
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
.mx-datepicker {
  position: relative;
  display: inline-block;
  width: 210px;
}
.mx-input-wrapper {
  position: relative;
}
.mx-input {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
.mx-icon-calendar,
.mx-icon-clear {
  position: absolute;
  top: 50%;
  right: 8px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}
.mx-datepicker svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.label + .input {
  width: 150px;
  height: 28px;
  line-height: 28px;
  margin-right: 5px;
}
.text-tab .active {
  color: #cc0000;
}
.text-tab a {
  font-size: 14px;
  color: #333;
  padding: 0 10px;
  position: relative;
}
.text-tab a:before {
  content: "";
  display: inline-block;
  width: 2px;
  height: 12px;
  background: #cc0000;
  border-radius: 2px;
  position: absolute;
  left: -1px;
  top: 50%;
  margin-top: -6px;
}
</style>