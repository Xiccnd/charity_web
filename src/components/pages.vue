<template>
  <div   id="cpaginate">
              <div  class="pages">
                <a href="javascript:void(0);" class="pages-btn disabled">首页</a>
                <a href="javascript:void(0);" class="pages-btn disabled">上一页</a>
                <a href="javascript:void(0);" class="active">1</a>
                <a href="javascript:void(0);" class="">2</a>
                <a href="javascript:void(0);" class="pages-btn">下一页</a>
                <a href="javascript:void(0);" class="pages-btn">尾页</a>
                <span >第</span>
                <input  type="text" />
                <span >页</span>
                <a href="javascript:void(0);" class="pages-btn">跳转</a>
                <span >1/1088页 共13054条</span>
              </div>
            </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pages {
    padding: 20px 0;
    text-align: center;
    font-size: 0;
}
.pages .pages-btn, .pages input {
    border-radius: 4px;
}
.pages .pages-btn {
    white-space: nowrap;
    width: 48px;
    border-radius: 24px;
}
.disabled{
    display: none!important;
}

.pages a {
    display: inline-block;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
    color: #999;
    vertical-align: middle;
    margin: 0 5px;
    transition: 0.3s;
}
.pages a.active, .pages .pages-btn:last-child:hover {
    border-color: #cc0000;
    background: #cc0000;
    color: #fff;
}
.pages span {
    font-size: 12px;
    color: #333;
    margin: 0 5px;
    vertical-align: middle;
}
.pages input {
    display: inline-block;
    width: 48px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #ccc;
    border-radius: 24px;
    text-align: center;
    font-size: 12px;
    color: #333;
    vertical-align: middle;
    padding: 0;
}
</style>