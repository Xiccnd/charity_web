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
</style>