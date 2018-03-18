import Vue from 'vue'
import App from './App.vue'
import jquery from '../node_modules/jquery';
import popper from '../node_modules/popper.js';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
