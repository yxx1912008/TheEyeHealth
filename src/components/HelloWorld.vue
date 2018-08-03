<template>
  <div class="hello">
    <Header :rightMethod="getMsg" rightTitle="保存"/>
    <h1>{{ msg }}</h1>
    <Footer/>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        msg: '我是模板消息'
      }
    },
    methods: {
      getMsg: function () {
        console.log(this.msg)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }
</style>
