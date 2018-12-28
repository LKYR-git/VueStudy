<template>
  <div>
    <button @click="changeNum('+')">+</button>
    <span>{{num}}</span>
    <button @click="changeNum('-')">-</button>
    <span>千分符：{{formatNum}}</span>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  computed:{
    ...mapState({
      num:state=>state.app.num
    }),
    ...mapGetters({
      formatNum:'app/formatNum'
    })
  },
  mounted() {
    console.log('this.$store', this.$store);
  },
  methods: {
    ...mapMutations({
      changeNum:'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync:'app/changeNumAsync'
    }),
     changeNum(type){
         // this.$store.commit('changeNum', {payload: type});
        //   this.$store.commit({
        //     type: 'app/changeNum',
        //     payload: type
        //   })
       this.changeNumAsync(type).then(res=>{
        console.log('异步操作完成了!!!!');
      })
     }
   
  },
}
</script>
<style lang="scss" scoped>
</style>
