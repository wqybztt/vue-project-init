<template>
  <div>
    <p>list</p>
    <p>id : {{ id }}</p>
    <p>page : {{ page }}</p>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
    }
  },
  computed:{
    id(){
      return this.$route.params.id;
    },
    page(){
      return this.$route.query.page;
    }
  }
}
</script>

<style scoped>

</style>
