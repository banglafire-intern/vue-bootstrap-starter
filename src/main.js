import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
import Popper from 'popper.js'
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false




new Vue({
  render: h => h(App),
})
.$mount('#app')
