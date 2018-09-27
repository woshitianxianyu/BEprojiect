<template>
  <div id="app">
    <router-view/>
    
      
    
  </div>
</template>

<script>
  import Vue from 'vue';

  import Element from 'element-ui';

  Vue.use(Element);

  import '@/sass/base.scss';

  import 'element-ui/lib/theme-chalk/index.css';
  import axios from 'axios';

  // 为了能够在其他的组件中直接的使用axios,我们直接加到原型对象中
  Vue.prototype.$axios = axios;

export default {
  
  name:'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
