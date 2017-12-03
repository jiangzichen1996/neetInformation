<template>
  <div>
    <ul>
      <li class="photo-list" v-for="(i,index) in photo" :key='i.src'>
        <router-link :to="'/photo/photoDetail/'+index">
          <img :src="i.src" alt="">        
        </router-link>
      </li> 
    </ul>
  </div>
</template>
<script>
import Axios from "axios"

    export default{
      data(){
        return {
          photo:[],
           aa:''

        }
      },
      mounted(){
        Axios.get('./static/data/photodata.json').then(data=>{
          this.photo=[...data.data.photoData];
          this.$store.dispatch('setPhotoList',this.photo);
        }).catch();
      }

    }
</script>
<style scoped>
.photo-list{
  float: left;
  width: 50%;
}
</style>
