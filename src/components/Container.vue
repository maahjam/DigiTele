<template>
    <div class="container mx-auto bg-red-300 h-screen">
        <Header/>
        <ChatAndChatPageContainer class="pt-12 pb-6"/>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import ChatAndChatPageContainer from './ChatAndChatPageContainer'
import Footer from './Footer'
export default {
    components:{
        Header,
        ChatAndChatPageContainer,
        Footer
    }
}
</script>

<style scoped>
</style>