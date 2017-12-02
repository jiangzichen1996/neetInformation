<template>
 <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(a,index) in ani" :key='a.index'>
        <img :src="a.cover">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Axios from 'axios' 
export default {
    data(){
        return {
            ani:[],
            swiperOption: {
            pagination: {
                el: '.swiper-pagination'
            },}
           

        }
    },
  components:{
  },
  mounted(){
      Axios.get('./static/animation.json').then((data)=>{
          console.log(data.data.showapi_res_body.result)
          this.ani=[...data.data.showapi_res_body.result]
      }).catch();
  }
}
</script>
<style scoped>
.my-swipe{
    width: 100%;
    height: 3rem;
    background: url('http://imgs.gamersky.com/upimg/2017/201712021715443323.jpg') no-repeat center/cover;

}
.slide{
}
</style>
