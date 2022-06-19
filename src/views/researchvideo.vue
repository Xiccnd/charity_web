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
            <div class="detail">
                <h3>志愿服务队伍注册</h3> 
                <div class="detail-tips" style="text-align: inherit;">
                    <span>日期：
                        <span style="">
                        2021-02-04
                        </span>
                    </span> 
                    <span style="">来源：<span>全国志愿服务信息系统</span></span>
                </div> 
                <div>
                    <video 
                        width="775" 
                        height="416" 
                        controls="controls" 
                        autoplay="autoplay" 
                        src="https://download.yxybb.com/project/MZ/resource/2021/2/4/CS03-09 如何注册成为志愿队伍.mp4"
                        v-if="$route.query.id==1"
                        >
                        您的浏览器不支持 video 标签。
                    </video>
                    <video 
                        width="775" 
                        height="416" 
                        controls="controls" 
                        autoplay="autoplay" 
                        src="https://download.yxybb.com/project/MZ/resource/2021/1/29/CS03-01志愿者注册.mp4"
                        v-if="$route.query.id==2"
                        >"
                        >
                        您的浏览器不支持 video 标签。
                    </video>
                </div> 
                <div class="tabbar">
                    <span class="active">课程介绍</span> 
                    <span>课程讨论</span>
                </div> 
                <div class="tabbar-down">
                    <p style="padding: 18px;">
                        志愿服务队伍注册
                    </p> 
                    <p style="width: 100%; text-align: center; display: none;">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC">
                    </p>
                  </div> 
                  <div class="tabbar-down" style="display: none;">
                  <div class="load">
                    <h2 class="subtitle subtitle-margin subtitle-plain">
                        最新评论
                    </h2> 
                    <p style="width: 100%; text-align: center;">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC">
                    </p> 
                        <ul class="activity"></ul>
                    <div data-v-02884387="" id="cpaginate">
                    </div>
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
.detail h3 {
    font-size: 28px;
    color: #333;
    font-weight: bold;
    margin: 0;
    line-height: 1.6;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.detail-tips {
    padding: 25px 0;
}
.detail-tips span {
    margin: 0 10px;
}
.detail-tips span {
    font-size: 14px;
    color: #333;
    margin-right: 20px;
}
span, i, b {
    display: inline-block;
}
.detail-tips {
    /* text-align: center; */
}
</style>