<template>
    <div>
        <div class="bg-white flex flex-col h-screen">
            <div class="h-5/6 overflow-y-auto">
                <UserInfoHeader/>
                <MessageListItem v-for="(item , i) in messages" :key="i" :message="item" :selectedMessageId="selectedMessageId" @onMessageClicked="onMessageClicked"/>
                 
            </div>
            <div class="h-2/6">
                <InputView v-if="selectedMessageId == null" @onSend="handleSend1"/>
                <ActionsView v-else @onCancelClicked="onCancelClicked" @onDeleteClicked="onDeleteClicked"/>
                <!-- <ReplyView/> -->
            </div>
            
        </div>
    </div>
</template>

<script>
import InputView from './InputView'
import MessageListItem from './MessageListItem'
import ActionsView from './ActionsView'
import UserInfoHeader from './UserInfoHeader'
import ReplyView from './ReplyView'


export default {
    data(){
        return{
            contact: Object,
            messages: [{"id": "12389", "text": "Hello Mahsa, What's up?", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234}],
            newMessageText: String,
            msgID: 1000,
            selectedMessageId: null
        }
    },
    components:{
        InputView,
        MessageListItem,
        ActionsView,
        UserInfoHeader,
        ReplyView
    },
    props:{
        chatId:{
            type: String
        }

    },

     watch: { 
      	chatId: function(newVal, oldVal) { 
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
    },
    methods:{
        handleSend1 (newValue) {
            this.newMessageText = newValue
            this.msgID += 1
            this.messages.push({"id": this.msgID.toString() , "text": this.newMessageText, "isMine": true, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234})
            setTimeout(() => { 
                this.messages.push({"id": "50505054", "text": "Message from her", "isMine": false, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234})
                }, 2000)
                this.newMessageText = ""
         },

        onMessageClicked (messageId) {
            if (this.selectedMessageId == messageId) {
                this.selectedMessageId = null
            }else {
                this.selectedMessageId = messageId
            }
            
        },

        onCancelClicked () {
            this.selectedMessageId = null
        },

        onDeleteClicked () {
            //  MockDataManager.deleteMessage(this.selectedMessageId);
            //  this.messages = MockDataManager.getMessages();

            this.messages = this.messages.filter((item) => item.id !== this.selectedMessageId);
            this.onCancelClicked()
            // this.selectedMessageId = null
        }
    },
      updated(){
    },
}
</script>