<template>
    <div>

        <div class="bg-pink-500 flex flex-row-revrese content">
            <div class=" bg-indigo-400 flex flex-col-reverse w-2/5 pl-6 pr-2">
                <div class="w-full">
                    <ChatListItem/>
                </div>
            </div>

            <div class="w-full">
               
               chat page
                
            </div>
        </div>
        
    </div>
</template>

<script>
import ChatListItem from './ChatListItem'
import Modal from './Modal'
export default {
    data(){
        return{
            show: false
        }
    },
    components:{
        ChatListItem,
        Modal
    }
}
</script>

<style  scoped>

</style>