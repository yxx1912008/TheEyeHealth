<template>
  <!--视力测试首页-->
  <div class="container">
    <Header :showLeft="showLeft" title="视力测试"/>
    <EyeTestBanner/>
    <Eye-test-button :chooseTest="chooseTest"/>
    <Footer/>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        showLeft: false
      }
    },
    methods: {
      chooseTest: function (toPush) {
        console.log(toPush)
        this.$router.push(toPush)
      }
    }
  }
</script>

<style scoped>

</style>
