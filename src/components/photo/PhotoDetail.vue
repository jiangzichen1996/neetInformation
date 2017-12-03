<template>
<v-touch tag="div" class="mask" @tap="goback" @swipeleft='swipeleft' @swiperight='swiperight'  :style="background">
</v-touch>
</template>
<script>
    export default{
        data(){
            return {
                nowIndex:0
            }
        },
        computed:{
              background(){
                  return {
                    background:` #000 url(${this.$store.state.photoList[this.nowIndex].src}) no-repeat center/contain`
                    }
              }  

        },
        props:['index'],
        methods:{
            goback(){
                this.$router.go(-1);
            },
            swipeleft(){
                this.nowIndex++;
                if(this.nowIndex==this.$store.state.photoList.length){
                    this.nowIndex=0
                }
            },
            swiperight(){
                this.nowIndex--;
                if(this.nowIndex==-1){
                    this.nowIndex=this.$store.state.photoList.length-1
                }
            }
        },
        mounted(){
            this.nowIndex=this.$route.params.index;
        }
    }
</script>
<style scoped>
.mask{
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 0;
    right:0;
    background: #000;
}
</style>
