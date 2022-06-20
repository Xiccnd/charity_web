<template>

  <normal-head></normal-head>
  <div id="zykx">
    <div class="main bannerimg">
      <div class="mid">
        <ul class="row w">
          <li class="col">
            <div class="router">
              <span data-v-392f6828="">当前位置：</span>
              <a href="#/home" >首页</a>
              <!---->
              <a href="javascript:void(0);" class="after">志愿风采</a>
            </div>
          </li>
        </ul>
        <ul class="row w">
          <li class="col v-t g-16">
            <div class="wrapper">
              <div style="">
                  <div data-v-392f6828="">
                    <h2 class="subtitle">
                      志愿者
                      <a 
                        href="javascript:void(0);"
                        v-on:click="goStyleinfonews(3)">更多</a>
                    </h2> 
                    <ul class="list list-small">
                      <li 
                        class="row w" 
                        v-for="(item, i) in news3"
                        :key="i">
                        <a 
                          href="javascript:void(0);" 
                          class="col v-m oneline"
                          v-on:click="newsHot(item.newsid)"
                          >
                          {{item.newstitle}}
                        </a> <span class="col v-m t-r">
                          {{item.newstime}}
                        </span>
                      </li>
                    </ul> 
                  </div>
                  <div data-v-392f6828="">
                    <h2 class="subtitle">
                      志愿队伍
                      <a 
                        href="javascript:void(0);"
                        v-on:click="goStyleinfonews(4)">更多</a>
                    </h2> 
                    <ul class="list list-small">
                      <li 
                        class="row w" 
                        v-for="(item, i) in news4"
                        :key="i">
                        <a 
                          href="javascript:void(0);" 
                          class="col v-m oneline"
                          v-on:click="newsHot(item.newsid)"
                          >
                          {{item.newstitle}}
                        </a> <span class="col v-m t-r">
                          {{item.newstime}}
                        </span>
                      </li>
                    </ul> 
                  </div>
                  <div data-v-392f6828="">
                    <h2 class="subtitle">
                      志愿项目
                      <a 
                        href="javascript:void(0);"
                        v-on:click="goStyleinfonews(5)">更多</a>
                    </h2> 
                    <ul class="list list-small">
                      <li 
                        class="row w" 
                        v-for="(item, i) in news5"
                        :key="i">
                        <a 
                          href="javascript:void(0);" 
                          class="col v-m oneline"
                          v-on:click="newsHot(item.newsid)"
                          >
                          {{item.newstitle}}
                        </a> <span class="col v-m t-r">
                          {{item.newstime}}
                        </span>
                      </li>
                    </ul>  
                  </div>
                  <div data-v-392f6828="">
                    <h2 class="subtitle">
                      志愿团体
                      <a 
                        href="javascript:void(0);"
                        v-on:click="goStyleinfonews(6)">更多</a>
                    </h2> 
                    <ul class="list list-small">
                      <li 
                        class="row w" 
                        v-for="(item, i) in news6"
                        :key="i">
                        <a 
                          href="javascript:void(0);" 
                          class="col v-m oneline"
                          v-on:click="newsHot(item.newsid)"
                          >
                          {{item.newstitle}}
                        </a> <span class="col v-m t-r">
                          {{item.newstime}}
                        </span>
                      </li>
                    </ul>  
                  </div>
              </div>
            </div>
          </li>
          <li id="zykxinfoRight" class="col v-t g-8 pl-40">
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
                <li>
                  <a 
                    href="javascript:void(0);"
                    v-on:click="newsHot(345)"
                  >
                  <img class="img" src="../assets/images/media/2.jpg" alt="">
                    <i
                        title="人民网北京：门头沟区千名志愿者响应号召 “量身式”上岗开展“菜单式”服务"
                        class="oneline"
                    >
                      人民网北京：门头沟区千名志愿者响应号召 “量身式”上岗开展...
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
      news3:null,//所有文章
      news4:null,//所有文章
      news5:null,//所有文章
      news6:null,//所有文章
      hotnews:null,
    }
  },
  methods: {
    //对应热点新闻跳转
    newsHot(id){
      let urlpath="http://localhost:8080/news?newsid="+id+'a';
      window.open(urlpath);
    },
     //对应类别页面跳转
    goStyleinfonews(num){
      let urlpath="http://localhost:8080/styleinfonews?num="+num;
      window.open(urlpath);
    },
    //获取当前页新闻列表
    getNewsData(num){
      this.$http({
          method: "get",
          url: "/news/queryAll?newstype="+num,
        }).then((res) => {
          if(num==3){
            this.news3 = res.data.slice(0,6);
          }else if(num==4){
            this.news4 = res.data.slice(0,6);
          }else if(num==5){
            this.news5 = res.data.slice(0,6);
          }else{
            this.news6 = res.data.slice(0,6);
          }     
      }).catch((err) => {
        console.error(err);
    });
    },
    //获取热点新闻列表，按照浏览次数排序；点击一次文章会增加相应文章浏览次数，点击热点新闻处不会增加
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
  },
  created() {
    this.getNewsData(3);
    this.getNewsData(4);
    this.getNewsData(5);
    this.getNewsData(6);
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
.wrapper .subtitle {
    padding-left: 16px;
    border-bottom: 0;
    line-height: normal;
    margin: 10px 0;
}
.subtitle {
    font-size: 20px;
    color: #333;
    font-weight: bold;
    line-height: 60px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    padding-left: 36px;
    margin: 0;
}
.list {
    padding: 10px 0;
}
.wrapper .subtitle a {
    right: 0;
}
.subtitle a {
    position: absolute;
    right: 30px;
    top: 50%;
    display: inline-block;
    width: 70px;
    line-height: 24px;
    border-radius: 14px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    background: #cc0000;
    border: 1px solid #cc0000;
    font-weight: normal;
    transition: 0.3s;
    margin-top: -12px;
}
a {
    text-decoration: none;
}
.wrapper .subtitle {
    padding-left: 16px;
    border-bottom: 0;
    line-height: normal;
    margin: 10px 0;
}
</style>