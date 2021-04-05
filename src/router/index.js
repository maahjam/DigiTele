import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import ChatPageContent from '@/components/ChatPageContent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/ChatPageContent/:chatId',
      name: 'ChatPageContent',
      component: ChatPageContent,
      props: true
    },
  ]
})
