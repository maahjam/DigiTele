<template>
    <div class="container mx-auto h-screen">
        <!-- <Header/> -->
        <ChatAndChatPageContainer class="pt-12 pb-6"/>
        <Footer/>
    </div>
</template>

<script>
import Header from '../Header/Header'
import ChatAndChatPageContainer from '../ChatAndChatPage/ChatAndChatPageContainer'
import Footer from '../Footer/Footer'
export default {
    components:{
        Header,
        ChatAndChatPageContainer,
        Footer
    }
}
</script>

<style scoped>
.container{
    background-color: #5580a3;
}
</style>