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
              <slot name="tip"></slot>
            </div>
          </li>
        </ul>
        <div class="section">
          <slot name="catagory"></slot>
          <ul class="row w">
            <slot name="search"></slot>
            <li class="col v-m t-r">
              <div class="text-tab" style="margin-right: -10px">
                <a href="javascript:void(0);" id="list" class="active">列表</a>
                |
                <a href="javascript:void(0);" id="map">地图</a>
              </div>
            </li>
          </ul>
          <div  id="getList" >
            <ul  class="panel-list panel-lists">
             <slot name="panel"></slot> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NormalHead from "@/components/normal_head";
export default {
   components: {
    NormalHead,
  },
  methods:{
    btnlocal() {
      console.log(1)
      // proList(data)
    },
  }
  
}
</script>
<style scoped>
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
.tabbar-tight span, .tabbar-tight a {
    padding-top: 10px;
}
.panel-list {
  font-size: 0;
  margin: 20px -15px;
}

.section {
  padding: 20px;
}

</style>