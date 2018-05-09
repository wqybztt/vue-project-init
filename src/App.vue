<template>
  <div>
    <app-header></app-header>  
    <router-view/>
    <div>{{error}}</div>
  </div>
</template>

<script>
  import types from '@/store/types';
  import AppHeader from '@/components/app-header'
  export default {
    name: 'app',
    data(){
      return {

      }
    },
    computed:{
      error(){
        return this.$store.state.error;
      }
    },
    components:{
      AppHeader
    },
    beforeCreate(){
      this.$store.dispatch(types.EXAMPLE,{para:'para'});
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
