<template>
  <login-head></login-head>
  <div id="newsbody">
    <div class="main bannerimg">
      <div class="mid">
        <ul class="row w">
          <li class="col">
            <guidebar>
              <template v-slot:pp>
                <span class="">首页</span>
              </template>
              <template v-slot:cp>
                <span> 志愿队伍</span>
              </template>
              <template v-slot:tp>
                <span> 支援队伍详情</span>
              </template>
            </guidebar>
          </li>
        </ul>
        <div class="section">
          <div  class="row w">
            <div  class="col v-t" style="padding-right: 50px">
              <div  class="row w">
                <div  class="col v-t" style="width: 38%">
                  <img
                    
                    src="../assets/images/projectinfo/2.png"
                    alt=""
                    style="width: 260px; height: 158px"
                  />
                </div>
                <div  class="col v-t">
                  <h2  class="h2">
                    {{ volunteer_team.teamName }}
                  </h2>
                  <table  class="table-info">
                    <colgroup >
                      <col  width="40%" />
                      <col  width="60%" />
                    </colgroup>
                    <tr >
                      <th
                        
                        colspan="2"
                        style="padding-bottom: 10px"
                      >
                        队伍联络编号：<em  class="c-danger"
                          >{{ volunteer_team.teamid }}</em
                        >
                      </th>
                    </tr>
                    <tr >
                      <th >
                        人员规模：<em  class="c-danger"
                          >169</em
                        >
                      </th>
                      <th >
                        正式人员：<em  class="c-danger">0</em>
                      </th>
                    </tr>
                    <tr >
                      <th
                        
                        colspan="2"
                        style="padding-top: 10px"
                      >
                        <span  class="v-m">队伍分享到：</span>
                        <div
                          
                          class="v-m"
                          style="display: inline-block"
                        >
                          <a  href="javascript:void(0);"
                            ><img
                              
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAMFBMVEVHcEz/amr/aWn/aGj/aGj/aGj/aGj/aGj/aGj/YGD/aWn/aGj/aGj/aWn/aWn/aWnwJwM0AAAAD3RSTlMAMKDA8ECI0CAQ4HCwz1Bu/71UAAAAm0lEQVQI12NgYGDV/X8pgAEIGO3/////WQDIEvkPAo5AIX8w64sAAzOI9hT7b8AQ////svPf6/Z/ZdD//42B30lm/ieG+v8bGGZwHpP6y/D/D0eyWad//n+G/z/ep27xmP7/P0P9gkWtbL/Z/n9n0P9plMfswfz/E0P8pyY1owb9/1+BJq8WYNz1H2gywjaEC5BcxcCq/r8I6FIAVxVX0XS2fHEAAAAASUVORK5CYII="
                              alt=""
                          /></a>
                          <a  href="javascript:void(0);"
                            ><img
                              
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAAMFBMVEVHcEwAigAAjQIAiwAAjAIAjAIAjAMAjQMAjAAAjQIAjQMAjAIAjwAAjAMAjwAAjQMEUfPQAAAAD3RSTlMAMNFAoPC/wFB4YJAQryAqL1bVAAAAlklEQVQI12NgYGB2+q9iwAAEjPn/////JgBkif4HgUCgUDyY9VWAgf3/l8XTgcwEBnsgj8H////PDP4/WRY4M/3//4VB/zMDw4mOrf8/Mfz/wcCwgIFH/z/D/28MzDwTNqz/z6D/fwMH0FT7T0Bt15QeMDDM/8JgDzRLj4EDaAo7yIa03P8FSLYhXMDAWA9kfAe5CuZSAO2gVTY4NJShAAAAAElFTkSuQmCC"
                              alt=""
                          /></a>
                          <a  href="javascript:void(0);"
                            ><img
                              
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAALVBMVEVHcExCl/hAmvpDl/lCmPlCmPlEl/tCmPpCl/hAn/9Al/9CmPlDmflCmfhDmPkS+3BXAAAADnRSTlMAwDCh0PBAneAQIH9QcJ41MJ4AAACRSURBVAjXVY4xCsJQEEQnCumEnOCTxl7QOggWdr8I2IonsLIR75BriI3Y5RbeISRqbN4ZnFjpFMtjdtkZSemB9U7WKABNbprSzytKW1tmGvPIldB4Eci052m6exa8TVdaRfvyTSe4mSYg+uGpKhRfXwqdivZoOMf250vCUhfPzGlNvTlFp7nBoPKvldIFKzf9AK1nQQddgArWAAAAAElFTkSuQmCC"
                              alt=""
                          /></a>
                        </div>
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
              <div  class="arrow-box">
                <table  class="table-info">
                  <colgroup >
                    <col  width="15%" />
                    <col  width="35%" />
                    <col  width="15%" />
                    <col  width="35%" />
                  </colgroup>
                  <tr >
                    <th >区域：</th>
                    <td >重庆市</td>
                    <th >加入方式：</th>
                    <td >验证信息加入（需审核申请）</td>
                  </tr>
                  <tr >
                    <th >成立日期：</th>
                    <td >{{ dateFormat(volunteer_team.registerDate) }}</td>
                    <th >联络组织：</th>
                    <td  style="">
                      <a  href="javascript:void(0);"
                        ><em  class="c-danger"
                          >{{ volunteer_team.liaisonOrganization }}</em
                        ></a
                      >
                    </td>
                    <td  style="display: none">
                      <a  href="javascript:void(0);"
                        ><em  class="c-danger"
                          >东平信息港公益协会</em
                        ></a
                      >
                    </td>
                    <th  style="display: none">登记机关：</th>
                    <td  style="display: none">{{ volunteer_team.registrationAuthority }}</td>
                  </tr>
                  <tr >
                    <th >详细地址：</th>
                    <td >{{ volunteer_team.detailedAddress }}</td>
                    <th ></th>
                    <td ></td>
                  </tr>
                </table>
              </div>
              <div  class="tabbar" style="margin-top: 20px">
                <span  :class="{active:cur==0}" @click="cur=0">队伍简介</span>
                <span :class="{active:cur==1}" @click="cur=1">发起的项目</span>
                <span :class="{active:cur==2}" @click="cur=2">留言咨询</span>
                <div data-v-9026023c="" style="margin-top: -32px; text-align: right;">
                  <a href="javascript:void(0);" class="button" id="intoOrg" style="background:#FF9400;padding-top: 0px;color: white;height:30px;line-height:30px;" v-on:click="myfun()">{{ btn }}</a>
                </div>
              </div>
              <div  class="tabbar-down" v-show="cur==0">
                <p  style="padding: 18px"></p>
                <p  style="width: 100%; text-align: left">
                  {{ volunteer_team.teamProfile }}
                </p>
              </div>
              <div  class="tabbar-down" v-show="cur==1">
                <table  class="table-list">
                  <colgroup >
                    <col  width="50%" />
                    <col  width="25%" />
                    <col  width="25%" />
                  </colgroup>
                  <tbody >
                    <tr >
                      <th >项目名称</th>
                      <th >立项日期</th>
                      <th >项目状态</th>
                    </tr>
                    <tr >
                      <td
                        
                        colspan="3"
                        style="
                          text-align: center;
                          border-bottom: 1px rgb(246, 243, 247);
                        "
                      >
                        <img
                          
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div  class="tabbar-down" v-show="cur==2">
                <h2  class="subtitle subtitle-plain">
                  最新留言
                </h2>
                <p  style="width: 100%; text-align: center">
                  <img
                    
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC"
                  />
                </p>
                <ul  class="activity"></ul>
              </div>
              <!---->
            </div>
            <div  class="col v-t" style="width: 30%">
              <h2
                
                class="subtitle subtitle-noline"
                style="margin-top: -10px"
              >
                队伍联系人
              </h2>
              <div  class="link-info">
                <h2 >{{ volunteer_team.contact }}</h2>
                <p data-v-9026023c="">手机：{{ volunteer_team.telephone }}</p>
                <!---->
                <!---->
                <!---->
                <p  class="row w">
                  <span
                    
                    class="col v-m"
                    style="padding-right: 10px"
                    ><a
                      
                      href="javascript:void(0);"
                      class="button outline"
                      >我要投诉</a
                    ></span
                  >
                  <span
                    
                    class="col v-m"
                    style="padding-left: 10px"
                  ></span>
                </p>
              </div>
              <h2
                
                class="subtitle subtitle-noline subtitle-margin"
              >
                服务评价
              </h2>
              <div  class="info-detail">
                <p >对项目开展培训的满意度：5.00</p>
                <p >与志愿队伍合作的满意度：5.00</p>
                <p >项目执行与计划的符合度：5.00</p>
              </div>
              <h2
                
                class="subtitle subtitle-noline subtitle-margin"
              >
                队伍地址
              </h2>
              <div  class="link-info">
                <p >{{ volunteer_team.address }}</p>
                <p  class="row w">
                  <span
                    
                    class="col v-m"
                    style="padding-right: 10px"
                    ><a
                      
                      href="javascript:void(0);"
                      class="button outline"
                      >查看地图</a
                    ></span
                  >
                  <span
                    
                    class="col v-m"
                    style="padding-left: 10px"
                  ></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Guidebar from "@/components/guidebar";
