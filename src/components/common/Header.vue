<template>
  <div>
      <h2 class="title">Animation</h2> 
  </div>
</template>
<script>
export default {
  
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
    background: rgb(131,175,155);
    position:fixed;
    top: 0;
    width: 100%;
    color: white;

}
</style>
