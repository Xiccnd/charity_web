<template>
  <ul class="row w" style="text-align:left">
    <li class="col">
      <div class="router">
        <span>当前位置：</span>
        <a href="javascript:void(0);">
          <slot name="pp"></slot>
        </a>
         <a href="javascript:void(0);">
          <slot name="cp"></slot>
        </a>
        <slot name="tp"></slot>
      </div>
    </li>
  </ul>
</template>

<script >
export default {};
</script>

<style>
.router {
  margin: 16px 0 !important;
}
.router {
  font-size: 0;
  color: #8d8d8d;
  font-weight: 400;
  margin: 30px 0 30px 0px;
}
.router span {
  font-size: 16px;
}
.router a {
  text-decoration: none;
  color: #e60012;
  font-size: 16px;
}
.router a:after {
  content: ">";
  font-size: 16px;
  color: #8d8d8d;
  margin: 0 5px;
}
.wrapper {
    border: 1px solid #f2c9bb;
    background: rgba(255, 255, 255, 0.6);
    padding: 15px;
    margin-bottom: 20px;
}
.wrapper .subtitle {
    padding-left: 16px;
    border-bottom: 0;
    line-height: normal;
    margin: 10px 0;
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
.wrapper .subtitle:before {
    left: 0;
}
.list-bold {
    padding: 20px 0;
}
.wrapper .list.list-bold li[data-v-392f6828] {
    padding: 15px 16px;
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
.list li {
    padding: 13px 0;
    padding-left: 12px;
    line-height: 1;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
.w {
    width: 100%;
}
.row {
    display: table;
    table-layout: fixed;
    box-sizing: border-box;
}
.v-m {
    vertical-align: middle;
}
.col {
    display: table-cell;
    box-sizing: border-box;
}
.list li span {
    font-size: 16px;
    color: #999;
    width: 20%;
}
.pages {
    padding: 20px 0;
    text-align: center;
    font-size: 0;
}
.pages a.active, .pages .pages-btn:last-child:hover {
    border-color: #cc0000;
    background: #cc0000;
    color: #fff;
}
.pages a {
    width: auto !important;
    padding: 0 8px;
    border-radius: 4px !important;
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
.pl-40 {
    padding-left: 40px;
}
.g-8 {
    width: 33.33%;
}
.v-t {
    vertical-align: top;
}.col {
    display: table-cell;
    box-sizing: border-box;
}.list li a.full {
    width: 100%;
}.list-mini li a {
    font-size: 14px;
}.list li a:hover {
    color: #cc0000;
}.list-mini {
    padding: 0;
    padding-bottom: 20px;
}.images .img {
    display: block;
    width: 280px;
    height: 177px;
    background-size: cover;
    background-position: center center;
}.images-v li {
    width: 280px;
    margin: 0 auto;
}.images-v {
    margin-top: 10px;
}.images-v li i {
    text-align: center;
}.images-v li i {
    font-weight: normal;
    margin-bottom: 20px;
}.images i {
    display: block;
    font-size: 16px;
    color: #000;
    padding: 10px 0;
    transition: 0.3s;
}.oneline {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}.oneline:hover{
  color: #cc0000;
}.list-mini li {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>