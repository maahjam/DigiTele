<template>
    <div>

        <div class="bg-blue-500 fixed-header container h-12 block">
            <div class="flex flex-row pl-6 pr-6">
                <div class="w-1/12">
                    <img class="w-10 h-10 pt-2" @click="showModal = true" src="@/assets/svg/contacts.svg" alt="contacts"> 
                </div>
                <div class="text-white p-2">
                    Telegram
                </div>
                <div class="text-white ml-52 pt-1 w-full flex flex-row">
                    <div class="circularImage">
                        <img class="bg-red-400 rounded-full profileImage" src="" alt="" >
                    </div>
                    <div class="w-1/2 text-sm font-bold text-gray-100 pt-2 pb-2 pl-4 truncate">
                        Mahsa jamshidian
                    </div>
                    
                </div>
            </div>
        </div>
        <ContactsModal :showModal="showModal" @onClose="handleClose"/>
    </div>
</template>

<script>
import ContactsModal from './ContactsModal'
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
  background-color: #3a6d99;
  position: fixed;
  top: 0;
  width:100%;
}
.circularImage{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}

.circularImage img{
  width:100%;
}
</style>

