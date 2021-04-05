<template>
    <div>
        <div class="w-full">
            <ChatListItem v-for="(item , i) in chatListItems" :key="i" :chatListItem="item" />
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
              "chatId": 620,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 621,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?Hello Mahsa?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 622,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
               {
              "chatId": 623,
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
              "chatId": 625,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
             {
              "chatId": 626,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
             {
              "chatId": 627,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
             {
              "chatId": 628,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
             {
              "chatId": 629,
              "contact": {"phoneNumber": "+989121234334", "name": "Mahsa Hasani", "username": "maahj", "photoURL": "https://digikala.com/masha.jpg", "lastSeen": "null||2020-09-12T12:07:23"},
              "lastMessage": {"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234},
              "unreadCount": 23
             },
             {
              "chatId": 630,
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