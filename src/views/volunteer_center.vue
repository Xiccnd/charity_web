<template>
  <login-head></login-head>
  <div class="main bannerimg">
    <div class="mid">
      <ul class="row w">
        <li class="col">
          <guidebar>
            <template v-slot:pp>
              <span class="">首页</span>
            </template>
            <template v-slot:cp>
              <span> 用户中心</span>
            </template>
            <template v-slot:tp>
              <span> 修改资料</span>
            </template>
          </guidebar>
        </li>
      </ul>
      <ul class="row w">
        <li class="col v-t" style="width: 130px !important">
          <ul
              id="usermenu"
              class="navbar"
              style="background: rgb(255, 255, 255)"
          >
            <li class="active">
              <em>用户中心<i>&gt;</i></em>
              <div>
                <a
                    href="javascript:void(0);"
                    class="router-link-exact-active router-link-active active"
                    aria-current="page"
                >修改资料</a>

                 <a href="javascript:void(0);" v-on:click="myProject" class="">我的项目</a>
                 <a href="javascript:void(0);" v-on:click="myTeam" class="">我的队伍</a>
              </div>
            </li>
          </ul>
        </li>
        <div id="updatedata">
          <li class="col v-t white tab-container">
            <div id="updatemenu" class="tabbar tabbar-tight mb-30">
              <a
                  href="#/chongqing/updatedata"
                  aria-current="page"
                  class="router-link-exact-active router-link-active active"
              >基本信息</a
              >
              <a href="javascript:void(0);" class="" v-on:click="updatePassword">修改密码</a>
            </div>
            <div class="tabbar-down">
              <div class="grid g-width">
                <div class="grid-item g-12">
                  <div class="form">
                    <p
                        class="form-label"
                        style="position: relative; top: -20px; margin-bottom: 0px"
                    >
                      <span style="margin-top: 30px">用户名：{{userInfo.uname}}</span>
                    </p>
                  </div>
                  <div class="form" style="margin-top: 32px">
                    <p class="form-label">国家/地区：</p>
                    <div class="select">
                      <select id="countrySelect">
                        <option value="0">请选择</option>
                        <option value="156">中国</option>
                        <option value="158">中国台湾</option>
                        <option value="344">中国香港</option>
                        <option value="446">中国澳门</option>
                        <option value="016">美属萨摩亚</option>
                        <option value="020">安道尔</option>
                        <option value="024">安哥拉</option>
                        <option value="028">安提瓜和巴布达</option>
                        <option value="031">阿塞拜疆</option>
                        <option value="032">阿根廷</option>
                        <option value="036">澳大利亚</option>
                        <option value="040">奥地利</option>
                        <option value="044">巴哈马</option>
                        <option value="048">巴林</option>
                        <option value="050">孟加拉国</option>
                        <option value="051">亚美尼亚</option>
                        <option value="052">巴巴多斯</option>
                        <option value="056">比利时</option>
                        <option value="060">百慕大</option>
                        <option value="064">不丹</option>
                        <option value="068">玻利维亚</option>
                        <option value="070">波黑</option>
                        <option value="072">博茨瓦纳</option>
                        <option value="074">布维岛</option>
                        <option value="076">巴西</option>
                        <option value="084">伯利兹</option>
                        <option value="086">英属印度洋领地</option>
                        <option value="090">所罗门群岛</option>
                        <option value="092">英属维尔京群岛</option>
                        <option value="096">文莱</option>
                        <option value="100">保加利亚</option>
                        <option value="104">缅甸</option>
                        <option value="108">布隆迪</option>
                        <option value="112">白俄罗斯</option>
                        <option value="116">柬埔寨</option>
                        <option value="120">喀麦隆</option>
                        <option value="124">加拿大</option>
                        <option value="132">佛得角</option>
                        <option value="136">开曼群岛</option>
                        <option value="140">中非</option>
                        <option value="144">斯里兰卡</option>
                        <option value="148">乍得</option>
                        <option value="152">智利</option>
                        <option value="004">阿富汗</option>
                        <option value="008">阿尔巴尼亚</option>
                        <option value="162">圣诞岛</option>
                        <option value="166">科科斯（基林）群岛</option>
                        <option value="170">哥伦比亚</option>
                        <option value="174">科摩罗</option>
                        <option value="175">马约特</option>
                        <option value="178">刚果（布）</option>
                        <option value="180">刚果（金）</option>
                        <option value="184">库克群岛</option>
                        <option value="188">哥斯达黎加</option>
                        <option value="191">克罗地亚</option>
                        <option value="192">古巴</option>
                        <option value="196">塞浦路斯</option>
                        <option value="203">捷克</option>
                        <option value="204">贝宁</option>
                        <option value="208">丹麦</option>
                        <option value="212">多米尼克</option>
                        <option value="214">多米尼加</option>
                        <option value="218">厄瓜多尔</option>
                        <option value="222">萨尔瓦多</option>
                        <option value="226">赤道几内亚</option>
                        <option value="231">埃塞俄比亚</option>
                        <option value="232">厄立特里亚</option>
                        <option value="233">爱沙尼亚</option>
                        <option value="234">法罗群岛</option>
                        <option value="238">福克兰群岛（马尔维纳斯）</option>
                        <option value="239">南乔治亚岛和南桑德韦奇岛</option>
                        <option value="242">斐济</option>
                        <option value="246">芬兰</option>
                        <option value="248">奥兰群岛</option>
                        <option value="250">法国</option>
                        <option value="254">法属圭亚那</option>
                        <option value="258">法属波利尼西亚</option>
                        <option value="260">法属南部领地</option>
                        <option value="262">吉布提</option>
                        <option value="266">加蓬</option>
                        <option value="268">格鲁吉亚</option>
                        <option value="270">冈比亚</option>
                        <option value="275">巴勒斯坦</option>
                        <option value="276">德国</option>
                        <option value="288">加纳</option>
                        <option value="292">直布罗陀</option>
                        <option value="296">基里巴斯</option>
                        <option value="300">希腊</option>
                        <option value="304">格陵兰</option>
                        <option value="308">格林纳达</option>
                        <option value="312">瓜德罗普</option>
                        <option value="316">关岛</option>
                        <option value="320">危地马拉</option>
                        <option value="324">几内亚</option>
                        <option value="328">圭亚那</option>
                        <option value="332">海地</option>
                        <option value="334">赫德岛和麦克唐纳岛</option>
                        <option value="336">梵蒂冈</option>
                        <option value="340">洪都拉斯</option>
                        <option value="010">南极洲</option>
                        <option value="348">匈牙利</option>
                        <option value="352">冰岛</option>
                        <option value="356">印度</option>
                        <option value="360">印度尼西亚</option>
                        <option value="364">伊朗</option>
                        <option value="368">伊拉克</option>
                        <option value="372">爱尔兰</option>
                        <option value="376">以色列</option>
                        <option value="380">意大利</option>
                        <option value="384">科特迪瓦</option>
                        <option value="388">牙买加</option>
                        <option value="392">日本</option>
                        <option value="398">哈萨克斯坦</option>
                        <option value="400">约旦</option>
                        <option value="404">肯尼亚</option>
                        <option value="408">朝鲜</option>
                        <option value="410">韩国</option>
                        <option value="414">科威特</option>
                        <option value="417">吉尔吉斯斯坦</option>
                        <option value="418">老挝</option>
                        <option value="422">黎巴嫩</option>
                        <option value="426">莱索托</option>
                        <option value="428">拉脱维亚</option>
                        <option value="430">利比里亚</option>
                        <option value="434">利比亚</option>
                        <option value="438">列支敦士登</option>
                        <option value="440">立陶宛</option>
                        <option value="442">卢森堡</option>
                        <option value="012">阿尔及利亚</option>
                        <option value="450">马达加斯加</option>
                        <option value="454">马拉维</option>
                        <option value="458">马来西亚</option>
                        <option value="462">马尔代夫</option>
                        <option value="466">马里</option>
                        <option value="470">马耳他</option>
                        <option value="474">马提尼克</option>
                        <option value="478">毛利塔尼亚</option>
                        <option value="480">毛里求斯</option>
                        <option value="484">墨西哥</option>
                        <option value="492">摩纳哥</option>
                        <option value="496">蒙古</option>
                        <option value="498">摩尔多瓦</option>
                        <option value="499">黑山</option>
                        <option value="500">蒙特塞拉特</option>
                        <option value="504">摩洛哥</option>
                        <option value="508">莫桑比克</option>
                        <option value="512">阿曼</option>
                        <option value="516">纳米比亚</option>
                        <option value="520">瑙鲁</option>
                        <option value="524">尼泊尔</option>
                        <option value="528">荷兰</option>
                        <option value="530">荷属安的列斯</option>
                        <option value="533">阿鲁巴</option>
                        <option value="540">新喀里多尼亚</option>
                        <option value="548">瓦努阿图</option>
                        <option value="554">新西兰</option>
                        <option value="558">尼加拉瓜</option>
                        <option value="562">尼日尔</option>
                        <option value="566">尼日利亚</option>
                        <option value="570">纽埃</option>
                        <option value="574">诺福克岛</option>
                        <option value="578">挪威</option>
                        <option value="580">北马里亚纳</option>
                        <option value="581">美国本土外小岛屿</option>
                        <option value="583">密克罗尼西亚联邦</option>
                        <option value="584">马绍尔群岛</option>
                        <option value="585">帕劳</option>
                        <option value="586">巴基斯坦</option>
                        <option value="591">巴拿马</option>
                        <option value="598">巴布亚新几内亚</option>
                        <option value="600">巴拉圭</option>
                        <option value="604">秘鲁</option>
                        <option value="608">菲律宾</option>
                        <option value="612">皮特凯恩</option>
                        <option value="616">波兰</option>
                        <option value="620">葡萄牙</option>
                        <option value="624">几内亚比绍</option>
                        <option value="626">东帝汶</option>
                        <option value="630">波多黎各</option>
                        <option value="634">卡塔尔</option>
                        <option value="638">留尼汪</option>
                        <option value="642">罗马尼亚</option>
                        <option value="643">俄罗斯联邦</option>
                        <option value="646">卢旺达</option>
                        <option value="654">圣赫勒拿</option>
                        <option value="659">圣基茨和尼维斯</option>
                        <option value="660">安圭拉</option>
                        <option value="662">圣卢西亚</option>
                        <option value="666">圣皮埃尔和密克隆</option>
                        <option value="670">圣文森特和格林纳丁斯</option>
                        <option value="674">圣马力诺</option>
                        <option value="678">圣多美和普林西比</option>
                        <option value="682">沙特阿拉伯</option>
                        <option value="686">塞内加尔</option>
                        <option value="688">塞尔维亚</option>
                        <option value="690">塞舌尔</option>
                        <option value="694">塞拉利昂</option>
                        <option value="702">新加坡</option>
                        <option value="703">斯洛伐克</option>
                        <option value="704">越南</option>
                        <option value="705">斯洛文尼亚</option>
                        <option value="706">索马里</option>
                        <option value="710">南非</option>
                        <option value="716">津巴布韦</option>
                        <option value="724">西班牙</option>
                        <option value="732">西撒哈拉</option>
                        <option value="736">苏丹</option>
                        <option value="740">苏里南</option>
                        <option value="744">斯瓦尔巴岛和扬马延岛</option>
                        <option value="748">斯威士兰</option>
                        <option value="752">瑞典</option>
                        <option value="756">瑞士</option>
                        <option value="760">叙利亚</option>
                        <option value="762">塔吉克斯坦</option>
                        <option value="764">泰国</option>
                        <option value="768">多哥</option>
                        <option value="772">托克劳</option>
                        <option value="776">汤加</option>
                        <option value="780">特立尼达和多巴哥</option>
                        <option value="784">阿联酋</option>
                        <option value="788">突尼斯</option>
                        <option value="792">土耳其</option>
                        <option value="795">土库曼斯坦</option>
                        <option value="796">特克斯和凯科斯群岛</option>
                        <option value="798">图瓦卢</option>
                        <option value="800">乌干达</option>
                        <option value="804">乌克兰</option>
                        <option value="807">前南马其顿</option>
                        <option value="818">埃及</option>
                        <option value="826">英国</option>
                        <option value="831">格恩西岛</option>
                        <option value="832">泽西岛</option>
                        <option value="833">英国属地曼岛</option>
                        <option value="834">坦桑尼亚</option>
                        <option value="840">美国</option>
                        <option value="850">美属维尔京群岛</option>
                        <option value="854">布基纳法索</option>
                        <option value="858">乌拉圭</option>
                        <option value="860">乌兹别克斯坦</option>
                        <option value="862">委内瑞拉</option>
                        <option value="876">瓦利斯和富图纳</option>
                        <option value="882">萨摩亚</option>
                        <option value="887">也门</option>
                        <option value="894">赞比亚</option>
                      </select>
                    </div>
                    <p id="countryTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">民族：</p>
                    <div class="select">
                      <select id="nationSelect">
                        <option value="0">请选择</option>
                        <option value="01">汉族</option>
                        <option value="02">蒙古族</option>
                        <option value="03">回族</option>
                        <option value="04">藏族</option>
                        <option value="05">维吾尔族</option>
                        <option value="06">苗族</option>
                        <option value="07">彝族</option>
                        <option value="08">壮族</option>
                        <option value="09">布依族</option>
                        <option value="10">朝鲜族</option>
                        <option value="11">满族</option>
                        <option value="12">侗族</option>
                        <option value="13">瑶族</option>
                        <option value="14">白族</option>
                        <option value="15">土家族</option>
                        <option value="16">哈尼族</option>
                        <option value="17">哈萨克族</option>
                        <option value="18">傣族</option>
                        <option value="19">黎族</option>
                        <option value="20">傈僳族</option>
                        <option value="21">佤族</option>
                        <option value="22">畲族</option>
                        <option value="23">高山族</option>
                        <option value="24">拉祜族</option>
                        <option value="25">水族</option>
                        <option value="26">东乡族</option>
                        <option value="27">纳西族</option>
                        <option value="28">景颇族</option>
                        <option value="29">柯尔克孜族</option>
                        <option value="30">土族</option>
                        <option value="31">达斡尔族</option>
                        <option value="32">仫佬族</option>
                        <option value="33">羌族</option>
                        <option value="34">布朗族</option>
                        <option value="35">撤拉族</option>
                        <option value="36">毛难族</option>
                        <option value="37">仡佬族</option>
                        <option value="38">锡伯族</option>
                        <option value="39">阿昌族</option>
                        <option value="40">普米族</option>
                        <option value="41">塔吉克族</option>
                        <option value="42">怒族</option>
                        <option value="43">乌孜别克族</option>
                        <option value="44">俄罗斯族</option>
                        <option value="45">鄂温克族</option>
                        <option value="46">德昂族</option>
                        <option value="47">保安族</option>
                        <option value="48">裕固族</option>
                        <option value="49">京族</option>
                        <option value="50">塔塔尔族</option>
                        <option value="51">独龙族</option>
                        <option value="52">鄂伦春族</option>
                        <option value="53">赫哲族</option>
                        <option value="54">门巴族</option>
                        <option value="55">珞巴族</option>
                        <option value="56">基诺族</option>
                        <option value="97">其他</option>
                        <option value="98">外国血统中国籍人士</option>
                      </select>
                    </div>
                    <p id="nationTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">政治面貌：<em>(建议填写)</em></p>
                    <div class="select">
                      <select id="politicsSelect">
                        <option value="0">请选择</option>
                        <option value="01">中国共产党党员</option>
                        <option value="02">中国共产党预备党员</option>
                        <option value="03">中国共产主义青年团团员</option>
                        <option value="04">中国国民党革命委员会会员</option>
                        <option value="05">中国民主同盟盟员</option>
                        <option value="06">中国民主建国会会员</option>
                        <option value="07">中国民主促进会会员</option>
                        <option value="08">中国农工民主党党员</option>
                        <option value="09">中国致公党党员</option>
                        <option value="10">九三学社社员</option>
                        <option value="11">台湾民主自治同盟盟员</option>
                        <option value="12">无党派民主人士</option>
                        <option value="13">群众</option>
                      </select>
                    </div>
                    <p
                        id="politicsTips"
                        class="form-error"
                        style="color: red"
                    ></p>
                  </div>
                  <div class="form">
                    <p class="form-label">最高学历：</p>
                    <div class="select">
                      <select id="educationSelect">
                        <option value="0">请选择</option>
                        <option value="11">博士研究生</option>
                        <option value="14">硕士研究生</option>
                        <option value="20">大学本科</option>
                        <option value="30">大学专科和专科学校</option>
                        <option value="40">中等专业学校或中等技术学校</option>
                        <option value="50">技工学校</option>
                        <option value="60">高中</option>
                        <option value="70">初中</option>
                        <option value="80">小学</option>
                        <option value="90">幼儿园</option>
                        <option value="91">学龄前</option>
                        <option value="00">文盲或半文盲</option>
                        <option value="98">特殊教育</option>
                        <option value="99">未说明情况</option>
                      </select>
                    </div>
                    <p id="educationTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">电子邮箱：</p>
                    <input
                        type="text"
                        id="email"
                        maxlength="50"
                        placeholder="请输入电子邮箱"
                    />
                    <p id="emailTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">微信：</p>
                    <input
                        type="text"
                        id="weixin"
                        maxlength="20"
                        placeholder="请输入微信"
                        oninput="this.value=this.value.replace(/[\u4e00-\u9fa5]/g, '')"
                    />
                    <p class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">从业状况：</p>
                    <div class="select">
                      <select id="jobSelect">
                        <option value="0">请选择</option>
                        <option value="11">国家公务员</option>
                        <option value="13">专业技术人员</option>
                        <option value="17">职员</option>
                        <option value="21">企业管理人员</option>
                        <option value="24">工人</option>
                        <option value="27">农民</option>
                        <option value="31">学生</option>
                        <option value="37">现役军人</option>
                        <option value="51">自由职业</option>
                        <option value="54">个体经营者</option>
                        <option value="70">无业人员</option>
                        <option value="80">退（离）休人员</option>
                        <option value="90">其他</option>
                      </select>
                    </div>
                    <p id="jobTips" class="form-error"></p>
                  </div>
                </div>
                <div class="grid-item g-12 mt-neg19">
                  <div class="form p-rel" style="margin-bottom: 2px">
                    <div
                        id="upimage"
                        imgfile=""
                        style="position: relative; bottom: -7px"
                    >
                      <div
                          class="avatar-upload avatar-upload-small"
                          style="margin-bottom: 0px"
                      >
                        <div
                            id="photo"
                            class="avatar-upload-wrap"
                            style="width: 150px"
                        >
                          <img
                              src=""
                              alt=""
                              class="w"
                              style="width: 100%; height: 100%"
                          />
                        </div>
                      </div>
                    </div>
                    <p class="form-error"></p>
                  </div>
                  <div id="profile_div" class="form" style="">
                    <p class="form-label">头像地址：</p>
                    <div class="row w">
                      <div class="col v-m">
                        <input
                            type="text"
                            id="profile"
                            placeholder="请输入头像地址"
                        />
                      </div>
                    </div>
                    <p id="nativeTips" class="form-error"></p>
                  </div>
                  <div id="nativeChoose_div" class="form" style="">
                    <p class="form-label">籍贯：</p>
                    <div class="row w">
                      <div class="col v-m">
                        <input
                            type="text"
                            id="nativeVal"
                            placeholder="请输入籍贯"
                        />
                      </div>
                    </div>
                    <p id="nativeTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label"><em>*</em>手机号码：</p>
                    <div class="row w">
                      <div class="col v-m">
                        <input
                            type="text"
                            id="mobile"
                            maxlength="11"
                            placeholder="请输入手机号码"
                        />
                      </div>
                    </div>
                    <p class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">QQ：</p>
                    <input
                        type="text"
                        id="qq"
                        maxlength="15"
                        oninput="this.value=this.value.replace(/^[1-9]\\d{4,10}/g,'')"
                        placeholder="请输入QQ"
                    />
                    <p id="qqTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label">详细地址：</p>
                    <input
                        type="text"
                        id="detailedAddress"
                        maxlength="50"
                        placeholder="请输入详细地址"
                    />
                    <p id="detailedAddressTips" class="form-error"></p>
                  </div>
                  <div class="form">
                    <p class="form-label"><em>*</em>服务区域：</p>
                    <div class="row w">
                      <div class="col v-m">
                        <input
                            type="text"
                            id="serviceArea"
                            placeholder="请输入服务区域"
                        />
                      </div>
                    </div>
                    <p
                        id="serviceAreaTips"
                        class="form-error"
                        style="color: red"
                    ></p>
                  </div>
                </div>
                <div class="pt-30 t-c">
                  <a
                      href="javascript:void(0);"
                      class="button"
                      style="width: 200px"
                      v-on:click="submitChange()"
                  >保存修改</a
                  >
                </div>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Guidebar from "@/components/guidebar";
