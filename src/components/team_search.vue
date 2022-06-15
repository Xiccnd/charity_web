<template>
   <li class="col v-m" style="width: 90%">
               <form @submit.prevent="search()">
              <span class="label">队伍登记日期</span>
              <div slot="" class="mx-datepicker" style="width: 120px">
                <div class="mx-input-wrapper">
                  <input
                    name="date"
                    type="date"
                    autocomplete="off"
                    placeholder=""
                    class="mx-input"
                    v-model="releaseDate"
                  />
                  
                </div>
              </div>
              <span class="label">至</span>
              <div class="mx-datepicker" style="width: 120px">
                <div class="mx-input-wrapper">
                  <input
                    name="date"
                    type="date"
                    autocomplete="off"
                    placeholder=""
                    class="mx-input"
                search    v-model="recruitDate"
                  />
                 
                </div>
              </div>
              <span class="label">队伍联络编号</span>
              <input
                type="text"
                maxlength="18"
                class="input"
                style="width: 180px; height: 34px"
                 v-model="searchid" name="searchid"
              />
              <span class="label"> 队伍名称</span>
              <input
                type="text"
                maxlength="30"
                class="input"
                style="width: 180px; height: 34px"
                v-model="searchpname" name="searchpname"
              />
              <button
                href="javascript:void(0);"
                class="button button-small"
                type="submit"
                style="height: 34px; line-height: 34px">搜索</button>

              
              </form>
            </li>
</template>

<script>
export default {
  methods:{
    search:function(){
        const _this = this
        this.$http({
                  method:"get",
                  url:"/volunteerProgramDetails/selectAll",
                  params:{
                    pid:_this.searchid,
                    pname:_this.searchpname,
                    releaseDate:_this.releaseDate,
                    recruitDate:_this.recruitDate
                   }
               })
              .then(res => {
                //  _this.volunteer_program_details=JSON.stringify(res.data)
                 this.$emit("searchdata", res.data);
              })
              .catch(err => {
                console.error(err); 
              })
              //  console.log(_this.volunteer_program_details)
       
      }
  }
}
</script>

<style scoped>

.mx-datepicker {
  position: relative;
  display: inline-block;
  width: 210px;
}
.mx-input-wrapper {
  position: relative;
}
.mx-input {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 34px;
  padding: 6px 30px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 1.4;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
}
.mx-icon-calendar,
.mx-icon-clear {
  position: absolute;
  top: 50%;
  right: 8px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}
.mx-datepicker svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.label + .input {
  width: 150px;
  height: 28px;
  line-height: 28px;
  margin-right: 5px;
}
.text-tab .active {
  color: #cc0000;
}
.text-tab a {
  font-size: 14px;
  color: #333;
  padding: 0 10px;
  position: relative;
}
.text-tab a:before {
  content: "";
  display: inline-block;
  width: 2px;
  height: 12px;
  background: #cc0000;
  border-radius: 2px;
  position: absolute;
  left: -1px;
  top: 50%;
  margin-top: -6px;
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


.button-small {
  width: 46px;
  height: 28px;
  line-height: 28px;
  padding: 0;
}
</style>