<template>
  <login-head></login-head>
  <div id="newsbody">
    <div  class="main bannerimg">
      <div  class="mid">
        <ul  class="row w">
          <li  class="col">
            <guidebar>
          <template v-slot:pp>
            <span class="">首页</span>
          </template>
          <template v-slot:cp>
            <span> 志愿项目</span>
          </template>
          <template v-slot:tp>
            <span> 项目详情</span>
          </template>
        </guidebar>
          </li>
        </ul>
        <div  class="section">
          <div  class="row w">
            <div  class="col v-t" style="padding-right: 50px">
              <div  class="row w">
                <div  class="col v-t" style="width: 38%">
                  <img
                    
                    src="../assets/images/projectinfo/1.png"
                    alt=""
                    style="width: 260px; height: 170px"
                  />
                </div>
                <div  class="col v-t">
                  <h2  class="h2">
                    {{ volunteer[0].pname }}
                    <span
                      
                      class="button button-small success round"
                      style="width: 88px; padding: 0px"
                      >{{ statusName }}</span
                    >
                  </h2>
                  <table  class="table-info">
                    <colgroup >
                      <col  width="21%" />
                      <col  width="79%" />
                    </colgroup>
                    <tr >
                      <th >项目编号：</th>
                      <td >
                        <em >{{ volunteer[0].pid }}</em>
                      </td>
                    </tr>
                    <tr >
                      <th >服务类别：</th>
                      <td v-for="(item, index) in classs" :key="index">
                        <span  class=" outline"
                          >{{item.serviceName}}</span
                        >
                      </td>
                    </tr>
                    <tr >
                      <th >项目分享到：</th>
                      <td >
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
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div  class="arrow-box">
                <table  class="table-info">
                  <colgroup >
                    <col  width="13%" />
                    <col  width="37%" />
                    <col  width="15%" />
                    <col  width="35%" />
                  </colgroup>
                  <tr >
                    <th >项目地点：</th>
                    <td >
                      {{volunteer[0].location}}
                    </td>
                    <th >发布日期：</th>
                    <td >{{dateFormat(volunteer[0].releaseDate)}}</td>
                  </tr>
                  <tr >
                    <th >项目日期：</th>
                    <td >{{dateFormat(volunteer[0].projectDate)}}</td>
                    <th >招募日期：</th>
                    <td >{{dateFormat(volunteer[0].recruitDate)}}</td>
                  </tr>
                  <tr >
                    <th >服务对象：</th>
                    <td >{{volunteer[0].serviceObject}}</td>
                    <th >志愿者保障：</th>
                    <td >{{volunteer[0].volunteerUpport}}</td>
                  </tr>
                </table>
                <div
                  
                  style="
                    font-weight: 400;
                    color: rgb(128, 128, 128);
                    padding-top: 3px;
                  "
                >
                  服务时间描述:
                  <span
                    
                    style="color: rgb(51, 51, 51); padding-left: 13px"
                    >{{volunteer[0].serviceDescription}}</span
                  >
                </div>
              </div>
              <table  class="table-list grid" v-for="(item, index) in volunteer" :key="index">
                <thead >
                  <tr >
                    <th  colspan="2" align="left">
                      <span  class="item"
                        >岗位{{index+1}}：<i >{{ item.postName }}</i></span
                      >
                      <span  class="item"
                        >计划招募：<i >{{ item.targetNum }}</i></span
                      >
                      <span  class="item"
                        >已招募：<i >{{item.enrolledNum}}</i></span
                      >
                    </th>
                    <th  align="right">
                      <a
                        
                        href="javascript:void(0);"
                        id="871661babe0c4b23844467a9cef5e8eb"
                        class="button"
                        style="background: rgb(255, 148, 0)"
                        v-on:click="myfun(item.postid+1,true)"
                        >我要报名</a
                      >
                    </th>
                  </tr>
                </thead>
                <tbody >
                  <tr >
                    <th >岗位ID</th>
                    <th >岗位描述</th>
                    <th >岗位条件</th>
                  </tr>
                  <tr >
                    <td  class="left">
                      {{ item.postid }}
                    </td>
                    <td  class="left">
                      {{ item.postDesc }}
                    </td>
                    <td
                      
                      class="left"
                      style="word-break: break-all; overflow: hidden"
                    >
                      {{ item.postCondition }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div  class="tabbar" style="margin-top: 20px">
                <span  :class="{active:cur==0}" @click="cur=0">项目详情</span>
                <span :class="{active:cur==1}" @click="cur=1">报名信息</span>
                <span :class="{active:cur==2}" @click="cur=2">讨论区</span>
                <span :class="{active:cur==3}" @click="cur=3">项目动态</span>
                <span :class="{active:cur==4}" @click="cur=4">时长公示</span>
              </div>
              <div  class="tabbar-down" v-show="cur==0">
                <!---->
                <p
                  
                  style="padding: 18px; word-break: break-all"
                >
                  {{volunteer[0].projectDetails}}
                </p>
              </div>
              <div  class="tabbar-down" v-show="cur==1">
                <table  class="table-list">
                  <colgroup >
                    <col  width="15%" />
                    <col  width="30%" />
                    <col  width="20%" />
                    <col  width="20%" />
                    <col  width="15%" />
                  </colgroup>
                  <tbody >
                    <tr >
                      <th >姓名</th>
                      <th >岗位</th>
                      <th >服务时长</th>
                      <th >报名时间</th>
                      <th >操作</th>
                    </tr>
                    <tr >
                      <td
                        
                        colspan="5"
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
                <div  class="load">
                  <textarea
                    
                    rows="4"
                    placeholder="在这里畅所欲言吧～"
                    maxlength="200"
                    class="textarea"
                    style="height: 146px"
                  ></textarea>
                  <a
                    
                    href="javascript:void(0);"
                    class="button"
                    style="margin-top: 15px"
                    >发布评论</a
                  >
                  <h2  class="subtitle subtitle-plain">
                    最新评论
                  </h2>
                  <p  style="width: 100%; text-align: center">
                    <img
                      
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC"
                    />
                  </p>
                  <ul  class="activity"></ul>
                </div>
              </div>
              <div  class="tabbar-down" v-show="cur==3">
                <div  class="load">
                  <textarea
                    
                    rows="4"
                    placeholder="项目参与人或项目发起人，快来发布项目动态吧～"
                    class="textarea"
                    style="height: auto"
                  ></textarea>
                  <input
                    
                    type="file"
                    accept="image/*"
                    hidden="hidden"
                  />
                  <ul  id="list" class="load-list">
                    <li  id="picker" class="load-add"></li>
                  </ul>
                  <a
                    
                    href="javascript:void(0);"
                    class="button"
                    style="margin-top: 15px"
                    >发布动态</a
                  >
                  <h2  class="subtitle subtitle-plain">
                    最新动态
                  </h2>
                  <p  style="width: 100%; text-align: center">
                    <img
                      
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAATlBMVEVHcEzv7+/l5eX19fXm5ubk5OTy8vLy8vLo6Ojl5eXo6Ojj4+Pk5OTu7u7p6enp6enn5+f29vb29vb////k5OTh4eHe3t7a2trs7Oz7+/tIfX9+AAAAEnRSTlMAQGbLpOIQ/L1+MPDPyCCKT+GZrxW5AAAEX0lEQVRo3u2Z65KrKhCFo1HBS6Jpuej7v+jpBoyoGMnE/Nh10lM1M5UMfKxe3UCcy+UXv/jFL37xb0bRFF9nVE36dUaSV19npM3963bw7Ot+dHn3bcT9+zKKMk++jyi30oqzEdsJq/zEQquyEAIZpzVMkTY82OGnMe4pirjvNOUZjHvX5rysJhoXWerh2k83ySJJy6zmbVdMhEbYaBzn3rQfdHTGeSN4VqbPXFQtEZQSCqQ0nApT9UnH3JPl6KrNiSDGvheq7/sRf8eoz+vKLkOCVBIJvYPQT3xFiLytTiHUQkol+iksZFBqoN+RU2fdZ62BBFzx0HshVY+m6Ikq9B84rfACJSwJNk1agv/KQHqwsKNruaOppy8lV4RBaiXWL5o3tHqDkwrpVCh/ucOAmpTWWoyT8esAqUxhR3CK2iiRi4Sgy1rqASZP9gKMnDizqeOkgp2Z9pQgQppmjeqdRgyAeRFqCM4VVmK6UyqGWcujXNG0LHIyiAkpMfVl9oO+V6KMMMXZMWIvCC2Oldg0PU0cVX14TmZCzovW1CrjKyUuTb7kY+8TocdF/ct1DfhKKE3SpWmOXe/T0ga6HkoGBJSs0uR3TH6wmeht4WBZCj0slQTS5EsJeu+2KiFlqD1MDUwbMSkJp8lbVtD7/KlkZ9xANWBmxX4zTQf9foS9rxqrZH/LcKsH83c7aYrwnnqdvRpJTs9N9zLAbrOBS3PqtchOsilpfUwoa3Id6PXDJeICj/9o2o8pAkI0vB5rfNOHCDEhAv6XtVB6PEgC7c+vU0q3Mm5buwt+MECM2scw3Mz0EO4lrwbr7PU1qchwrXJfCCYL072XMLMN5BEH8D0LbvDGTdzDEAI6XGGmwnXEaULBhb9VLYRYCAsljPKk9CCiIea4GraOKjAQ2FTYKE1JMHxf5JzztkwPIQNQcjVb1692kFXCbJ4kvQF2l8Vv6TEEzC1q0TZYmmyCMCXZnCcnwkFc8BgIgLkYjUshDoJz2XcoT3irhGe4y6eQWRwE6MYyH/FaDjMEE4YbNrNmgxfWk6Y+emQxQ4DREW8xg51eOgiQTBSnGMASEltd3toMRtgdBTwlJi/O7I8hAPZMZJMZEwTkMk+fQSaMXEHC8WcITS0UnArJcMrtYDYl6SWDqUhIcqNNZW+lryDUl5EPWq5wy7Fy2LsQutLmN4j5EHRpaQCn0ys00266HAIj5kPQwyaXi5A1e0pmBMRIuU/jHjxkTVCJj8CBb0AArs3WmoCSJSIKcvFnxQpYWbNRskagn7HGP+v+VovFDrVSskXEGY8l7MfKmoWSECKuhC/FkgLXm2eNp4QQzRoRyaCH/Ytho62AlRJC3PimCspLdHSP5dARrVHSU2IQ1w3i9t4TtnSFMRUgHGQP8f7Dwm6Viwfdx+gQDiNY9rfnhEXKNxVgbvUbxOOzJ4RJy9miOTeIR1ae8ayzSNr25mqVzwh2w+vo+f9JSeb4/j/mfvGLX/zifxH/AbaECw5U0cxRAAAAAElFTkSuQmCC"
                    />
                  </p>
                  <!---->
                </div>
              </div>
              <div  class="tabbar-down" v-show="cur==4">
                <table  class="table-list">
                  <colgroup >
                    <col  width="15%" />
                    <col  width="15%" />
                    <col  width="65%" />
                    <col  width="15%" />
                  </colgroup>
                  <tbody >
                    <tr >
                      <th >姓名</th>
                      <th >服务时长</th>
                      <th >备注</th>
                      <th >操作</th>
                    </tr>
                    <tr >
                      <td
                        
                        colspan="4"
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
              <!---->
            </div>
            <div  class="col v-t" style="width: 30%">
              <h2
                
                class="subtitle subtitle-noline"
                style="margin-top: -10px"
              >
                项目发起人
              </h2>
              <div
                
                class="row w handup"
                style="margin: 20px 0px 40px"
              >
                <div  class="col v-m" style="width:110px">
                  <img
                    
                    src="https://zwxt.mca.gov.cn:443/tyccyy_int/ucm/ucmAction!getFile.do?sysid=jmgc_nvsi&amp;addrcode=6200&amp;loginid=9&amp;fileid=996e606d6f29423c93cea22435b5f9fd&amp;accesskey=39UeLHCHz3MX0TLp7XiXwgKsJUyd99NQVMq8vTs&amp;busitype=FILE&amp;realid=07c94657e42240da8dc81034cadf727a&amp;crosscity=0&amp;fromprovince=0"
                    alt=""
                    style="width: 93px; height: 93px"
                  />
                </div>
                <div  class="col v-m">
                  <h2 >
                    <a
                      
                      href="javascript:void(0);"
                      style="color: rgb(44, 90, 189)"
                      >{{team.teamName}}</a
                    >
                  </h2>
                  <p >地址：{{team.address}}</p>
                </div>
              </div>
              <h2
                
                class="subtitle subtitle-noline subtitle-margin"
              >
                项目联系人
              </h2>
              <div  class="link-info">
                <h2 >{{team.contact}}</h2>
                <p >手机：{{team.telephone}}</p>
                <!---->
                <!---->
                <p  class="row w">
                  <span
                    
                    class="col v-m"
                    style="padding-right: 10px"
                    ><a
                      
                      href="javascript:void(0);"
                      class="button outline"
                      >给他发站内信</a
                    ></span
                  >
                  <span
                    
                    class="col v-m"
                    style="padding-left: 10px"
                    ><a
                      
                      href="javascript:void(0);"
                      class="button outline"
                      >我要投诉</a
                    ></span
                  >
                </p>
              </div>
              <h2
                
                class="subtitle subtitle-noline subtitle-margin"
              >
                项目地址
              </h2>
              <div  class="link-info">
                <p  if="九龙坡杨家坪正街43号渝西医院住院部">
                  {{team.detailedAddress}}
                </p>
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
  data() {
    return {
      volunteer:[
        {
          pid: "",
          pname: "\t\n" +
              "珍爱生命传递真情无偿献血志愿活动",
          location: "",
          releaseDate: "",
          projectDate: "",
          recruitDate: "",
          serviceObject: "",
          volunteerUpport: "",
          serviceDescription: "",
          projectDetails:"",
          teamid:"",
          projectStatus:"",
          postid:"",
          postDesc:"",
          postCondition:"",
          postName:"",
          targetNum:"",
          enrolledNum:"",
        }
      ],
      team:{
        teamName:"",
        address:"",
        contact:"",
        telephone:"",
        detailedAddress:""
      },
      classs:[
        {
          sid:"",
          serviceName:""
        }
      ],
      allProject: [

      ],
      pid:"",
      statusName:"",
      cur: 0,// 默认选中第一个值
    };
  },
  props: ['id','statusname','allproject'],
  components: {
    Guidebar,
    LoginHead,
  },
  created() {
    this.pid=this.$route.params.id
    this.statusName=this.$route.params.statusname
    this.allProject=JSON.parse(this.$route.params.allproject)
    const _this = this
    this.$http.get("/volunteerProgramDetails/volunterProgramPost",
        {
          params:{
            id:this.pid
          }
        })
        .then(res =>{
          _this.volunteer = res.data
          this.$http.get("/volunteerTeam/selectOne",
              {
                params:{
                  id:this.volunteer[0].teamid
                }
              })
              .then(res =>{
                console.log(res.data)
                _this.team = res.data.data
                for(let i=0;i<this.allProject.length;i++){
                  if(this.allProject[i].pid==this.volunteer[0].pid){
                    this.myfun(this.allProject[i].postid+1,false)
                  }
                }
              })
          this.$http.get("/volunteerProgramDetails/classOfServices",
              {
                params:{
                  id:this.volunteer[0].pid
                },
              })
              .then(res =>{
                _this.classs = res.data
              })
        })
  },
  mounted() {
  },
  methods: {
    myfun:function (index,flat){
      var postId = index-1;
      var pname = localStorage.getItem("username")
      var btn = document.getElementsByClassName("button")[index-1];
      if(pname != null){
        if(flat){
          this.$http.get("/volunteersProject/inserter",{
            params:{
              name:pname,
              postid:postId,
              pid:this.volunteer[0].pid
            }
          }).then(res =>{
              console.log(res.data);
          }).catch(err => {
            console.error(err);
          })
        }
        btn.innerHTML="申请成功"
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
    },
  },
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
table{
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
table tr:first-child {
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
.subtitle:before, .subtitle a {
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
.link-info .button {
    width: 100%;
    height: 30px;
    line-height: 28px;
}
.table-list tbody th {
    color: #808080;
    font-weight: normal;
    padding: 18px;
    border-bottom: 1px solid #f6f3f7;
}
.table-list tbody td {
    padding: 18px;
}
.tabbar-down tr {
    border: 0;
}
</style>