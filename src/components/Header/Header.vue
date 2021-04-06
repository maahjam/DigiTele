<template>
    <div>

        <div class="fixed-header h-12 block">
            <div class="flex flex-row pl-4 pr-4">
                <div class="w-1/12 mr-4">
                    <img class="contacts pt-2" @click="showModal = true" src="@/assets/svg/contacts.svg" alt="contacts"> 
                </div>
                <div class="text-white p-2">
                    Telegram
                </div>
            </div>
        </div>
        <ContactsModal :showModal="showModal" @onClose="handleClose"/>
    </div>
</template>

<script>
import ContactsModal from '../Contacts/ContactsModal'
export default {
    data(){
        return{
            showModal: false
        }
    },
    components:{
        ContactsModal
    },
     methods: {
    handleClose () {
        this.showModal = false
    }
  }
}
</script>

<style scoped>
.fixed-header{
  overflow: hidden;
  background-color: #5580a3;
  position: fixed;
  top: 0;
  width:25%;
}

.contacts{
  min-width: 35px;
  height: 35px;
}
</style>

