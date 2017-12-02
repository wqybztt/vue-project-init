<template>
  <div>
    <h1>home</h1>
    <p>
      <router-link :to="{name:'List',params:{id:1},query:{page:2}}">list page</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
