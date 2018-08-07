<template>
  <!--视力测试首页banner-->
  <div class="test-banner">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in banner">
        <img :src="item.url" :alt="item.name">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import tabListData from '../../data/EyeTest/bannerdata/Banner'

  export default {

    data() {
      return {
        banner: tabListData || []
      }
    },
    mounted() {
      console.log(this.banner)
    }
  }
</script>

<style scoped>
  /*首页banner*/
  .test-banner {
    height: 37.45vh;
  }

  img {
    height: 37.45vh;
  }
</style>
