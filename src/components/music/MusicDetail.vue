<template>
  <div>
 <a-player v-if="isShow" :autoplay="true" :mutex="true" :narrow="false"   :music="songs" :showlrc="3">
</a-player>
  </div>
</template>
<script>
import VueAplayer from "vue-aplayer";
import Axios from "axios"
export default {
    data(){
        return {
            songs:[],
            isShow: false
        }
    },
  components: {
    "a-player": VueAplayer
  },
  mounted() {
    Axios.get("/static/data/musicdata.json")
      .then(res => {
        let list = res.data.musicData;
        list.forEach(element => {
          this.songs.push({
            title: element.title,
            author: element.author,
            url: element.src,
            pic: element.musicImgSrc,
            lrc: '/static/' + element.lrc
          });
        });
        this.isShow = true;
      })
      .catch();
  },beforeRouteLeave: (to, from, next) => {
    next();
  }
};
</script>
<style scoped>

</style>
