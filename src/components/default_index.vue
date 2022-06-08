<template>
  <div class="container mt-5 mb-5">
    <!-- 轮播 -->
    <div id="demo" class="carousel slide col-md-6" data-bs-ride="carousel">

      <!-- 指示符 -->
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
      </div>

      <!-- 轮播图片 -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/images/c-1.png" class="d-block" style="width:100%; height: 400px">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/c-2.jpg" class="d-block" style="width:100%; height: 400px">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/c-3.jpeg" style="width:100%; height: 400px">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/c-4.jpeg" style="width:100%; height: 400px">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/c-5.jpeg" style="width:100%; height: 400px">
        </div>
      </div>

      <!-- 左右切换按钮 -->
      <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <div class="col-md-6" style="height: 400px">
      <ul class="text-left" style="border: 2px dashed red">
        <li><h1 class="fw-bold">信息动态</h1></li>
        <li class="fs-2">1.北京：发布新冠肺炎疫情社区防控志愿服务工作指引</li>
        <li class="fs-2">2.广东：省民政厅关于印发《社会工作者、志愿者参与新型冠状病毒感染的肺炎疫情防控工作指引（第三版）》的通知</li>
        <li class="fs-2">3.山西：省文明办、省民政厅等向全省广大志愿者发出倡议书</li>
        <li class="fs-2">4.江苏徐州：关于进一步加强疫情防控志愿服务工作的通知</li>
        <li class="fs-2">5.黑龙江：民政厅印发关于进一步发挥慈善力量社会工作者志愿服务作用 助力疫情防控工作的通知</li>
        <li class="fs-2">6.广东：民政厅印发关于发挥“五社联动”作用助力基层疫情防控工作的通知</li>
        <li class="fs-2">7.吉林：中宣部、中央文明办在吉林省开展的“志愿服务关爱行动”报名近3.5万人 近1.3万人已上岗服务</li>
      </ul>
    </div>
  </div>
  <div class="container">
    <img src="../assets/images/long.jpg" style="width: 100%;"/>
  </div>
  <div class="container mt-5 mb-5 text-left">
    <div class="col-md-4">
      <ul>
        <li class="fs-2"><h1 class="fw-bold">政策文件</h1></li>
        <li class="fs-2"><span class="dot"></span>志愿服务组织基本规范</li>
        <li class="fs-2"><span class="dot"></span>《志愿服务记录与证明出具办法（试行）》解读问答</li>
        <li class="fs-2"><span class="dot"></span>志愿服务记录与证明出具办法（试行）</li>
        <li class="fs-2"><span class="dot"></span>陆士桢：发展中国特色志愿服务，促进社会文明进步</li>
        <li class="fs-2"><span class="dot"></span>肖金明：《志愿服务条例》的立法创新与多重效应</li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul>
        <li class="fs-2"><h1 class="fw-bold">通知公告</h1></li>
        <li class="fs-2"><span class="dot"></span>关于行业标准《志愿服务项目基本规范》公开征求意见的通知</li>
        <li class="fs-2"><span class="dot"></span>民政部办公厅关于组织开展全国志愿服务信息系统（2.0版）试运行工作的通知</li>
        <li class="fs-2"><span class="dot"></span>关于国家标准《志愿服务信息元数据》公开征求意见的通知</li>
        <li class="fs-2"><span class="dot"></span>中共中央宣传部、中央文明办等16部门关于开展2020年度全国学雷锋志愿服务“四个100”先进典型宣传推选活动的通知</li>
        <li class="fs-2"><span class="dot"></span>民政部办公厅关于深入开展脱贫攻坚志愿服务宣传展示活动的通知</li>
      </ul>
    </div>
    <div class="col-md-4">
      <ul>
        <li class="fs-2"><h1 class="fw-bold">使用指南</h1></li>
        <li class="fs-2"><span class="dot"></span>中国志愿APP下载</li>
        <li class="fs-2"><span class="dot"></span>志愿服务团体注册申请表</li>
        <li class="fs-2"><span class="dot"></span>管理部门查询、统计数据</li>
        <li class="fs-2"><span class="dot"></span>管理部门审核组织及无联络组织的志愿服务团体</li>
        <li class="fs-2"><span class="dot"></span>管理部门如何登录系统</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "default_index"
}
</script>

<style scoped>
ul li {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 50px;
}

.dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #e12929;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
</style>