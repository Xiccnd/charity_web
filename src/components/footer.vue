<template>
  <div id="footers">
    <div class="footer">
      <div class="mid-layout row">
        <div class="col v-m" style="vertical-align: top; width: 840px">
          <div class="link-list list-margin">
            <span>友情链接：</span>
            <a href="http://www.mca.gov.cn/" title="民政部" target="_blank">民政部</a>
            <a href="http://zwfw.mca.gov.cn/" title="民政一体化政务服务平台" target="_blank">民政一体化政务服务平台</a>
            <a href="http://www.wenming.cn/" title="中国文明网" target="_blank">中国文明网</a>
            <a href="http://www.chinanpo.gov.cn/" title="中国社会组织" target="_blank">中国社会组织</a>
            <a href="https://shgz.mca.gov.cn/" title="中国社会工作网" target="_blank">中国社会工作网</a>
            <a href="http://www.chinesevolunteer.org/" title="中华志愿者协会" target="_blank">中华志愿者协会</a>
          </div>
          <ul class="row w">
            <li class="col v-m t-l g-16 g-18">
              <p>
                客服电话：4006818148转8
                <b style="margin-left: 35px">技术支持：深圳市永兴元科技股份有限公司</b>
              </p>
              <p>
                客服QQ群：922238617
                <b style="margin-left: 35px">推荐浏览器：
                  <span title="点击下载谷歌浏览器稳定版" style="cursor: pointer; color: rgb(255, 255, 255)">谷歌浏览器（点击安装）</span>
                </b>
              </p>
              <p>
                版权所有：中华人民共和国民政部
                <b style="margin-left: 35px">ICP备案编号：京ICP备13012430号 </b>
              </p>
            </li>
            <li class="col v-m">
              <h2>浏览网站人数统计</h2>
              <div class="count">
                <span> 0</span><span> 0</span><span> 7</span><span> 0</span><span> 9</span><span> 2</span><span> 1</span><span> 0</span>
              </div>
            </li>
          </ul>
        </div>
        <div style="width: 390px">
          <img src="../assets/images/footer/weixin.png" alt="" style="margin-left: 38px"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
.footer {
  background: #1b293a;
  padding: 50px 0;
  margin-top: 40px;
}

.mid-layout {
  width: 1200px;
  margin: 0 auto;
}

.footer .link-list {
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px dashed #fff;
  padding-bottom: 20px;
  margin-right: 50px;
}

.footer .link-list span {
  display: inline-block;
  vertical-align: middle;
}

.footer .link-list {
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px dashed #fff;
  padding-bottom: 20px;
  margin-right: 50px;
}

.footer .link-list a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
}

.footer .link-list a:before {
  content: "|";
  font-size: 14px;
  margin: 0 10px;
}

.footer p {
  font-size: 14px;
  color: #ccc;
  margin: 10px 0;
}

.footer h2 {
  font-size: 14px;
  color: #d4d4d4;
  margin: 10px 0;
  font-weight: normal;
}

.count span {
  display: inline-block;
  width: 23px;
  height: 33px;
  background: #f14441;
  font-family: "UniveConBol";
  font-size: 26px;
  color: #fff;
  text-align: center;
  line-height: 33px;
  border-radius: 3px;
  margin-right: 3px;
}
</style>