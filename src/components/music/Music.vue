<template>
    <div>
       <common-header bg="rgb(114,83,52)">
                     <h2 class="title" slot="title">Music</h2>

       </common-header>
      <router-view></router-view>
      <common-footer bg="rgb(114,83,52)"></common-footer>
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

