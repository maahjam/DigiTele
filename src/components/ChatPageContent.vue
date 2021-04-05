<template>
    <div>
        <div class="bg-white flex flex-col h-screen">
            <div class="bg-red-300 h-5/6 overflow-y-auto">
                <UserInfoHeader/>
                <MessageListItem v-for="(item , i) in messages" :key="i" :message="item" />
                 <!-- <ActionsView/> -->
            </div>
            <div class="bg-pink-400 h-2/5">
                <InputView @onSend="handleSend1"/>
            </div>
            
        </div>
    </div>
</template>

<script>
import InputView from './InputView'
import MessageListItem from './MessageListItem'
import ActionsView from './ActionsView'
import UserInfoHeader from './UserInfoHeader'
export default {
    data(){
        return{
            contact: Object,
            messages: [{"id": 12389, "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234}],
            newMessageText: String,
            msgID: 1000
        }
    },
    components:{
        InputView,
        MessageListItem,
        ActionsView,
        UserInfoHeader
    },
    props:{
        chatId:{
            type: String
        }

    },

     watch: { 
      	chatId: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
    },
    methods:{
        handleSend1 (newValue) {
            this.newMessageText = newValue
            this.msgID += 1
            this.messages.push({"id": this.msgID , "text": this.newMessageText, "isMine": true, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234})
            setTimeout(() => { 
                this.messages.push({"id": "50505054", "text": "Message from her", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234})
                }, 2000)
                this.newMessageText = ""
         }
    },
      updated(){
    },
}
</script>