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
                  <input type="text" id="groupName" maxlength="16" placeholder="请输入用户名" v-model="team.uname" @blur="checkName()"></div>
                <span data-v-18d5a56f="" id="groupNameTips1" class="form-error down-tip" style="color: red;">{{ checkname }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em><span data-v-18d5a56f="" id="orgname">密码：</span>
                    <span data-v-18d5a56f="" id="orgtip" style="font-size: 14px; color: rgb(102, 102, 102);"></span>
                  </p>
                  <input type="password" id="groupName" maxlength="20" placeholder="请输入密码" v-model="team.password" @blur="checkPass()"></div>
                <span data-v-18d5a56f="" id="groupNameTips2" class="form-error down-tip" style="color: red;">{{ checkpass }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em><span data-v-18d5a56f="" id="orgname">队伍名称：</span>
                    <span data-v-18d5a56f="" id="orgtip" style="font-size: 14px; color: rgb(102, 102, 102);">（请与统一社会信用代码证书机构名称保持一致）</span>
                  </p>
                  <input type="text" id="groupName" maxlength="50" placeholder="请输入队伍名称" v-model="team.teamName" @blur="checkTeam"
                         onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"></div>
                <span data-v-18d5a56f="" id="groupNameTips3" class="form-error down-tip" style="color: red;">{{ checkteam }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>详细地址：
                  </p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="address" maxlength="50"  placeholder="请选择详细地址" v-model="team.detailedAddress" @blur="checkDetaile"
                             onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
                    </div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="detailAddressTips" class="form-error down-tip" style="color: red">{{ checkdetaile }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>项目联系人：</p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="orgArea" placeholder="请输入项目联系人" v-model="team.contact" @blur="checkContact"
                             onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))"></div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="orgAreaTips" class="form-error down-tip" style="color: red">{{ checkcontact }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>手机号码：</p>
                  <input type="text" id="volNum" v-model="team.telephone" maxlength="11" oninput="this.value=this.value.replace(/[^\d]/g,'');if(this.value==0)value='';" placeholder="请输入手机号码" @blur="checkPhone">
                </div>
                <span data-v-18d5a56f="" id="volNumTips" class="form-error down-tip" style="color: red;">{{ checkphone }}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form"><p data-v-18d5a56f="" class="form-label">
                  <em data-v-18d5a56f="">*</em> <span data-v-18d5a56f="">地址：</span></p>
                  <input type="text" id="orgUnit" maxlength="50" placeholder="请输入地址" v-model="team.address" @blur="checkAddress"
                         onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
                </div>
                <span data-v-18d5a56f="" id="orgUnitTips" class="form-error down-tip" style="color: red;">{{checkaddress}}</span>
              </li>

              <li data-v-18d5a56f="" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form"><p data-v-18d5a56f="" class="form-label">
                  <em data-v-18d5a56f="">*</em>联络组织：</p>
                  <input type="text" id="tyCode" maxlength="18" placeholder="请输入联络组织" v-model="team.liaisonOrganization" @blur="checkOrgan"
                         onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
                </div>
                <span data-v-18d5a56f="" class="form-error down-tip" id="tyCodeTips" style="color: red">{{checkorgan}} </span>
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
                  <input type="text" id="loginDepart" maxlength="20" placeholder="请选择登记部门" v-model="team.regisDepartment" @blur="checkDepar"
                         onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
                </div>
                <span data-v-18d5a56f="" id="loginDepartTips" class="form-error down-tip" style="color: red">{{checkdepar}}</span>
              </li>

              <li data-v-18d5a56f="" id="loginjg" class="grid-item g-12">
                <div data-v-18d5a56f="" class="form">
                  <p data-v-18d5a56f="" class="form-label">
                    <em data-v-18d5a56f="">*</em>登记机关：
                  </p>
                  <div data-v-18d5a56f="" class="row w">
                    <div data-v-18d5a56f="" class="col v-m">
                      <input type="text" id="loginOrg" maxlength="20" placeholder="请选择登记机关" v-model="team.registrationAuthority" @blur="checkAuth"
                             onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))">
                    </div>
                  </div>
                </div>
                <span data-v-18d5a56f="" id="loginOrgTips" class="form-error down-tip" style="color: red">{{checkauth}}</span>
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
                      <input data-v-18d5a56f="" type="radio"  name="checkbox" :value="item.sid" v-model="team.sids" 
                      >
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
          sid:"",
          serviceName:"",
        }
      ],
      checkname:"以字母开头，长度在6-16之间，只能包含字符、数字和下划线",
      checkpass:"密码最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符",
      checkteam:"只能为汉字",
      checkdetaile:"只能为汉字",
      checkcontact:"只能为汉字",
      checkorgan:"只能为汉字",
      checkphone:"",
      checkaddress:"只能为汉字",
      checkdepar:"只能为汉字",
      checkauth:"只能为汉字"
    };
  },
  props: [],
  created() {
    const _this = this
    this.$http.get("/classOfService/queryAll")
        .then(res => {
          console.log(res.data)
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
    checkName(){
      var nameRegex=/^[a-zA-Z]\w{5,15}$/
      var Regex = new RegExp(nameRegex)
      if(this.team.uname==''){
        this.checkname="用户名不可为空(以字母开头，长度在6-16之间，只能包含字符、数字和下划线)"
        document.getElementById("groupNameTips1").style.color="red"
      }else if(!Regex.test(this.team.uname)){
        this.checkname="用户名不规范(以字母开头，长度在6-16之间，只能包含字符、数字和下划线)"
        document.getElementById("groupNameTips1").style.color="red"
      }else{
        this.checkname="用户名可用"
        document.getElementById("groupNameTips1").style.color="green"
      }
    },
    checkPass(){
      var passRegex=/^.*(?=.{6})(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$/
      var Regex = new RegExp(passRegex)
      if(this.team.password==''){
        this.checkpass="密码不可为空(密码长度至少6字符,至少1个大写字母，1个小写字母，1个数字，1个特殊字符)"
        document.getElementById("groupNameTips2").style.color="red"
      }else if(!Regex.test(this.team.password)){
        this.checkpass="密码不规范(密码长度至少6字符,至少1个大写字母，1个小写字母，1个数字，1个特殊字符)"
        document.getElementById("groupNameTips2").style.color="red"
      }else{
        this.checkpass="密码可用"
        document.getElementById("groupNameTips2").style.color="green"
      }
    },
    checkTeam(){
      if(this.team.teamName==''){
        this.checkteam="名称不可为空"
        document.getElementById("groupNameTips3").style.color="red"
      }else{
        this.checkteam="名称可用"
        document.getElementById("groupNameTips3").style.color="green"
      }
    },
    checkPhone(){
      var numReg = /^1[3|4|5|7|8|9][0-9]\d{4,11}$/
      var numRe = new RegExp(numReg)
      if(this.team.telephone==''){
        document.getElementById("volNumTips").style.color="red"
        this.checkphone="电话不可为空"
      }else if(!numRe.test(this.team.telephone)){
        document.getElementById("volNumTips").style.color="red"
        this.checkphone="电话不规范"
      }else{
        document.getElementById("volNumTips").style.color="green"
        this.checkphone="电话可用"
      }
    },
    checkDetaile(){
      if(this.team.detailedAddress==''){
        document.getElementById("detailAddressTips").style.color="red"
        this.checkdetaile="地址不可为空"
      }else{
        document.getElementById("detailAddressTips").style.color="green"
        this.checkdetaile="地址可用"
      }
    },
    checkContact(){
      if(this.team.contact==''){
        document.getElementById("orgAreaTips").style.color="red"
        this.checkcontact="联系人不可为空"
      }else{
        document.getElementById("orgAreaTips").style.color="green"
        this.checkcontact="联系人可用"
      }
    },
    checkAddress(){
      if(this.team.address==''){
        document.getElementById("orgUnitTips").style.color="red"
        this.checkaddress="地址不可为空"
      }else{
        document.getElementById("orgUnitTips").style.color="green"
        this.checkaddress="地址可用"
      }
    },
    checkOrgan(){
      if(this.team.liaisonOrganization==''){
        document.getElementById("tyCodeTips").style.color="red"
        this.checkorgan="组织不可为空"
      }else{
        document.getElementById("tyCodeTips").style.color="green"
        this.checkorgan="组织可用"
      }
    },
    checkDepar(){
      if(this.team.regisDepartment==''){
        document.getElementById("loginDepartTips").style.color="red"
        this.checkdepar="部门不可为空"
      }else{
        document.getElementById("loginDepartTips").style.color="green"
        this.checkdepar="部门可用"
      }
    },
    checkAuth(){
      if(this.team.registrationAuthority==''){
        document.getElementById("loginOrgTips").style.color="red"
        this.checkauth="机关不可为空"
      }else{
        document.getElementById("loginOrgTips").style.color="green"
        this.checkauth="机关可用"
      }
    },
    btn:function (){
      this.$http.post("/volunteerTeamcensor/Add",this.team)
      console.log(this.team)
      alert("注册成功")
      this.$router.push("/volunteer_login2")
    },
    voredict(){
    this.$router.push("/volunteer_register")
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
.form-error {
  font-size: 14px;
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
.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}
.down-tip[data-v-4d853816] {
  font-size: 14px;
  height: 17px;
  padding-left: 20px;
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
