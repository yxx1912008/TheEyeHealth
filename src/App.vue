<template>
  <div id="app">
    <transition :name='transitionName' keep-alive>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        transitionName: ''
      }
    },
    watch: {
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index) {
          //设置动画名称
          this.transitionName = 'slide-left';
        } else {
          this.transitionName = 'slide-right';
        }
      }
    }
  }
</script>

<style>
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #f4f4f4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
    content: normal !important;
  }

  ul,
  li {
    list-style: none outside none;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }

  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
