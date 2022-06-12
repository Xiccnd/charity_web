<template>
  <Head></Head>
  <div  id="volreg">
    <div  class="main bannerimg">
      <div  class="mid">
        <ul  class="row w">
          <li  class="col">
            <guidebar>
              <template v-slot:pp>
                <span class="">首页</span>
              </template>
              <template v-slot:cp>
                <span> 志愿者注册</span>
              </template>
            </guidebar>
          </li>
        </ul>
        <ul  class="row w">
          <li  class="col v-t w white">
            <div  class="tabbar">
              <a
                
                href="#/chongqing/volreg"
                aria-current="page"
                class="active router-link-exact-active router-link-active"
                >志愿者注册</a
              >
              <a  href="#/chongqing/orgreg" class=""
                >志愿队伍注册</a
              >
            </div>
            <h2
              
              class="subtitle subtitle-margin subtitle-noline"
            >
              账号信息
            </h2>
            <ul  class="grid">
              <li  class="grid-item g-16">
                <ul  class="grid">
                  <div  class="form g-12">
                    <p  class="form-label">
                      <em >*</em>用户名：
                    </p>
                    <input  
                      type="text"
                      name="userName"
                      id="username"
                      maxlength="20"
                      oninput="this.value=this.value.replace(/[^\w_.]/g,'').slice(0,20);"
                      placeholder="请输入用户名"
                      v-model="user.name"
                      v-on:blur="checkNum"
                    />
                   
                    <p
                      id="usernameTips"
                      class="form-error warn-tip"
                      style="margin-top: 10px"
                    >
                      用户名长度6～16个字符
                    </p>
                    
                  </div>
                  <div  class="form g-12">
                    <p  class="form-label">
                      <em >*</em>密码：
                    </p>
                    <input
                      
                      type="password"
                      id="password"
                      maxlength="20"
                      placeholder="请输入密码"
                      v-model="user.password"
                      v-on:blur="checkpawd"
                    />
                    <img
                      
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTBAQEBIUFRIUFBASFBMTFBAQEBITFBITFBISFBMTExITExMTExIUFRITFRMUFURZzp4AAAAPdFJOUwAQz4A3vCDg8G9gkFDQoA0DOqMAAACKSURBVCjPY2AYwkBSAMFmNAQS6xURAkJ/gITsJ7gSNv2LIGX3O2ECM76C5bj/V4Jpxun/DcDiLP//f7VycVms//+HA8Skn371/4Hg+xZ7BbDA/gAG9s+hofsVGFh/gwU6BBjyCxgY2D8ysPWCBdKAbnnAwMD3C8yEAPsDDAxcn5GcLwMiDg7uIAYAWu0nL21VmUgAAAAASUVORK5CYII="
                      alt=""
                      class="pwd_img"
                    />
                    <img
                      
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUdwTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANtBLioAAAAQdFJOUwAgwNBghz8Q8HCgsFDg3zDmODcFAAAAs0lEQVQ4y91T0QKDIAhMS0RNu///2iFa26rN93xBvYNDwGl63tooBNp+ocYV6CrO3MA+Voyt5WqjP+Or3OegniZkYa7fuLjz8j4uQo+f4e0e1BM1mwB7yPgZCLpzVd/pNgCzP/AeXnDmnSEynZHA7eleA4lruycgKRPo6RG4Ggb1VBsyJIgEbiXWLjFOcvjMVqj0p1A9+KnU7tqssjerXJs1brcOTG4Dk28HpnHqyJkH/qUXcr8LSlumRioAAAAASUVORK5CYII="
                      alt=""
                      class="pwd_img"
                      style="display: none"
                    />
                    <p
                      id="passwordTips"
                      class="form-error warn-tip"
                      style="margin-top: 10px"
                    >
                      8-16个字符,⾄少1个⼤写字母,1个⼩写字母和1个数字
                    </p>
                  </div>
                  <div  class="form g-12">
                    <p  class="form-label">
                      <em >*</em>确认密码：
                    </p>
                    <input
                      
                      type="password"
                      id="repeatpw"
                      maxlength="20"
                      placeholder="请输入确认密码"
                      v-model="password1"
                      v-on:blur="checkrepawd"
                    />
                    <img
                      
                      src="../assets/images/login/closeeyes.png"
                      alt=""
                      class="pwd_img"
                    />
                    <img
                      
                      src="../assets/images/login/openeyes.png"
                      alt=""
                      class="pwd_img"
                      style="display: none"
                    />
                    <p
                      id="repeatpwTips"
                      class="form-error warn-tip"
                    >请再次输入密码</p>
                  </div>
                  <div  class="form g-12">
                    <p  class="form-label">
                      <em >*</em>手机号码：
                    </p>
                    <input
                      type="text"
                      id="phonenum"
                      oninput="value=value.replace(/[^\d]/g,'').slice(0,11);"
                      maxlength="11"
                      placeholder="请输入手机号码"
                      v-model="user.telephone"
                      v-on:blur="checkPhone"
                    />
                    <p
                      id="phonenumTips"
                      class="form-error warn-tip"
                    >
                      手机号码不能为空，请确保该手机号码真实有效
                    </p>
                  </div>
                </ul>
              </li>
            </ul>
            
            <h2
              
              class="subtitle subtitle-margin subtitle-noline"
            >
              志愿者誓词
            </h2>
            <div  class="vote">
              <p  style="margin-bottom: 0px">
                我宣誓，自愿成为一名光荣的志愿者，为使我们的国家和城市更美好、人民更幸福、环境更安全，我要团结身边的人，投身其间。面对需求，我要行动。
              </p>
              <p >
                我承诺，我将竭尽所能，参加公益活动，帮助困难人群，真诚关怀有需要的人士，为他们带来温暖。
              </p>
              <a
                
                href="javascript:void(0);"
                id="register"
                class="button"
                v-on:click="register()"
                >申请成为实名注册志愿者</a
              >
            </div>
            <div
              
              class="agreement"
              style="
                height: 110px;
                line-height: 22px;
                margin: 20px auto 0px;
                overflow-y: scroll;
              "
            >
              <p >
                本网站及与本网站链接的网站，仅提供志愿者、志愿服务队伍、志愿服务机构及其它与此相关联之志愿服务项目。志愿者、志愿服务队伍、志愿服务机构以及因其它任何目的进入本网站的访问者接受本协议书条款，注册成为中国志愿服务网网站用户，并遵守本协议所述之条款使用本网站所提供之服务。如果您不接受本声明之条款，请勿使用本网站。接受本声明之条款，您将遵守本协议之规定。
              </p>
              <br  />
              <p >1.信息的发布</p>
              <br  />
              <p >·不得发布任何违反有关法律规定信息；</p>
              <p >
                ·不得发布任何与本网站志愿服务目的不适之信息；
              </p>
              <p >·不得发布任何不完整、虚假的信息；</p>
              <p >·用户对所发布的信息承担完全责任。</p>
              <br  />
              <p >2.信息的使用</p>
              <br  />
              <p >
                ·志愿服务队伍、志愿服务机构仅可就志愿服务目的使用志愿者之个人信息；
              </p>
              <p >
                ·志愿者仅可因参加某志愿服务项目，使用志愿服务队伍、志愿服务机构发布之项目招募信息；
              </p>
              <p >
                ·本网站提供的其它信息，仅与其相应内容有关的目的而被使用；
              </p>
              <p >
                ·不得将任何本网站的信息用作任何商业目的。
              </p>
              <br  />
              <p >3.信息的公开</p>
              <br  />
              <p >
                在本网站所登录的任何信息，均有可能被任何本网站的访问者浏览，也可能被错误使用。本网站对此将不予承担任何责任。
              </p>
              <br  />
              <p >4.信息的准确性</p>
              <br  />
              <p >
                任何在本网站发布的信息，均必须符合合法、准确、及时、完整的原则。但本网站将不能保证所有由第三方提供的信息，或本网站自行采集的信息完全准确。使用者了解，对这些信息的使用，需要经过进一步核实。本网站对访问者未经自行核实误用本网站信息造成的任何损失不予承担任何责任。
              </p>
              <br  />
              <p >5.信息更改与删除</p>
              <br  />
              <p >
                除了信息的发布者外，任何访问者不得更改或删除他人发布的任何信息。本网站有权根据其判断保留修改或删除任何不适信息之权利。
              </p>
              <br  />
              <p >6.版权、商标权</p>
              <br  />
              <p >
                本网站的图形、图像、文字及其程序等均属中国志愿服务网网站之版权，受商标法及相关知识产权法律保护，未经中国志愿服务网网站书面许可，任何人不得下载、复制、再使用。在本网发布信息之商标，归其相应的商标所有权人，受商标法保护。
              </p>
              <br  />
              <p >7、注册信息使用</p>
              <br  />
              <p >
                注册会员所提供的个人信息将会被中国志愿服务网网站统计、汇总，在我们的严格管理下，为中国志愿服务网网站的合作者提供依据。中国志愿服务网网站会不定期地通过注册会员留下的电子邮件、电话或通信地址同该会员保持联系。
              </p>
              <br  />
              <p >
                中国志愿服务网网站承诺：在未经访问者授权同意的情况下，中国志愿服务网网站不会将访问者的个人资料泄露给第三方。但以下情况除外。
              </p>
              <p >
                ·根据执法单位之要求或为公共之目的向相关单位提供个人资料；
              </p>
              <p >
                ·由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人资料泄露；
              </p>
              <p >
                ·由于计算机2000年问题、黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力而造成的个人资料泄露、丢失、被盗用或被窜改等；
              </p>
              <p >
                ·由于与中国志愿服务网网站链接的其它网站所造成之个人资料泄露及由此而导致的任何法律争议和后果；
              </p>
              <p >
                ·为免除访问者在生命、身体或财产方面之急迫危险。
              </p>
              <br  />
              <p >8.自责</p>
              <br  />
              <p >
                所有使用本网站的用户，对使用本网站信息和在本网站发布信息的被使用，承担完全责任。本网站对任何因使用本网站而产生的第三方之间的纠纷，不负任何责任。
              </p>
              <br  />
              <p >9.服务终止</p>
              <br  />
              <p >
                本网站有权在预先通知或不予通知的情况下终止任何免费服务。
              </p>
              <br  />
              <p >10.争议处理</p>
              <br  />
              <p >
                本网站因正常的系统维护、系统升级，或者因网络拥塞而导致网站不能访问，本网站不承担任何责任。
              </p>
              <br  />
              <p >11.免责条款</p>
              <br  />
              <p >
                本网并无随时监视此网址，但保留对其实施实时监视的权利。对于他方输入的，不是本网发布的材料，本网概不负任何法律责任。对于其他网址链接在本网址的内容，本网概不负法律责任。
              </p>
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
  components: {
    Head,
    Guidebar,
  },
