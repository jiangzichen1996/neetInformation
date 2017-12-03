<template>
<div class="clearfix">
<div class="clearfix"></div>
      <ul class="title" :style="{'background':bg}">
          
              <router-link tag="li" to="/">
             动画
               </router-link>   
          <router-link tag="li" to="/music">
                  音乐
               </router-link> 
          <router-link tag="li" to="/photo">
                  图片
               </router-link> 
               
      </ul>
      
</div>
 
</template>
<script>
export default {
  props:['bg']
}
</script>
<style scoped>
.title{
    height: 1rem;
    position:fixed;
    bottom: 0;
    width: 100%;
    display: flex;
}
.clearfix{
    height: 1rem;
    clear: both;
}
.title li{
    float: left;
    color: #fff;
    flex-grow: 1;
    text-align: center;
    line-height: 1rem;
    font-size: .3rem;
}
</style>
