<template>
    <div>
      <common-header bg="rgb(78,29,76)">
          <h2 class="title" slot="title">Photo</h2>
          
      </common-header>
      <router-view></router-view>
      <common-footer bg="rgb(78,29,76)"></common-footer>
    </div>
</template>
<script>
import commonHeader from '@/components/common/Header'
import commonFooter from '@/components/common/Footer'
import Axios from "axios"; 

export default {
    data(){return {
    }},
  components:{
      commonHeader,
      commonFooter
  },
  mounted(){
  }

}
</script>
<style scoped>

</style>

