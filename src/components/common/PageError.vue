<template>
  <!--页面错误-->
  <div class="pageErrors">
    <icon slot="icon" name="other/error" class="error-icon"></icon>
    <h3>{{showMsg}}</h3>

  </div>
</template>

<script>
  export default {
    props: ['showMsg']
  }
</script>

<style scoped>
  .pageErrors {
    width: 100vw;
    height: 50vh;
    margin-top: 20vh;
  }

  .error-icon {
    width: 128px;
    height: 128px;
  }

  h2 {
    font-weight: normal;
  }

</style>