data(){
return{
  user:{
    name:"",
    password:"",
    telephone:""
 },
  password1:"",
  
}
  

},
  methods:{
    register:function(){
        const _this = this
        this.$http({
                  method:"post",
                  url:"/user/Add",
                data:{
                user:this.user,
                password1:this.password1
                }
               })
              .then(res => {
               if (res.data !== -1) {
                 alert("注册成功"); 
                this.$router.push("/volunteer_login")
                  }else {
                window.scrollTo(0,0)
                alert("注册失败"); 
                 location. reload(),this.$router.go(0) 
                 }
              })
              .catch(err => {
                console.error(err); 
              })
      },
    checkNum(){
      const _this = this
      var numReg = /^\w{6,16}$/
      var numRe = new RegExp(numReg)
        this.$http({
                method:"post",
                url:"/user/RegistrationVerification",
                data:{
                  name:this.user.name
                }
               })
              .then(res => {
               if (res.data.name == this.user.name) {
                document.getElementById('usernameTips').innerHTML="用户名已存在"
                document.getElementById('usernameTips').classList.remove('right-tip');
                document.getElementById('usernameTips').classList.remove ('right2-tip');
                document.getElementById('usernameTips').classList.add('warn-tip');
                  }else if(this.user.name==''){
                  document.getElementById('usernameTips').innerHTML="用户名不可为空"
                   document.getElementById('usernameTips').classList.remove('right-tip');
                   document.getElementById('usernameTips').classList.remove ('right2-tip');
                   document.getElementById('usernameTips').classList.add('warn-tip');
                 }else if(!numRe.test(this.user.name)){
                    document.getElementById('usernameTips').innerHTML="用户名不规范(用户名长度6～16个字符)"
                   document.getElementById('usernameTips').classList.remove('right-tip');
                   document.getElementById('usernameTips').classList.remove ('right2-tip');
                   document.getElementById('usernameTips').classList.add('warn-tip'); 
                 }else{
                   document.getElementById('usernameTips').innerHTML="用户名可用"
                   document.getElementById('usernameTips').classList.add('right-tip');
                   document.getElementById('usernameTips').classList.add ('right2-tip');
                   document.getElementById('usernameTips').classList.remove('warn-tip');
                 }
              })
              .catch(err => {
                console.error(err); 
              })
 },
   checkpawd(){
      const _this = this
      var numReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      var numRe = new RegExp(numReg)
              if(this.user.password==''){
                   document.getElementById('passwordTips').innerHTML="密码不可为空"
                   document.getElementById('passwordTips').classList.remove('right-tip');
                   document.getElementById('passwordTips').classList.remove ('right2-tip');
                   document.getElementById('passwordTips').classList.add('warn-tip');
                 }else if(!numRe.test(this.user.password)){
                   document.getElementById('passwordTips').innerHTML=" 8-16个字符,⾄少1个⼤写字母,1个⼩写字母和1个数字"
                   document.getElementById('passwordTips').classList.remove('right-tip');
                   document.getElementById('passwordTips').classList.remove ('right2-tip');
                   document.getElementById('passwordTips').classList.add('warn-tip'); 
                 }else{
                   document.getElementById('passwordTips').innerHTML="   &nbsp;"
                   document.getElementById('passwordTips').classList.add('right-tip');
                   document.getElementById('passwordTips').classList.add ('right2-tip');
                   document.getElementById('passwordTips').classList.remove('warn-tip');
                 }
             
 },
   checkrepawd(){
      const _this = this
      var numReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      var numRe = new RegExp(numReg)
              if(this.password1==''){
                   document.getElementById('repeatpwTips').innerHTML="密码不可为空"
                   document.getElementById('repeatpwTips').classList.remove('right-tip');
                   document.getElementById('repeatpwTips').classList.remove ('right2-tip');
                   document.getElementById('repeatpwTips').classList.add('warn-tip');
                 }else if(this.password1 != this.user.password){
                   document.getElementById('repeatpwTips').innerHTML="密码不一致"
                   document.getElementById('repeatpwTips').classList.remove('right-tip');
                   document.getElementById('repeatpwTips').classList.remove ('right2-tip');
                   document.getElementById('repeatpwTips').classList.add('warn-tip'); 
                 }else{
                   document.getElementById('repeatpwTips').innerHTML="   &nbsp;"
                   document.getElementById('repeatpwTips').classList.add('right-tip');
                   document.getElementById('repeatpwTips').classList.add ('right2-tip');
                   document.getElementById('repeatpwTips').classList.remove('warn-tip');
                 }
             
 },
 checkPhone(){
      const _this = this
      var numReg = /^1[3|4|5|7|8|9][0-9]\d{4,11}$/
      var numRe = new RegExp(numReg)
      if(this.user.telephone==''){
                  document.getElementById('phonenumTips').innerHTML="手机号码不能为空，请确保该手机号码真实有效"
                   document.getElementById('phonenumTips').classList.remove('right-tip');
                   document.getElementById('phonenumTips').classList.remove ('right2-tip');
                   document.getElementById('phonenumTips').classList.add('warn-tip');
    }else{
        this.$http({
                method:"post",
                url:"/user/RegistrationVerification",
                data:{
                  telephone:this.user.telephone
                }
               })
              .then(res => {
                console.log(res.data.telephone)
                if(this.user.telephone==res.data.telephone){
                document.getElementById('phonenumTips').innerHTML="手机号码已存在"
                document.getElementById('phonenumTips').classList.remove('right-tip');
                document.getElementById('phonenumTips').classList.remove ('right2-tip');
                document.getElementById('phonenumTips').classList.add('warn-tip');
                  }else if(!numRe.test(this.user.telephone)){
                    document.getElementById('phonenumTips').innerHTML="手机号码输入不规范"
                   document.getElementById('phonenumTips').classList.remove('right-tip');
                   document.getElementById('phonenumTips').classList.remove ('right2-tip');
                   document.getElementById('phonenumTips').classList.add('warn-tip'); 
                 }else{
                   document.getElementById('phonenumTips').innerHTML="   &nbsp;"
                   document.getElementById('phonenumTips').classList.add('right-tip');
                   document.getElementById('phonenumTips').classList.add ('right2-tip');
                   document.getElementById('phonenumTips').classList.remove('warn-tip');
                 }
              })
              .catch(err => {
                console.error(err); 
              })
              
              }
 },
    },

}




