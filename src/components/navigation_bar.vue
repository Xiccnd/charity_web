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
        {address:"/#",pagename:"志愿风采"},
        {address:"/#",pagename:"信息动态"},
        {address:"/media",pagename:"媒体报道"},
        {address:"/#",pagename:"研究培训"},
        {address:"/#",pagename:"政策文件"},
        {address:"/#",pagename:"通知公告"},
        {address:"/#",pagename:"使用指南"},
      ]
    }
  },
  methods: {
    changcolor(index) {
      this.$router.replace(this.tags[index].address)
    },
    checkindex(index) {
      if (this.$route.path === this.tags[index].address) {
        return "active"
      } else {
        return ""
      }
    }
  },
  mounted() {
    let include = [
      this.$route.path.indexOf("center"),
      this.$route.path.indexOf("updatePassword"),
      this.$route.path.indexOf("myProject"),
      this.$route.path.indexOf("waitProject"),
      this.$route.path.indexOf("myTeam"),
      this.$route.path.indexOf("waitTeam"),
    ];
    for (let i = 0; i < include.length; i++) {
      if (include[i] !== -1) {
        if (localStorage.getItem("username") != null) {

        } else {
          alert('未登录');
          this.$router.push("/volunteer_login");
        }
        return;
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