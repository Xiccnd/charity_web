<template>
  <div class="wrapper"><h2 class="subtitle subtitle-noline">热点新闻</h2>
    <ul class="list list-mini">
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        北京：发布新冠肺炎疫情社区防控志愿服务工作指引
      </a></li>
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        北京晚报：志愿者来了！以最快的速度提升核酸检测能力
      </a></li>
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        光明日报：推动志愿服务有效融入基层社会治理
      </a></li>
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        广东：省民政厅关于印发《社会工作者、志愿者参与新型冠状病毒...
      </a></li>
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        山西：省文明办、省民政厅等向全省广大志愿者发出倡议书
      </a></li>
      <li class="row w"><a href="javascript:void(0);" class="col v-m oneline full"><!---->
        人民视觉：沈阳：志愿者送菜到家 助力疫情防控
      </a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "news"
}
</script>

<style scoped>
.wrapper {
  border: 1px solid #f2c9bb;
  background: rgba(255, 255, 255, 0.6);
  padding: 15px;
  margin-bottom: 20px;
  width: 328px;
}

.wrapper .subtitle {
  padding-left: 16px;
  border-bottom: 0;
  line-height: normal;
  margin: 10px 0;
}

.subtitle-noline {
  border-bottom: 0;
  padding-left: 20px;
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

h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.wrapper .subtitle:before {
  left: 0;
}

.subtitle-noline:before {
  left: 0;
}

.subtitle:before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #cc0000;
  position: absolute;
  left: 20px;
  top: 50%;
  margin-top: -10px;
}

.list-mini {
  padding: 0;
  padding-bottom: 20px;
}

.list {
  padding: 10px 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul ul {
  list-style-type: circle;
  margin-block-start: 0px;
  margin-block-end: 0px;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.list-mini li {
  padding-top: 10px;
  padding-bottom: 10px;
}

.list li {
  padding: 13px 0;
  padding-left: 12px;
  line-height: 1;
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.w {
  width: 100%;
}

.row {
  display: table;
  table-layout: fixed;
  box-sizing: border-box;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.list li:before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #cc0000;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -2px;
  border-radius: 50%;
}

.list li a.full {
  width: 100%;
}

.list-mini li a {
  font-size: 14px;
}

.list li a {
  font-size: 16px;
  color: #333;
  width: 80%;
  transition: 0.3s;
  padding-left: 10px;
}

.oneline {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v-m {
  vertical-align: middle;
}

.col {
  display: table-cell;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
</style>