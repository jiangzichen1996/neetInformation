<template>
  <div>
      <common-header bg="rgb(131,175,155)">
                  <h2 class="title" slot="title">Animation</h2>

      </common-header>
      <router-view></router-view>
      
      <common-footer bg="rgb(131,175,155)"></common-footer>
  </div>
</template>
<script>
import commonHeader from '@/components/common/Header'
import commonFooter from '@/components/common/Footer'

export default {
  components:{
      commonHeader,
      commonFooter

  }
}
</script>
<style scoped>

</style>
