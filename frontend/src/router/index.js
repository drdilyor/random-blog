import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '@/views/AllPosts'
import PostsByTag from '@/views/PostsByTag'
import Post from '@/views/Post'
import Author from '@/views/Author'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: AllPosts },
  { path: '/tag/:tag', component: PostsByTag },
  { path: '/post/:slug', component: Post },
  { path: '/author/:username', component: Author },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
