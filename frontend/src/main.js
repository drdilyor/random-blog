import 'regenerator-runtime/runtime'
import Vue from 'vue'
import MdApp     from 'vue-material/dist/components/MdApp'
import MdButton  from 'vue-material/dist/components/MdButton'
import MdCard    from 'vue-material/dist/components/MdCard'
import MdChips   from 'vue-material/dist/components/MdChips'
import MdContent from 'vue-material/dist/components/MdContent'
import MdDrawer  from 'vue-material/dist/components/MdDrawer'
import MdIcon    from 'vue-material/dist/components/MdIcon'
import MdList    from 'vue-material/dist/components/MdList'
import MdRipple  from 'vue-material/dist/components/MdRipple'
import MdToolbar from 'vue-material/dist/components/MdToolbar'

import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.config.productionTip = false

Vue.use(MdApp)
Vue.use(MdDrawer)
Vue.use(MdCard)
Vue.use(MdChips)
Vue.use(MdContent)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdRipple)
Vue.use(MdToolbar)


Vue.filter('date', function (date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })
    .format(new Date(date))
})

Vue.filter('authorName', function (author) {
  if (author.user.firstName && author.user.lastName)
    return `${author.user.firstName} ${author.user.lastName}`
  else
    return author.user.username
})

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
