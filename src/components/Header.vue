<template>
    <div>

        <div class="bg-blue-500 fixed-header container h-12">
            <div class="flex flex-row pl-6 pr-6">
                <div class="w-1/12">
                    <img class="w-10 h-10 pt-2" @click="showModal = true" src="@/assets/svg/contacts.svg" alt="contacts">
                    
                </div>
                <div class="text-white p-2">
                    Telegram
                </div>
            </div>
        </div>
        <Modal :showModal="showModal"/>
    </div>
</template>

<script>
import Modal from './Modal'
export default {
    data(){
        return{
            showModal: false
        }
    },
    components:{
        Modal
    }
}
</script>

<style scoped>
.fixed-header{
  overflow: hidden;
  background-color: #3a6d99;
  position: fixed;
  top: 0;
  width:100%;
}
</style>

