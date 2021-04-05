<template>
    <div>
        <div class="bg-white flex flex-col h-screen">
            <div class="bg-red-300 h-full">
                <MessageListItem/>
            </div>
            <div class="bg-pink-400">
                <InputView/>
            </div>
            
        </div>
    </div>
</template>

<script>
import InputView from './InputView'
import MessageListItem from './MessageListItem'
export default {
    components:{
        InputView,
        MessageListItem
    }
}
</script>