<template>
  <!--视力测试首页-->
  <div class="container">
    <Header :showLeft="showLeft" title="视力测试"/>
    <EyeTestBanner/>
    <Eye-test-button/>
    <Footer/>
  </div>
</template>

<script>

  export default {

    data() {
      return {
        showLeft: false
      }
    }
  }
</script>

<style scoped>

</style>
