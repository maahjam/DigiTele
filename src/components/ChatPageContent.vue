<template>
    <div>
        <div class="bg-white flex flex-col h-screen">
            <div class="bg-red-300 h-5/6">
                <MessageListItem/>
                <div>{{chatId}}</div>
                <!-- <ActionsView/> -->
            </div>
            <div class="bg-pink-400 h-2/5">
                <InputView/>
            </div>
            
        </div>
    </div>
</template>

<script>
import InputView from './InputView'
import MessageListItem from './MessageListItem'
import ActionsView from './ActionsView'
export default {
    components:{
        InputView,
        MessageListItem,
        ActionsView
    },
    props:{
        chatId:{
            type: String
        }
    }
}
</script>