<template>
  <div>
      <ul>
          <li v-for="item in res" :key=item.albumid>
              <router-link :to="'/music/musicDetail/'+item.albumid">
              <img :src="item.artistpic" alt="">

              </router-link>
          </li>
      </ul>

  </div>
</template>
<script>
import Axios from 'axios'
export default {
data(){
    return {
        res:[]
    }
},
mounted(){
      Axios.get(API_PROXY+'http://sug.music.baidu.com/info/suggestion' ).then(
          data=>{
              this.res=data.data.data.album
              
          }
      ).catch() 
  }
}
</script>
<style scoped>
li{
    width: 50%; 
    float:left;
}
li img{
    width: 100%;
}
</style>
