<template>
    <div>
        <div class="bg-white flex flex-col h-screen">
            <div id= "hasan" class="h-5/6 overflow-y-auto">
                <UserInfoHeader :contact="contact"/>
                <MessageListItem v-for="(item , i) in messages" :key="i" :contact="contact" :message="item" :selectedMessageId="selectedMessageId" @onMessageClicked="onMessageClicked"/>
                 
            </div>
            <div class="h-2/6 ">
                <ReplyView />
                <InputView v-if="selectedMessageId == null" @onSend="handleSend1"/>
                <ActionsView v-else @onCancelClicked="onCancelClicked" @onDeleteClicked="onDeleteClicked" @onReplyClicked="onReplyClicked"/>
                <!-- <ReplyView/> -->
            </div>
            
        </div>
    </div>
</template>

<script>
import InputView from './InputView'
import MessageListItem from './MessageListItem'
import ActionsView from '../Actions/ActionsView'
import UserInfoHeader from '../UserInfo/UserInfoHeader'
import ReplyView from './ReplyView'
import MockDataManager from '../../utilities/MockDataManager'


export default {
    data(){
        return{
            contact: Object,
            messages: null,
            newMessageText: String,
            msgID: 1000,
            selectedMessageId: null,
            replyMessage: null,
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
        contactUsername:{
            type: String
        }

    },

     watch: { 
      	contactUsername: function(newVal, oldVal) { 
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
     this.contact = MockDataManager.getChatContact(newVal );
            this.messages = MockDataManager.getChatMessages(newVal);
MockDataManager.clearUnreadCount(newVal);

        }
    },

    mounted() {
            this.contact = MockDataManager.getChatContact(this.$route.params.contactUsername );
            this.messages = MockDataManager.getChatMessages(this.$route.params.contactUsername );
              let div = document.getElementById("hasan");
               
div.scrollTop = div.scrollHeight - div.clientHeight;
    },
    updated(){

    },
    methods:{
        handleSend1 (newValue) {
              this.newMessageText = newValue;
     MockDataManager.addChatMessage(this.contact.username,          this.newMessageText);

            this.messages = MockDataManager.getChatMessages(this.contact.username);
          
            // this.messages.push({"id": this.msgID.toString() , "text": this.newMessageText, "isMine": true, "dateTime": "2021-08-12T13:07:23", "isUnread": true, "replyMessageId": 234})
            setTimeout(() => { 
        let div = document.getElementById("hasan");
                console.log(div.scrollHeight - div.clientHeight);
div.scrollTop = div.scrollHeight - div.clientHeight;
                }, 500)
                this.newMessageText = ""
          
                
         },

          scrollToElement() {
    const el = this.$refs.scrollToMe;

    if (el) {
      // Use el.scrollIntoView() to instantly scroll to the element
      el.scrollIntoView({behavior: 'smooth'});
    }
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

            // this.messages = this.messages.filter((item) => item.id !== this.selectedMessageId);
            
            // this.selectedMessageId = null

// console.log(this.selectedMessageId);
                 MockDataManager.removeChatMessage(this.contact.username, this.selectedMessageId);

            this.messages = MockDataManager.getChatMessages(this.contact.username);
            this.onCancelClicked();
        },

        onReplyClicked () {
            this.replyMessage = this.messages.find(m => m.id === this.selectedMessageId);
        },
    },
      updated(){
    },
}
</script>