<template>
    <div>

        <div class="bg-blue-500 fixed-header h-12 block">
            <div class="text-white ml-6 pt-1 w-full flex flex-row">
                    <div class="circularImage">
                        <img class="bg-red-400 rounded-full profileImage" src="" alt="" >
                    </div>
                    <div class="w-1/2 text-sm font-bold text-gray-100 pt-2 pb-2 pl-4 truncate" @click="showModal = true">
                        Mahsa jamshidian
                    </div>
            </div>
        </div>
        <UserInfoModal :showModal="showModal" @onClose="handleClose"/>
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
  background-color: #3a6d99;
  position: fixed;
  top: 0;
  width:30%;
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