</script>

<style scoped>
#volreg > div.main.bannerimg > div > ul:nth-child(2) > li {
    padding: 0 20px;
}
/*tabber */
.tabbar {
    background: #fff0f1;
    height: 50px;
}
.tabbar {
    margin: 0 -20px;
}
.tabbar span.active, .tabbar a.active {
    color: #e60012;
    font-weight: bold;
    border-bottom: 3px solid #e60012;
}
.tabbar span, .tabbar a {
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    color: #333;
    padding-top: 15px;
    padding-bottom: 5px;
    margin: 0 20px;
    transition: 0.3s;
}
/*  */
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
.grid {
    font-size: 0;
    margin: 0;
    padding: 0;
}
.grid-item {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
}
.form {
    padding: 5px 0 0 20px;
    position: relative;
}
p{
    font-size: 14px;
}


.pwd_img{
    bottom: 8px;
}
.vote {
    background: #fefcfd;
    text-align: center;
    padding: 30px 100px;
}
.vote p {
    font-size: 16px;
    color: #333;
    font-weight: bold;
    line-height: 2;
    text-indent: 2em;
    text-align: left;
    margin-bottom: 20px;
}
.agreement {
    border: 1px solid #c9c9c9;
    padding: 30px 40px;
    margin-top: 40px;
}
.agreement p {
    font-size: 16px;
    color: #333;
    line-height: 24px;
    text-indent: 2em;
}

