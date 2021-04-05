<template>
    <div>

        <div class="flex flex-row-revrese content">
            <div class="chatListContent flex flex-col w-2/5  pb-2 overflow-y-auto h-screen">
                    <ChatListContent/>
            </div>

            <div class="w-full bg-green-400 h-screen">
                <router-view class="bg-yellow-700"></router-view>
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