import LoginHead from "@/components/login_head";
import {toRaw} from "vue";
import defaultProfile from '../assets/images/profile/default.png'

export default {
  components: {
    Guidebar,
    LoginHead,
  },
  data() {
    return {
      userInfo: {
        address: "",
        area: "",
        country: "",
        education: "",
        employment: "",
        mailbox: "",
        nation: "",
        nativeplace: "",
        political: "",
        profile: "",
        qq: "",
        telephone: "",
        uname: "",
        weixin: "",
      }
    }
  },
  methods: {
    getInfo: function () {
      this.$http.post("personalData/getMyMessages",
          {
            uname: localStorage.getItem("username")
          },
      ).then(res => {
        this.userInfo = {
          address: res.data.address,
          area: res.data.area,
          country: res.data.country,
          education: res.data.education,
          employment: res.data.employment,
          mailbox: res.data.mailbox,
          nation: res.data.nation,
          nativeplace: res.data.nativeplace,
          political: res.data.political,
          profile: res.data.profile,
          qq: res.data.qq,
          telephone: res.data.telephone,
          uname: res.data.uname,
          weixin: res.data.weixin
        }
        let options = document.getElementById('countrySelect').options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === toRaw(this.userInfo).country) {
            options[i].selected = true;
            break;
          }
        }
        options = document.getElementById('nationSelect').options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === toRaw(this.userInfo).nation) {
            options[i].selected = true;
            break;
          }
        }
        options = document.getElementById('politicsSelect').options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === toRaw(this.userInfo).political) {
            options[i].selected = true;
            break;
          }
        }
        options = document.getElementById('educationSelect').options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === toRaw(this.userInfo).education) {
            options[i].selected = true;
            break;
          }
        }
        options = document.getElementById('jobSelect').options
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === toRaw(this.userInfo).employment) {
            options[i].selected = true;
            break;
          }
        }
        document.getElementById('email').value = toRaw(this.userInfo).mailbox
        document.getElementById('weixin').value = toRaw(this.userInfo).weixin
        if (toRaw(this.userInfo).profile === "") {
          document.getElementById('photo').firstElementChild.src = defaultProfile
        } else {
          document.getElementById('photo').firstElementChild.src = toRaw(this.userInfo).profile
        }
        document.getElementById('profile').value = toRaw(this.userInfo).profile
        document.getElementById('nativeVal').value = toRaw(this.userInfo).nativeplace
        document.getElementById('mobile').value = toRaw(this.userInfo).telephone
        document.getElementById('qq').value = toRaw(this.userInfo).qq
        document.getElementById('detailedAddress').value = toRaw(this.userInfo).address
        document.getElementById('serviceArea').value = toRaw(this.userInfo).area
      }).then(err => {
        // console.log(err);
      })
    },
    submitChange :function () {
      let changeInfo = {
        uname: localStorage.getItem("username"),
        mailbox: document.getElementById('email').value,
        weixin: document.getElementById('weixin').value,
        profile: document.getElementById('profile').value,
        nativeplace: document.getElementById('nativeVal').value,
        telephone: document.getElementById('mobile').value,
        qq: document.getElementById('qq').value,
        address: document.getElementById('detailedAddress').value,
        area: document.getElementById('serviceArea').value,
        country: document.getElementById('countrySelect').options[document.getElementById('countrySelect').selectedIndex].value,
        nation: document.getElementById('nationSelect').options[document.getElementById('nationSelect').selectedIndex].value,
        political: document.getElementById('politicsSelect').options[document.getElementById('politicsSelect').selectedIndex].value,
        education: document.getElementById('educationSelect').options[document.getElementById('educationSelect').selectedIndex].value,
        employment: document.getElementById('jobSelect').options[document.getElementById('jobSelect').selectedIndex].value
      }
      console.log(changeInfo);
      this.$http({
        url: "personalData/upData",
        method: "POST",
        data: changeInfo
      }).then(res => {
        console.log(res);
        window.scrollTo(0,0);
        location.reload();
      }).catch(err => {
        console.log(err);
      })
    },
    updatePassword: function (){
      this.$router.push("/updatePassword")
    },
    myTeam: function (){
      this.$router.push("/myTeam")
    },
    myProject: function (){
      this.$router.push("/myProject")
    }
  },
  mounted() {
    this.getInfo()
  }
};
</script>

