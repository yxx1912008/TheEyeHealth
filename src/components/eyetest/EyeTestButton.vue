<template>
  <!-- eyetest按钮区域-->
  <div class="container">
    <ul>
      <li v-for="(item,index) in bottonList " @click="chooseTest(item.path)" :key="index">
        <span class="botton-title">{{item.name}}</span>
        <icon class="botton-style" slot="icon" :name="item.iconPath"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import BottonData from '../../data/EyeTest/MainData/MainData'

  export default {
    data() {
      return {
        bottonList: BottonData || []
      }
    },
    methods: {
      //选择测试项目
      chooseTest: function (path) {
        console.log(path)
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 45.28vh;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }

  li {
    width: 25vh;
    height: 20vh;
    margin-top: 1vh;
    margin-left: 3vh;
    border-radius: 10px;
    line-height: 20vh;
    color: white;
  }

  li:nth-of-type(1) {
    background-color: #01b0c0;
  }

  li:nth-of-type(2) {
    background-color: #f94753;
  }

  li:nth-of-type(3) {
    background-color: #6bbd3f;
  }

  li:nth-of-type(4) {
    background-color: #f7b94a;
  }

  .botton-style {
    width: 40px;
    height: 40px;
    display: inline-block;
  }


</style>
