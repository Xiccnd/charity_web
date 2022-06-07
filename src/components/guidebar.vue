<template>
  <ul class="row w" style="text-align:left">
    <li class="col">
      <div class="router">
        <span>当前位置：</span>
        <a href="javascript:void(0);">
          <slot name="pp"></slot>
        </a>
        <slot name="cp"></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style>
</style>