.form .form-error {
    display: inline-block;
    font-size: 14px;
    margin-top: 10px;
    width: 330px;
    position: absolute;
    left: 100%;
    padding-left: 30px;
}
.form .right-tip {
    display: inline-block;
    font-size: 14px;
    margin-top: 10px;
    width: 330px;
    position: absolute;
    left: 100%;
    padding-left: 30px;
}.right2-tip {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURRqsGUdwTBitGBCvEBmrGRqsGfP780W7RKbfpiixJ1PBUozVi9d6Gv0AAAAFdFJOU9AAYBBwGY7RpQAAAEpJREFUCNdjEBRhDVAUZBBmDQ0NMGQQCAUCRgZXIDk1iAEoFp4VwBA6O7SsNZQhtKw9IzSUgTU8rTU0AKikIjQ0CKYBql1QCGQYADHME4V7yK+MAAAAAElFTkSuQmCC) 10px no-repeat;
    color: #666;
}.subtitle:before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background: #cc0000;
    position: absolute;
    left: 6px;
    top: 50%;
    margin-top: -10px;
}
.wrong-tip[data-v-1bc8dd97] {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURf9HIf9HIUdwTP9IIP9IIf9HIf9AIP9IIv9IImdOsMsAAAAIdFJOU3DQAGCdzxCAW+XOTAAAAFBJREFUCNdjUFKIaGVSYlCL6OhoTWJQ7ACCIAaOFo4Gj2YGiQZlo4pWho4OI5WODhClDKQkGlSMOBqBSjxASsAahBjUJDo6GpMYlJQlGo2UAAhNGExrdLylAAAAAElFTkSuQmCC) 10px no-repeat;
    color: #c00;
}
</style>
