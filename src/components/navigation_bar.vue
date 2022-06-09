<template>
  <div id="navigationBar" class="js-nav">
    <ul class="mid">
      <li v-for="(item,index) in tags" :key=index>
        <a href="javascript:void(0)" :class=checkindex(index) @click="changcolor(index)">{{item.pagename}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tags :[
        {address:"/default_index",pagename:"首页"},
        {address:"/volunteer_program",pagename:"志愿项目"},
        {address:"/volunteer_team",pagename:"志愿队伍"},
        {address:"/user",pagename:"志愿风采"},
        {address:"/team",pagename:"信息动态"},
        {address:"/program",pagename:"媒体报道"},
        {address:"/media",pagename:"研究培训"},
        {address:"/volunteer_program_details",pagename:"政策文件"},
        {address:"/volunteer_program_details",pagename:"通知公告"},
        {address:"/volunteer_program_details",pagename:"使用指南"},
      ]
    }
  },
  methods:{
    changcolor(index) {
      this.$router.replace(this.tags[index].address)
    },
  checkindex(index){
      if(this.$route.path.indexOf(this.tags[index].address)!==-1){
        return "active"
      }else{
        return ""
      }
  }
  }
};
</script>

<style scoped>
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