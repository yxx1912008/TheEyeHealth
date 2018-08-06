<template>
  <!--错误页面-->
  <div class="container">
    <Header title="错误页面" :showLeft='false'/>
    <Page-error :showMsg="getErrorMsg"/>
  </div>
</template>

<script>
  export default {
    props: ['errorMsg'],
    data() {
      return {
        showMsg: '页面出错',
        num: 3,
        timeOut: {}
      }
    },
    mounted() {
      if (this.errorMsg !== undefined) {
        this.showMsg = this.errorMsg
      }
      this.timeOut = setInterval(() => {
        this.num--
        if (this.num === 0) {
          clearInterval(this.timeOut)
          this.$router.replace('/')
        }
      }, 1000)
    },
    computed: {
      getErrorMsg: function () {
        return this.showMsg + `,${this.num}秒后返回主页面`
      }
    },
    beforeDestroy: function () {
      console.log('定时器销毁')
      clearInterval(this.timeOut)
    }
  }
</script>

<style scoped>


</style>
