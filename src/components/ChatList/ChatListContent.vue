<template>
    <div>
            <Header/>
            <ChatListItem v-for="(chat , i) in chats" :key="i" :chat="chat" />            
    </div>
</template>

<script>
import MockDataManager from '../../utilities/MockDataManager'
import ChatListItem from './ChatListItem'
import Header from '../Header/Header'

export default {
    data(){
        return{
            show: false,
            chats: MockDataManager.getChats(),
        
        }
    },
    components:{
        ChatListItem,
        Header
    }
}
</script>