import LoginHead from "@/components/login_head";
export default {
  components: {
    Guidebar,
    LoginHead,
  },
   data () {
           return {
             cur: 0,// 默认选中第一个值
             volunteer_team: {
               teamid: 1,
               teamName: "",
               contact:"",
               telephone:"",
               detailedAddress:"",
               liaisonOrganization:"",
               teamProfile:"",
               address:"",
               registerDate:"",
               regisDepartment:"",
               registrationAuthority:""
             },
             btn:"我要加入",
             tid:"",
             personCount:""
         }
   },
  props:['id'],
  created() {
    this.tid = this.$route.query.id
    const _this = this
    this.$http.get("http://192.168.1.147:8088/volunteerTeam/selectOne",
        {
          params:{
            id:this.tid
          }
        }).then(res => {
      this.volunteer_team=res.data
    })
    this.$http({
      method:"get",
      url:"http://192.168.1.147:8088/volunteersTeamid/selectAllNumByTid",
      params:{
        teamid:this.volunteer_team.teamid
      }
    })
        .then(res => {
          _this.personCount=res.data
        })
        .catch(err => {
          console.error(err);
        })
  },
  methods:{
    myfun:function (){
      var pname = localStorage.getItem("username")
      if(pname != null){
        this.$http({
          method:"get",
          url:"volunteersTeamid/inserter",
          params:{
            name:pname,
            teamid:this.volunteer_team.teamid,
          }
        }).then(err => {
          console.error(err)
        })
        this.btn="申请成功"
      }else{
        alert("登录后,可进行操作")
      }
    },
    dateFormat:function (time){
      var data = new Date(time);
      var y = data.getFullYear();
      var m = data.getMonth()+1;
      var d = data.getDate();
      var hours = data.getHours()<10?'0'+data.getHours() : data.getHours();
      var minutes = data.getMinutes()<10?'0'+data.getMinutes() : data.getMinutes();
      var second = data.getSeconds()<10?'0'+data.getSeconds() : data.getSeconds();
      return `${y}-${m}-${d} ${hours}:${minutes}:${second}`;
    }
  }
};
</script >

