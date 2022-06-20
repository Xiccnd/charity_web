<template>

  <normal-head></normal-head>
  <div data-v-392f6828="" id="zykx">
    <div data-v-392f6828="" class="main bannerimg">
      <div data-v-392f6828="" class="mid">
        <ul data-v-392f6828="" class="row w">
          <li data-v-392f6828="" class="col">
            <div data-v-392f6828="" class="router">
              <span data-v-392f6828="">当前位置：</span>
              <a data-v-392f6828="" href="#/home" >首页</a>
              <!---->
              <a data-v-392f6828="" href="javascript:void(0);" class="after">研究培训</a>
            </div>
          </li>
        </ul>
        <ul data-v-392f6828="" class="row w">
          <li data-v-392f6828="" class="col v-t g-16">
            <div data-v-392f6828="" class="wrapper" style="height: 608px">
              <div data-v-392f6828="" style="display: none"></div>
              <h2 data-v-392f6828="" class="subtitle" style="">研究培训</h2>
              <ul data-v-392f6828="" class="images images-large grid">
                <li data-v-392f6828="" class="grid-item g-8">
                  <a data-v-392f6828="" href="javascript:void(0);" v-on:click="seeVideo(1)">
                    <img class="img" src="../assets/images/llll.jpg" alt="">
                    <i data-v-392f6828="" class="oneline">志愿服务队伍注册</i>
                  </a>
                </li>
                <li data-v-392f6828="" class="grid-item g-8" id="imgtwo" v-on:click="seeVideo(2)">
                  <a data-v-392f6828="" href="javascript:void(0);">
                    <img class="img" src="../assets/images/ddddddd.png" alt=""> 
                    <i data-v-392f6828="" class="oneline">志愿者注册</i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li data-v-392f6828="" id="zykxinfoRight" class="col v-t g-8 pl-40">
            <div class="wrapper">
              <h2 class="subtitle subtitle-noline">热点新闻</h2>
              <ul class="list list-mini">
                <li 
                  class="row w"
                  v-for="(item, i) in hotnews"
                  :key="i">
                  <a 
                    href="javascript:void(0);" 
                    class="col v-m oneline full"
                    v-on:click="newsHot(item.newsid)"
                  >
                    {{item.newstitle}}
                  </a>
                </li>
              </ul>
            </div>
            <div class="wrapper">
              <h2 class="subtitle subtitle-noline">热点图片</h2>
              <ul class="images images-v">
                <li>
                  <a 
                    href="javascript:void(0);"
                    v-on:click="newsHot(1)"
                  >
                    <img class="img" src="../assets/images/media/1.jpg" alt="">
                    <i title="习近平总书记考察河北承德纪实" class="oneline">
                      习近平总书记考察河北承德纪实
                    </i></a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import guidebar from "@/components/guidebar";
import NormalHead from "@/components/normal_head";

export default {
  components: {
    guidebar,
    NormalHead,
  },
  data() {
    return {
      hotnews:null,
    }
  },

  methods: {
    //对应热点新闻跳转
    newsHot(id){
      let urlpath="http://localhost:8080/news?newsid="+id+'a';
      window.open(urlpath);
    },

    getHotNewsData(){
      this.$http({
          method: "get",
          url: "/news/findHotNews",
        }).then((res) => {
          this.hotnews = res.data;
      }).catch((err) => {
        console.error(err);
    });
    },

    seeVideo(id){
      this.$router.push({path:"/researchvideo",query:{id:id}})
    }

  },

  created() {
    this.getHotNewsData();
  },

};
</script>

<style scoped>
.router {
  font-size: 0;
  color: #8d8d8d;
  font-weight: 400;
  margin: 30px 0 30px 0px !important;
}
.router span {
  font-size: 14px !important;
}
.router a {
  text-decoration: none;
  color: #cc0000;
  font-size: 14px !important;
}
.router a:after {
  content: ">";
  font-size: 14px !important;
  color: #8d8d8d;
  margin: 0 5px;
}
.after::after{
  content: none !important;
}
.images-large li {
    text-align: center;
    margin: 20px 0;
}
.g-8 {
    width: 33.33%;
}
.grid-item {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
}
.images-large i {
    padding: 0 10px;
    font-weight: bold;
    line-height: 44px;
    text-align: left;
}
.images i {
    display: block;
    font-size: 16px;
    color: #000;
    padding: 10px 0;
    transition: 0.3s;
}
.oneline {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
#imgtwo{
  margin-left: 100px;
}
</style>