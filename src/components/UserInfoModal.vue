<template>
    <div>
        <div class="modal-vue">
           <div class="overlay" v-if="showModal">
                <div class="modal" v-if="showModal">
                    <div class="h-12 flex flex-row contactsHeadrer">
                        <div class="w-full text-sm font-medium">
                            <div class="contacts p-4 pl-6">Contact info</div>
                        </div>
                        <div class="w-full text-right text-xs font-medium">
                             <div class="close p-4" @click="handleClose">Close</div>
                        </div>
                    </div>
                    <UserInfo/>
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

.contacts{
    color: #dde8f1;
}
.contactsHeadrer{
    background-color: #3a6d99;
}
</style>