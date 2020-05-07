import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage/index.vue'
import Download from '@/view/download/index.vue'
import Document from '@/view/document/index.vue'
import Example from '@/view/example/index.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Download',
      name: 'Download',
      component: Download
    },
    {
      path: '/Document',
      name: 'Document',
      component: Document
    },
    {
      path: '/Example',
      name: 'Example',
      component: Example
    },
  ],


  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      //console.log(to.hash)
      return {
        selector: to.hash
      }
    }
  }
})
