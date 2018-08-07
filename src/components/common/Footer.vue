<template>
  <div class="container">
    <mt-tabbar fixed class="footer-main" v-model="selected">
      <mt-tab-item @click.native="choseTab(item.id,item.push)" v-for="item in  tabList" :key="item.id" :id="item.id">
        <icon slot="icon" :name="item.iconsName"></icon>
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import tabListData from '../../data/TabbarData'

  export default {
    props: ['index'],
    data() {
      return {
        selected: '',
        tabList: []
      }
    },
    methods: {
      choseTab: function (tabId, toPush) {
        console.log(`您选择的tab是:${tabId}`)
        this.$router.push(toPush)
      }
    },
    mounted() {
      this.tabList = tabListData
      if (this.index !== undefined) {
        this.selected = this.index
      } else {
        this.selected = this.tabList[0].id
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 8.99vh;
  }
</style>
