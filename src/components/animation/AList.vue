<template>
<div>

      <swiper>
        <swiper-slide class="slide-img" v-for="(item,index) in ani" :key='item.index'>
            <img :src="item.cover" alt="">
            <h6>{{item.title}}</h6>
            </swiper-slide>
      </swiper>
  <ul class="movie-list">   
            <li v-for="(item,index) in ani" class='movie' :key='item.index' >
              <div class="movie-img">
                  <a :href="item.url">
                    <img  :src=item.cover alt="图片加载失败">  
                    </a>                  
              </div>
                <div class="movie-info">
                    <a :href="item.url">
                        <p class="movie-name">{{item.title}}</p>
                    </a>
                        <p>{{item.time}}</p>
                        <p>{{item.content}}</p>
               </div >
            </li>
            
        </ul>

</div>
 

</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      ani: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {},
  mounted() {
    Axios.get("./static/animation.json")
      .then(data => {
        this.ani = [...data.data.showapi_res_body.result];
      })
      .catch();

      
  }
};
</script>
<style scoped>
a {
  outline: none;
  text-decoration: none;
  color: #000;
}
.slide-img {
  background-position: center;
  width: 100%;
}
.my-swipe {
  width: 100%;
  height: 3rem;
}
.movie-list li {
  display: flex;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
}
.movie-img {
  width: 0;
  flex-grow: 1;
  margin-right: 0.2rem;
}
.movie-img img {
  width: 100%;
}
.movie-name {
  font-weight: bolder;
}
.movie-info {
  flex-grow: 2;
  width: 0;
}
.loading-img {
  display: block;
  margin: 0 auto;
}
</style>

