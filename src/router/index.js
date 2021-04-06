import Vue from 'vue'
import Router from 'vue-router'
import NoSelectedChat from '@/components/NoSelectedChat'
import ChatPageContent from '@/components/ChatPageContent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoSelectedChat',
      component: NoSelectedChat
    },
    {
      path: '/ChatPage/:chatId',
      name: 'ChatPageContent',
      component: ChatPageContent,
      props: true
    },
  ]
})
