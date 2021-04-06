<template>
    <div>

        <div class="fixed-header h-12 block">
            <div class="text-white ml-6 pt-1 w-full flex flex-row">
                    <div class="circular-image">
                        <img class="rounded-full text-xs" :src="contact.photoURL" alt="Profile image">
                    </div>
                    <div class="w-1/2 cursor-pointer text-sm font-bold text-gray-100 pt-2 pb-2 pl-4 truncate" @click="showModal = true">
                    {{ contact.name}}
                    </div>
            </div>
        </div>
        <UserInfoModal :contact="contact" :showModal="showModal" @onClose="handleClose"/>
    </div>
</template>

<script>
import UserInfoModal from './UserInfoModal'
export default {
  data(){
    return{
      showModal: false
    }
  },
    props:{
        contact:{
            type: Object
        }

    },
   components:{
        UserInfoModal
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
  width:30%;
}
.circular-image{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}

.circular-image img{
  width:100%; 
  height: 100%;
  object-fit: contain;
}
</style>

