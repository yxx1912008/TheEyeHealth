<template>
  <!--顶部导航栏-->
  <mt-header class="header-nav" :title="title">
    <router-link v-if='isShow' to="-1" slot="left">
      <mt-button icon="back">{{backTitle}}</mt-button>
    </router-link>
    <mt-button @click.native="rightMethod" slot="right">{{rightOfTitle}}</mt-button>
  </mt-header>

</template>

<script>
  export default {
    props: ['title', 'hasBackTitle', 'showLeft', 'rightMethod', 'rightTitle'],
    data() {
      return {
        isShow: true,
        backTitle: '返回',
        rightOfTitle: ''
      }
    },
    mounted() {
      // 如果传递了back,则左侧返回文字显示的是传入的值
      /* if (this.$options.propsData.back !== undefined) this.backTit = this.$options.propsData.back;*/
      if (this.hasBackTitle !== undefined) {
        this.backTitle = this.hasBackTitle
      }
      // 如果传递了showLeft(默认是true),则该值决定左侧是否显示
      /*if (this.$options.propsData.showLeft !== undefined) this.iSshow = this.$options.propsData.showLeft;*/
      if (this.showLeft !== undefined) {
        this.isShow = this.showLeft
      }
      if (this.rightTitle !== undefined) {
        this.rightOfTitle = this.rightTitle
      }
    }
  }
</script>

<style scoped>
  .header-nav {
    height: 50px;
  }
</style>
