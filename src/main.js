import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import moment from 'moment'
import './assets/material-icons.css'

Vue.config.productionTip = false
Vue.use(MuseUI);

Vue.filter('datrfmt', function (input, fmtstring) {
  return moment(input).format(fmtstring);
})
new Vue({
  render: h => h(App),
}).$mount('#app')