<style scoped>
.section {
  padding: 20px 0;
}
.h2 {
  font-size: 24px;
  color: #333;
  position: relative;
  text-align: justify;
  line-height: 39px;
  margin: 0 0 20px;
}
.h2 .button {
  padding: 0 25px;
  position: relative;
  top: -3px;
}
.button.round {
  border-radius: 14px;
}
.button.success {
  background: #1cac1f;
  border-color: #1cac1f;
}
.table-info {
  font-size: 16px;
  width: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  table-layout: fixed;
}
table tr {
  border: 1px solid #f6f3f7;
}
.table-info th {
  font-weight: 400;
  color: grey;
  text-align: left;
}
.table-info td {
  color: #333;
  padding: 5px 0;
  word-break: break-all;
}
.table-info span.button {
  height: 22px;
  line-height: 20px;
  border-radius: 2px;
  padding: 0 10px;
}
.button.outline {
  background: 0;
  color: #e60012;
  border: 1px solid #e60012;
  margin-right: 8px;
}
.arrow-box {
  border: 1px solid #f0f0f0;
  padding: 20px;
  margin: 20px 0;
  position: relative;
}
.table-list {
  font-size: 14px;
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
table tr {
  border: 0;
}
.table-list thead th {
  background: #f5f5f5;
  font-weight: 400;
  color: #333;
  padding: 0 15px;
  height: 50px;
}
.table-list th {
  text-align: left;
}
.table-list thead th .item {
  margin-right: 20px;
}
.table-list thead th .item i {
  color: #e60012;
}
.table-list .button {
  height: 30px;
  line-height: 30px;
}
.table-list.grid tbody th {
  border: 1px solid #f6f3f7;
}
.subtitle-noline {
  border-bottom: 0;
  padding-left: 20px;
}
.subtitle {
  font-size: 20px;
  color: #333;
  font-weight: 700;
  line-height: 60px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 16px;
  margin: 0;
}
.subtitle-noline:before {
  left: 0;
}
.subtitle:before,
.subtitle a {
  display: inline-block;
  background: #e60012;
  position: absolute;
  top: 50%;
}
.subtitle:before {
  content: "";
  width: 4px;
  height: 20px;
  left: 0;
  margin-top: -10px;
}
.handup h2 {
  font-size: 20px;
  color: #e60012;
  margin: 0 0 20px;
}
.handup p {
  font-size: 16px;
  color: #333;
  font-weight: 400;
  margin: 0;
}
.link-info h2 {
  font-size: 20px;
  color: #008d03;
  margin: 10px 0;
}
.link-info p {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
}
.link-info .row {
    margin-top: 30px;
}
.link-info .button {
  width: 100%;
  height: 30px;
  line-height: 28px;
}
.c-danger {
    color: #cc0000 !important;
}
.info-detail p {
    font-size: 14px;
    color: #333;
    line-height: 32px;
}
.table-list th[data-v-6a623785] {
    text-align: left;
}
.table-list tbody th {
    color: #808080;
    font-weight: normal;
    padding: 18px;
    border-bottom: 1px solid #f6f3f7;
}
.table-list tbody td {
    padding: 18px;
    border-bottom: 1px solid #f6f3f7;
}
</style>