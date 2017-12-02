<template>
  <div>
      <common-header></common-header>
      <router-view></router-view>
      
      <common-footer></common-footer>
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
