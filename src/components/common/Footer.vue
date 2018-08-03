<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item @click.native="choseTab(item.id,item.push)" v-for="item in  tabList" :key="item" :id="item.id">
      <img slot="icon" src="">
      {{item.name}}
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
  import tabListData from '../../data/TabbarData'

  export default {
    data() {
      return {
        selected: '',
        tabList: []
      }
    },
    methods: {
      choseTab: function (tabId, toPush) {
        console.log(`您选择的tab是:${tabId}`)
        this.$router.push('***')
      }

    },
    mounted() {
      this.tabList = tabListData
      this.selected = this.tabList[0].id
    }
  }
</script>

<style scoped>

</style>
