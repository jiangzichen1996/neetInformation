<template>
  <div class="title" :style='{"background":bg}'>
      <!-- <h2 class="title">Animation</h2>  -->
      <slot name='title' ></slot>
  </div>
</template>
<script>
export default {
  props:['bg']
}
</script>
<style scoped>
.title::after{
    content: "";
    display: block;
    clear: both;
}
.title{
    height: 1rem;
    position:fixed;
    top: 0;
    width: 100%;
    color: white;
    z-index: 999;

}
</style>
