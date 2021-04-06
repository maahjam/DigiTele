<template>
    <div>
        <div class="modal-vue">
           <div class="overlay" v-if="showModal">
                <div class="modal" v-if="showModal">
                    <div class="h-12 flex flex-row items-center pl-6 pr-6 contacts-header">
                        <div class="w-full text-sm font-medium text-white">
                            Contact info
                        </div>
                        <div class="close w-full text-right text-xs font-medium" @click="handleClose">
                             Close
                        </div>
                    </div>
                    <UserInfo :contact="contact"/>
               </div>
            </div>            
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo'

export default {
    methods: {
    handleClose() {
        this.$emit('onClose')
    }
  },
    props:{
        showModal:{
            type: Boolean,
            default: false
        },
        contact:{
            type: Object
        }
    },
    components:{
        UserInfo
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
  width: 500px;
  z-index: 9999;
  margin: 0 auto;
  background-color: #fff;
  top: 20%;
}

.close{
  color: #dde8f1;
}

.close:hover{
    cursor: pointer;
    color: white;
}

.contacts{
    color: #dde8f1;
}

.contacts-header{
    background-color: #5580a3;
}
</style>