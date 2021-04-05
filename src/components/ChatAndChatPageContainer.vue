<template>
    <div>

        <div class="flex flex-row-revrese content">
            <div class="chatListContent bg-indigo-400 flex flex-col w-2/5 pl-6 pr-2 overflow-y-auto h-screen">
                    <ChatListContent/>
            </div>

            <div class="w-full bg-green-400 h-screen">
               <ChatPageContent/>
               <!-- messageList.count == 0 : <EmptyView/> ?     
                
               <MessageList>
                   //for
                   <MessageListItem/>
               <MessageList/>
           
               <InputView/> -->
                
            </div>
        </div>
        
    </div>
</template>

<script>
import ChatListContent from './ChatListContent'
import ChatPageContent from './ChatPageContent'
export default {
    components:{
        ChatListContent,
        ChatPageContent
    }
}
</script>

<style scoped>
/* @media only screen and (max-width: 1023px) {
  .chatListContent {
    width: 70%;
  }
} */
</style>
