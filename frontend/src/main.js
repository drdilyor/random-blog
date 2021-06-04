import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

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
