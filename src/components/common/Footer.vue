<template>
  <div>
      <ul class="title">
          <li>动画</li>
          <li>音乐</li>
          <li>图片</li>
      </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.title{
    height: 1rem;
    background: rgb(131,175,155);;
    position:fixed;
    bottom: 0;
    width: 100%;
    display: flex;
}
.title li{
    float: left;
    color: white;
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
    font-size: .3rem;
}
</style>
