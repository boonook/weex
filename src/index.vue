<template>
  <div class="wrapper">
    <wxc-button title="测试">ceshi</wxc-button>
    <text class="greeting">The environment is ready!</text>
    <h-l-refresh/>
    <router-view/>
  </div>
</template>

<script>
  import {WxcButton} from 'weex-ui'
  import HLRefresh from '@/components/HLRefresh'
  export default {
  name: 'App',
  components:{
    HLRefresh,WxcButton
  },
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
