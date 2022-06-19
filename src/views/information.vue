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
              <a data-v-392f6828="" href="javascript:void(0);" class="after">信息动态</a>
            </div>
          </li>
        </ul>
        <ul data-v-392f6828="" class="row w">
          <li data-v-392f6828="" class="col v-t g-16">
            <div data-v-392f6828="" class="wrapper" style="height: 845px">
              <div data-v-392f6828="" style="display: none"></div>
              <h2 data-v-392f6828="" class="subtitle" style="">信息动态</h2>
              <div
                  data-v-392f6828=""
                  class="wrapper-tab"
                  style="display: none"
              ></div>
              <ul data-v-392f6828="" class="list list-bold" style="">
                <li 
                    data-v-392f6828="" 
                    class="row w"
                    v-for="(item, i) in currentPageData"
                    :key="i"
                  >
                  <a
                      data-v-392f6828=""
                      href="javascript:void(0);"
                      title={{item.newstitle}}
                      class="col v-m oneline"
                      v-on:click="newsBeijin(item.newsid)"
                  >
                  {{item.newstitle}}
                  </a>
                  <span data-v-392f6828="" class="col v-m t-r">
                    {{item.newstime}}
                  </span>
                </li>
              </ul>
              <div
                  data-v-02884387=""
                  data-v-392f6828=""
                  id="cpaginate"
                  style=""
              >
                <div data-v-02884387="" class="pages">
                  <a
                      data-v-02884387=""
                      href="javascript:void(0);"
                      class="pages-btn disabled"
                      v-on:click="firstPage()"
                  >首页</a>
                  <a
                      data-v-02884387=""
                      href="javascript:void(0);"
                      class="pages-btn disabled"
                      v-on:click="prevPage()"
                  >上一页</a>
                  <a
                      data-v-02884387=""
                      href="javascript:void(0);"
                      v-for="(item, i) in totalPage"
                      :key="i"
                      v-bind:class="{'active':(i+1)==this.currentPage}" 
                      v-on:click="currentPages(i+1)"
                  >{{i+1}}</a>
                  <a
                      data-v-02884387=""
                      href="javascript:void(0);"
                      class="pages-btn"
                      v-on:click="nextPage()"
                  >下一页</a
                  >
                  <a
                      data-v-02884387=""
                      href="javascript:void(0);"
                      class="pages-btn"
                      v-on:click="lastPage()"
                  >尾页</a>
                </div>
              </div>
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
                  <a href="javascript:void(0);"
                  >
                    <img class="img" src="../assets/images/media/1.jpg" alt="">
                    <i title="习近平总书记考察河北承德纪实" class="oneline">
                      习近平总书记考察河北承德纪实
                    </i></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);"
                  ><img class="img" src="../assets/images/media/2.jpg" alt="">
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
      news:null,//所有文章
      listLoading: true,
      totalPage: 1, // 总共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 15, // 每页显示数量
      headPage: 1,
      currentPageData: [],//当前页显示内容
      hotnews:null,
    }
  },
  components: {
    guidebar,
    NormalHead,
  },methods: {
    //对应新闻跳转
    newsBeijin(id){
      let urlpath="http://localhost:8080/news?newsid="+id;
      window.open(urlpath);
    },
    //对应热点新闻跳转
    newsHot(id){
      let urlpath="http://localhost:8080/news?newsid="+id+'a';
      window.open(urlpath);
    },
    //获取当前页新闻列表
    getNewsData(){
      this.$http({
          method: "get",
          url: "/news/queryAll?newstype=1",
        }).then((res) => {
          this.news = res.data;
          this.totalPage=Math.ceil(this.news.length / this.pageSize);///?????????
          this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
          this.getCurrentPageData();
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
    getCurrentPageData() {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.news.slice(begin,end);
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
  created() {
    this.getNewsData();
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
</style>