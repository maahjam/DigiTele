<template>
    <div>

        <div class="flex flex-row-revrese content">
            <div class="chatListContent flex flex-col w-2/5  pb-2 overflow-y-auto border-gray-200 border-r-2 h-screen">
                    <ChatListContent/>
            </div>
            <div class="w-full h-screen">
                <router-view></router-view>
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


