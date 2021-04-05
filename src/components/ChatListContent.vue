<template>
    <div>

        <div class="flex flex-row-revrese content">
            <div class=" bg-indigo-400 flex flex-col w-2/5 pl-6 pr-2">
                <div class="w-full">
                    <ChatListItem v-for="(item , i) in chatListItems" :key="i" :chatListItem="item" />
                </div>
            </div>

            <div class="w-full bg-green-400 h-screen">
               
               chat page
                
            </div>
        </div>
        
    </div>
</template>

<script>
import ChatListItem from './ChatListItem'
export default {
    data(){
        return{
            show: false,
            chatListItems: [
             {
              "chatId": 624,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 624,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 624,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 624,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
         ],
        
        }
    },
    components:{
        ChatListItem,
    }
}
</script>

<style  scoped>

</style>