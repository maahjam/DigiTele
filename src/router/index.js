import Vue from 'vue'
import Router from 'vue-router'
import NoSelectedChat from '@/components/NoSelectedChat'
import ChatPageContent from '@/components/ChatPageContent'
import UserInfo from '@/components/UserInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoSelectedChat',
      component: NoSelectedChat
    },
    {
      path: '/ChatPage/:contactUsername',
      name: 'ChatPageContent',
      component: ChatPageContent,
      props: true
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo,
      props: true
    },
  ]
})

