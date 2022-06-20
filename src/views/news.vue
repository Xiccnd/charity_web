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
              <a data-v-392f6828="" href="javascript:void(0);" class="after">媒体动态</a>
            </div>
          </li>
        </ul>
        <ul data-v-392f6828="" class="row w">
          <li data-v-392f6828="" class="col v-t g-16">
            <div class="detail wrapper">
              <h2 style="text-align: center;">{{newsText.newstitle}}</h2> 
              <div class="detail-tips" style="text-align: center;">
                <span>日期：<span>{{newsText.newstime}}</span></span> 
                <span>来源： <span>{{newsText.newssource}}</span></span> 
              </div> 
              <!-- <div class="detail-content" style="overflow-wrap: break-word; word-break: break-all;"> -->
              <div class="detail-content" v-html="this.newsText.newstext"></div>
                <!-- <p>
                  本报讯 (记者 安 娜) 为进一步动员志愿服务组织和志愿者科学有序参与社区疫情防控，北京市委社会工委市民政局日前会同首都文明办、团市委、市志愿服务联合会制定《北京市新冠肺炎疫情社区防控志愿服务工作指引》(以下简称《指引》)。
                </p>
                <p>
                  《指引》指出，社区疫情防控志愿服务内容有核酸检测、社区值守、物资配送、信息管理等。依据志愿者参与流程，社区疫情防控志愿服务可分为三个阶段。首先，在志愿者上岗服务前做好志愿服务计划和动员工作。社区可以依据疫情防控要求进行志愿服务的总体规划，将具体工作任务进行细分，结合社区居民需求和工作要求开发志愿服务岗位，广泛动员社会力量和社区居民参与疫情防控。其次，在志愿服务开展过程中做好志愿者的服务管理工作。社区为志愿者开展岗前培训，提供志愿者安全防护和必要保障，做好志愿者的引导与管理。再次，在志愿服务活动结束后及时进行志愿服务成果转化，总结推广志愿服务成功经验，宣传志愿服务先进典型，营造良好社会氛围。
                </p>
                <p>根据疫情和防控形势，北京市划分了疫情防控封控区、管控区和防范区，《指引》建议，处于不同类型区域的社区在使用、安排志愿者工作时有所侧重。封控区实行“区域封闭、足不出户、服务上门”，建议根据社区需要调配志愿者参与物资配送、防疫消杀等工作，协助社区为老、弱、病、残、孕等群体提供帮助。管控区实行“人不出区、严禁聚集”，建议根据社区需要调配志愿者参与社区值守、核酸检测、协同流调和信息管理等服务，协助社区帮助困难群体开展邻里互助。防范区实行“强化社会面管控，严格限制人员聚集”，建议社区充分储备各类志愿者，建立联络机制，在情况紧急时能招募到足够的志愿者协助社区开展疫情防控工作。
                </p>
                <p><br></p> 
              </div> -->
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
  data() {
    return {
      // newsText:null,
      newsText:{
        newsid:'',
        newstitle:'',
        newstime:'',
        newssource:'',
        newstext:'',
      },
      hotnews:null,
    }
  },
  components: {
    guidebar,
    NormalHead,
  },
  methods: {
    //获取对应文章具体文本信息
    getNewsText(id){
      this.$http({
          method: "get",
          url: "/news/queryOne?newsid="+id,
        }).then((res) => {
          this.newsText = res.data[0];
          this.newsText.newstext = '<p>' + this.newsText.newstext.replace(/\n*$/g, '').replace(/\n/g, '</p> <p>') + '</p>';        
          console.log(this.newsText);
      }).catch((err) => {
        console.error(err);
    });
    },
    //获取对应热点新闻文章具体文本信息，与上面不同的时它不会增加自身浏览数
    getHotNewsText(id){
      this.$http({
          method: "get",
          url: "/news/queryHotOne?newsid="+id,
        }).then((res) => {
          this.newsText = res.data[0];
          this.newsText.newstext = '<p>' + this.newsText.newstext.replace(/\n*$/g, '').replace(/\n/g, '</p> <p>') + '</p>';        
          console.log(this.newsText);
      }).catch((err) => {
        console.error(err);
    });
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
    newsHot(id){
      let urlpath="http://localhost:8080/news?newsid="+id+'a';
      window.open(urlpath);
    },
  },
  created() {
    //newsid==165a 这一整串
    var afterUrl =  window.location.search.substring(1);
    //==后的字符
    var afterEqual = afterUrl.substring(afterUrl.indexOf('=')+1);
    //最后的一个字符，判断是否位a
    var last = afterEqual.substring(afterEqual.length-1,afterEqual.length);
    //165这个id
    var numid = afterEqual.substring(0,afterEqual.length-1);
    if(last=='a'){
      this.getHotNewsText(numid);
    }else{
      this.getNewsText(afterEqual);
    }
    //获取热点新闻列表  
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
>>>.wrapper {
    border: 1px solid #f2c9bb;
    background: rgba(255, 255, 255, 0.6);
    padding: 15px;
    margin-bottom: 20px;
}
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.detail-tips {
    padding: 25px 0;
}
.detail-tips span {
    font-size: 14px;
    color: #333;
    margin-right: 20px;
}
>>>.detail p{
  line-height: 40px !important;
}
>>>.detail-content{
  overflow-wrap: break-word; 
  word-break: break-all;
}
>>>.detail-content p{
  margin-top: 0px; 
  margin-bottom: 0px; 
  padding: 15px 0px 0px; 
  font-family: 宋体; 
  color: rgb(51, 51, 51); 
  font-size: 12pt; 
  white-space: normal; 
  background-color: rgb(255, 255, 255); 
  text-align: justify; 
  text-indent: 2em;
}


</style>