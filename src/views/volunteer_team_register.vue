<template>
  <Head></Head>
  <div data-v-18d5a56f id="orgreg">
  <div data-v-18d5a56f="" class="main bannerimg">
    <div data-v-18d5a56f="" class="mid">
      <div style="height: 8px"></div>
      <ul data-v-18d5a56f="" class="row w">
        <li data-v-18d5a56f="" class="col">
          <div data-v-18d5a56f="" class="router"><span data-v-18d5a56f="">当前位置：</span>
            <a data-v-18d5a56f="" href="javascript:void(0);"><span data-v-18d5a56f="" class="">首页</span></a>
            <span data-v-18d5a56f="">志愿队伍注册</span>
          </div>
        </li>
      </ul>
      <ul data-v-18d5a56f="" class="row w">
        <li data-v-18d5a56f="" class="col v-t w white">
          <div data-v-18d5a56f="" class="tabbar">
            <a data-v-18d5a56f="" href="#" class="" v-on:click="voredict()">志愿者注册</a>
            <a data-v-18d5a56f="" href="#/chongqing/orgreg" aria-current="page" class="active router-link-exact-active router-link-active">志愿队伍注册</a></div>
          <div data-v-18d5a56f="" class="tabbar-down" style="padding: 0px 20px;">
            <h2 data-v-18d5a56f="" class="subtitle subtitle-margin subtitle-noline">基本信息</h2>
            <ul data-v-18d5a56f="" class="grid" style="margin-top: 10px;">

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em><span data-v-18d5a56f="" id="orgname">用户名：</span>
                    <span data-v-18d5a56f="" id="orgtip" style="font-size: 14px; color: rgb(102, 102, 102);"></span>
                  </p>
                  <input type="text" id="groupName" maxlength="50" placeholder="请输入用户名" v-model="team.uname"></div>
                <span data-v-18d5a56f="" id="groupNameTips" class="form-error down-tip" style="color: red;"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em><span data-v-18d5a56f="" id="orgname">密码：</span>
                    <span data-v-18d5a56f="" id="orgtip" style="font-size: 14px; color: rgb(102, 102, 102);"></span>
                  </p>
                  <input type="text" id="groupName" maxlength="50" placeholder="请输入密码" v-model="team.password"></div>
                <span data-v-18d5a56f="" id="groupNameTips" class="form-error down-tip" style="color: red;"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em><span data-v-18d5a56f="" id="orgname">队伍名称：</span>
                    <span data-v-18d5a56f="" id="orgtip" style="font-size: 14px; color: rgb(102, 102, 102);">（请与统一社会信用代码证书机构名称保持一致）</span>
                  </p>
                  <input type="text" id="groupName" maxlength="50" placeholder="请输入队伍名称" v-model="team.teamName"></div>
                <span data-v-18d5a56f="" id="groupNameTips" class="form-error down-tip" style="color: red;"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>详细地址：
                  </p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="address" maxlength="50"  placeholder="请选择详细地址" v-model="team.detailedAddress">
                    </div>
                    <div data-v-18d5a56f="" class="col v-m pl-10" style="width: 90px;">
                      <a data-v-18d5a56f="" href="javascript:void(0);" class="button button-line">选择</a>
                    </div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="detailAddressTips" class="form-error down-tip"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>项目联系人：</p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="orgArea" placeholder="请输入项目联系人" v-model="team.contact"></div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="orgAreaTips" class="form-error down-tip"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>手机号码：</p>
                  <input type="text" id="volNum" v-model="team.telephone" maxlength="11" oninput="this.value=this.value.replace(/[^\d]/g,'');if(this.value==0)value='';" placeholder="请输入手机号码">
                </div>
                <span data-v-18d5a56f="" id="volNumTips" class="form-error down-tip" style="color: red;"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form"><p data-v-18d5a56f="" class="form-label">
                  <em data-v-18d5a56f="">*</em> <span data-v-18d5a56f="">地址：</span></p>
                  <input type="text" id="orgUnit" maxlength="50" placeholder="请输入地址" v-model="team.address">
                </div>
                <span data-v-18d5a56f="" id="orgUnitTips" class="form-error down-tip" style="color: red;"></span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form"><p data-v-18d5a56f="" class="form-label">
                  <em data-v-18d5a56f="">*</em>联络组织：</p>
                  <input type="text" id="tyCode" maxlength="18" placeholder="请输入联络组织" v-model="team.liaisonOrganization">
                </div>
                <span data-v-18d5a56f="" class="form-error down-tip" id="tyCodeTips"></span>
              </li>



              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <span data-v-18d5a56f="">队伍简介：
                      <span data-v-18d5a56f="" style="font-size: 14px; color: rgb(102, 102, 102);"></span>
                    </span>
                  </p>
                  <input type="text" maxlength="250" placeholder="请输入队伍简介" v-model="team.teamProfile">
                </div>
                <span data-v-18d5a56f="" class="form-error down-tip" id="albe0040Tips"></span>
              </li>
              <!---->
              <!---->

              <li data-v-18d5a56f="" id="loginbm" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>登记部门：</p>
                  <input type="text" id="loginDepart" maxlength="20" placeholder="请选择登记部门" v-model="team.regisDepartment">
                </div>
                <span data-v-18d5a56f="" id="loginDepartTips" class="form-error down-tip"></span>
              </li>

              <li data-v-18d5a56f="" id="loginjg" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>登记机关：
                  </p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="loginOrg" maxlength="20" placeholder="请选择登记机关" v-model="team.registrationAuthority">
                    </div>
                    <div data-v-18d5a56f="" class="col v-m pl-10" style="width: 90px;">
                      <a data-v-18d5a56f="" href="javascript:void(0);" class="button button-line">选择</a>
                    </div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="loginOrgTips" class="form-error down-tip"></span>
              </li>
              <!----> <!---->
              <!----> <!---->
              <!---->
              <li data-v-18d5a56f="" class="grid-item g-24">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>服务类别：
                    <em data-v-18d5a56f=""></em>
                  </p>
                  <div data-v-18d5a56f="" class="checkbox-fixed">
                    <span v-for="(item,index) in service" :key="index">
                    <label data-v-18d5a56f="" for="afc01caad28b4c2e93bb0b7ac1840a6a" class="checkbox">
                      <input data-v-18d5a56f="" type="radio"  name="checkbox" :value="item.sid" v-model="team.sids" >
                      <span data-v-18d5a56f=""></span>
                      <i data-v-18d5a56f="">{{ item.serviceName }}</i>
                    </label>
                    </span>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="serviceTypeTips" class="form-error down-tip"></span></li>
            </ul>
            <div data-v-18d5a56f="" class="t-c pt-30">
              <a data-v-18d5a56f="" href="javascript:void(0);" class="button" v-on:click="btn()">注册</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import Head from "../components/login_head.vue";
