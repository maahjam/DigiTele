<template>
    <div>

        <div id="app" class="modal-vue">
              
            <!-- overlay -->
            <div class="overlay" v-if="showModal" @click="handleClose">

                <div class="modal" v-if="showModal">
                    <div class="h-12 flex flex-row contactsHeadrer">
                        <div class="w-full text-sm font-medium">
                            <div class="contacts p-4">Contacts</div>
                        </div>
                        <div class="w-full text-right text-xs font-medium">
                             <div class="close p-4" @click="handleClose">Close</div>
                        </div>
                    </div>
                    <ContactsItem/>
               </div>

            </div>            
            
        </div>

    </div>
</template>

<script>
import ContactsItem from './ContactsItem'
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
        ContactsItem
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
  width: 30%;
  z-index: 9999;
  margin: 0 auto;
  background-color: #fff;
  top: 50%;
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