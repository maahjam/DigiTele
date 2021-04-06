<template>
    <div>
        <div class="modal-vue">
            <div class="overlay" v-if="showModal" @click="handleClose">
                <div class="modal" v-if="showModal">
                    <div class="h-12 flex flex-row contacts-header items-center pl-4 pr-4">
                        <div class="w-full text-sm font-medium text-white">
                            Contacts
                        </div>
                        <div class="w-full close text-right text-xs font-medium" @click="handleClose">
                             Close
                        </div>
                    </div>
                    <div class="flex flex-col h-96 overflow-y-auto">
                        <ContactsItem v-for="(contact , i) in contacts" :key="i" :contact="contact"/>
                    </div>                    
                    
               </div>
            </div>            
        </div>
        
    </div>
</template>

<script>
import MockDataManager from '../utilities/MockDataManager'
import ContactsItem from './ContactsItem'
import UserInfo from './UserInfo'

export default {
    data(){
        return{
            contacts: []
        }
    },
    methods: {
    handleClose() {
        this.$emit('onClose')
    }
  },
    props:{
        showModal:{
            type: Boolean,
        }
    },
    components:{
        ContactsItem,
        UserInfo
    },
    mounted(){
        this.contacts = MockDataManager.getContacts()
        console.log(this.contacts);
    }
}
</script>

<style  scoped>
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal-vue .modal {
  position: relative;
  width: 400px;
  z-index: 9999;
  margin: 0 auto;
  background-color: #fff;
  top: 20%;
}

.close{
  color: #dde8f1;
}

.contacts{
    color: #dde8f1;
}

.contacts-header{
    background-color: #5580a3;
}

.close{
  color: #dde8f1;
}

.close:hover{
    cursor: pointer;
    color: white;
}
</style>