import Guidebar from "../components/guidebar.vue";

export default {
  data() {
    return {
        team:{
          uname:"",
          password:"",
          contact:"",
          teamName: "",
          address:"",
          regisDepartment:"",
          registrationAuthority:"",
          telephone:"",
          detailedAddress:"",
          liaisonOrganization:"",
          teamProfile:"",
          sids:[]
      },
      service:[
        {
          sid:"1",
          serviceName:"其他",
        }
      ],

    };
  },
  props: [],
  created() {
    const _this = this
    this.$http.get("/classOfService/queryAll")
        .then(res => {
          _this.service = res.data
        })
  },
  mounted() {
  },
  components: {
    Head,
    Guidebar,
  },
  methods: {
    voredict(){
    this.$router.push("/volunteer_register")
    },
    btn:function (){
      this.$http.post("volunteerTeamcensor/Add",this.team).then(res =>{
        alert("注册成功")
        this.$router.push("/volunteer_login2")
      })
    }
  },
};
</script>

<style scoped>
.subtitle-margin {
  margin-top: 20px;
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
  padding-left: 16px;
  margin: 0;
}
.subtitle:before {
  content: "";
  display: inline-block;
  width: 4px;
  height: 20px;
  background: #cc0000;
  position: absolute;
  left: -1px;
  top: 50%;
  margin-top: -10px;
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

element.style {
  margin-top: 10px;
}

.grid {
  font-size: 0;
  margin: 0;
  padding: 0;
}

.form {
  padding-left: 0 !important;
  margin-right: 20px;
  margin-top: 30px;
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

.g-12 {
  width: 50%;
}

.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.grid {
  font-size: 0;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.g-24 {
  width: 100%;
}

.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.checkbox-fixed .checkbox, .checkbox-fixed .radio {
  width: 162px;
  margin-right: 0;
}


.checkbox {
  display: inline-block;
  vertical-align: middle;
  margin: 10px 0;
  margin-right: 45px;
  font-size: 0;
  cursor: pointer;
  position: relative;
}

label {
  cursor: default;
}

.form input[data-v-18d5a56f] {
  width: 20px;
  height: 20px;
}

.checkbox input {
  display: none;
}

.checkbox input {
  display: inline-block;
  vertical-align: middle;
}

.form input, .form textarea, .input, .textarea {
  width: 100%;
  font-size: 14px;
  color: #333;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #dfdfdf;
  padding-left: 15px;
  transition: 0.3s;
  box-sizing: border-box;
}

input[type="checkbox" i] {
  background-color: initial;
  cursor: default;
  appearance: auto;
  box-sizing: border-box;
  margin: 3px 3px 3px 4px;
  padding: initial;
  border: initial;
}

.checkbox i {
  font-size: 16px;
  color: #333;
  font-style: normal;
  vertical-align: middle;
  margin-left: 10px;
}

em, i {
  font-style: normal;
}

span, i, b {
  display: inline-block;
}

i {
  font-style: italic;
}

.checkbox span {
  display: inline-block;
}

.checkbox span {
  display: none;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  border: 1px solid #c6c6c6;
  position: relative;
  border-radius: 3px;
}
</style>