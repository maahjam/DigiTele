<template>
    <div class="container mx-auto bg-red-300 h-screen">
        <Header/>
        <ChatListContent class="pt-12"/>
    </div>
</template>

<script>
import Header from './Header'
import ChatListContent from './ChatListContent'
export default {
    components:{
        Header,
        ChatListContent
    }
}
</script>

<style scoped>
</style>