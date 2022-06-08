<template>
  <div id="navigationBar" class="js-nav">
    <ul class="mid">
      <li v-for="(item,index) in tags">
        <a href="javascript:void(0)" :class="checkindex(index)" @click="changcolor(index)">{{item}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    path:String
  },
  data(){
    return{
      tags:["首页","志愿项目","志愿队伍","志愿风采","信息动态","媒体报道","研究培训","政策文件","通知公告","使用指南"],
      type:0,
      path:'/volunteer_program',
      paths:["/media","/volunteer_program","/volunteer_team","/user","/team","/program","/media","/volunteer_program_details","/volunteer_team_details"]
    }
  },
  methods:{
  changcolor(index) {
      this.type = index
      this.$router.replace(this.paths[index])
    },
  checkindex(index){
    return this.type === index ? "active":""
  }
  }
};
</script>

<style>
.js-nav .active {
    background: #fff;
    color: #e60012;
}
.js-nav {
    background: #e60012;
    border: 1px solid #e60012;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* margin-top: 10px; */
}
.js-nav ul {
    font-size: 0;
}
.js-nav li {
    display: inline-block;
    width: 10%;
}
.js-nav a {
    height: 60px;
    display: block;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
}
</style>