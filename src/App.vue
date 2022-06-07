<template>
 <div class="container">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <div class="row clearfix">
                    <div class="col-md-6 column">
                        <div class="row clearfix">
                            <div class="col-md-2 column">
                                <img alt="140x140" src="./assets/images/logo.png" />
                            </div>
                            <div class="col-md-8 column">
                                <h3 class="logo_title">
                                中国志愿服务网
                                </h3>
                            </div>
                            <div class="col-md-2 column">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 column">
                        <div class="row clearfix">
                            <div class="col-md-12 column">
                      
                          <div class="top_bar">
                            <ul>
                            <li style="color: #333!important;font-weight: 700;">中国志愿服务网</li>
                            <li style="color:red">请登录</li>
                            <router-link to="/user">grzx</router-link>
                            <li>志愿者注册</li>
                            <li style="margin-top:3px">|</li>
                            <li>志愿队伍注册</li>
                            <li><img alt="140x140" src="./assets/images/slogan.png" /></li>
                          </ul>
                          </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

    <div style=" background:red;height: 60px;">
    <ul class="index_nav">
                <li class="">首页</li>
                <li><router-link to="/volunteer_program"><a style="color:#fff;text-decoration: none;">志愿项目</a></router-link></li>
                <li><router-link to="/volunteer_team"><a style="color:#fff;text-decoration: none;">志愿队伍</a></router-link></li>
                <li>志愿风采</li>
                <li>动态信息</li>
                <li><router-link to="/media"><a style="color:#fff;text-decoration: none;">媒体报道</a></router-link></li>
                <li class="disabled">通知公告</li>
    </ul>
        </div>

   <div>
   
     <router-view></router-view>
    </div>










    <div class="footer" style="background: #1b293a;width: 100%;height: 250px;">
    <div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
            <ul>
                <li>友情链接： 民政部</li>
                <li>|</li>
                <li>民政一体化政务服务平台</li><li>|</li>
                <li> 中国文明网</li><li>|</li>
                <li>中国社会组织</li><li>|</li>
                <li>中国社会工作</li><li>|</li>
                <li>中华志愿者协会</li>
            </ul>

            <div style="border:1px dashed #fff"></div>


             <ul style="margin-top:20px">
                <li>客服电话：4006818148转8</li>
                <li>技术支持：深圳市永兴元科技股份有限公司</li>
            </ul>
             <ul style="margin-top:5px">
                <li>客服QQ群：922238617</li>
                <li>推荐浏览器：谷歌浏览器（点击安装）</li>
            </ul>
            <ul style="margin-top:5px">
                <li>版权所有：中华人民共和国民政部</li>
                <li>ICP备案编号：京ICP备13012430号</li>
            </ul>

            <img src="./assets/images/footer.png" style="position:absolute;bottom:10px;right:40px;height:120px;width:330px"/>

		</div>
	</div>
</div>


</div>

</template>

<script>

export default {
  
  name: 'App',
  components: {
  } ,
  methods:{
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
.footer ul li{
    float: left;
    color: #fff;
    margin-left: 15px;
}
.footer ul{
    margin-top: 40px;
    height: 30px;
}
.index_nav{
    background:red;
    text-align: center;
    margin: 0 auto;
    color:#fff;
    width: 1170px;
}
.index_nav li{
    float: left;
    line-height: 60px;
    color:#fff !important;
    font-weight:500;
    font-size: 19px;
}

</style>