<style scoped>
#usermenu {
  width: 90%;
  opacity: 0.74;
}

.navbar {
  text-align: center;
  width: 110px;
  border: 1px solid #f0f0f0;
}

.navbar > .active em {
  font-weight: 700;
}

.navbar em {
  display: block;
  font-size: 14px;
  color: #333;
  background: #f5f5f5;
  line-height: 40px;
  font-weight: normal;
}

.navbar > .active em i {
  -webkit-transform: rotateZ(-90deg);
  transform: rotateZ(-90deg);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.navbar em i {
  margin-left: 5px;
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.navbar > .active > div {
  display: block;
}

.navbar a.active,
.navbar a:hover {
  background: linear-gradient(
      90deg,
      rgba(255, 211, 211, 1) 0%,
      rgba(255, 246, 246, 1) 100%
  );
  border-color: #cc0000;
}

.navbar a.active {
  font-weight: bold;
}

.navbar a.active,
.navbar a:hover {
  color: #e60012;
}

.navbar a {
  border-left: 4px solid transparent;
}

.navbar a {
  display: block;
  font-size: 14px;
  color: #8d8d8d;
  line-height: 45px;
  position: relative;
}

.tab-container {
  padding: 0 36px;
}

.tabbar.tabbar-tight {
  /* display: none; */
  margin: 36px 0;
}

.tabbar-tight span,
.tabbar-tight a {
  padding-top: 10px;
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

p {
  font-size: 14px;
}

.select {
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.select select {
  -webkit-appearance: none;
  display: inline-block;
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  color: #333;
  border: 0;
  position: relative;
  z-index: 3;
  background: transparent;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
}

.select:after {
  content: "";
  display: inline-block;
  width: 16px;
  height: 8px;
  background: url(../assets/images/center/arrow.png);
  position: absolute;
  right: 10px;
  top: 50%;
  margin-top: -4px;
}

.form .button-line {
  width: 80px;
  margin-top: 0;
  padding: 0;
}

.grid-item {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
}

.upload {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.avatar-upload-small .button-line {
  width: 130px;
  padding: 0;
  font-size: 12px;
  height: 30px;
  line-height: 28px;
}

.avatar-upload {
  text-align: center;
  margin-bottom: 40px;
}

.avatar-upload-small .avatar-upload-wrap {
  width: 110px;
  height: 150px;
  margin-top: 0;
}

.avatar-upload-wrap {
  width: 158px;
  height: 196px;
  margin: 20px auto;
}

.avatar-upload-wrap img {
  border: 1px solid #ededed;
}

.cropperBox,
.cropperBox1,
.cropperBox2,
.cropperBox3 {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 840px;
  margin: -2000px 0 0 -400px;
  padding: 10px;
  background-color: #f5f5f5;
  opacity: 0;
  transition: margin-top 1s, opacity 1s;
  -moz-transition: margin-top 1s, opacity 1s, -moz-transform 1s;
  z-index: 9999;
}

.cropperInner {
  width: 800px;
  height: 520px;
  padding: 10px;
}

.btnCropper,
.btnCancel {
  width: 70px;
  height: 30px;
  margin-left: 10px;
  background-color: red;
  color: #fff;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.btnCancel {
  background-color: #ccc;
  border-color: #ccc;
}

.btnCropper,
.btnCancel {
  width: 70px;
  height: 30px;
  margin-left: 10px;
  background-color: red;
  color: #fff;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}

.introjs-tips {
  margin-left: 10px;
  color: #999;
  font-size: 13px;
}

.jcrop-preview,
.preview {
  background-color: #fff;
  overflow: hidden;
}

.jcrop-preview {
  position: fixed;
  right: 20px;
  top: 20px;
}

.form .form-error {
  padding-top: 5px;
  height: 17px;
}

.grid-item:nth-child(2) .form {
  margin-right: 0;
}

</style>