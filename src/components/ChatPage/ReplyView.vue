<template>
    <div>
        <div class="flex flex-row w-1/2 m-auto justify-between  p-2 items-center h-16">
            <div class="h-8 blue-line"></div>
            <div class=" w-10/12">
            <div class="text-sm font-medium name pb-1">{{message.isMine ? profile.name : contact.name}}</div>
            <div class="text-black text-xs h-5 truncate">{{message.text}}</div>
            </div>
            <div v-if="showClose" class="w-10 text-xl text-gray-400  text-center" @click="onCloseReplyClicked">x</div>
        </div>
    </div>
</template>


<script>
import MockDataManager from '../../utilities/MockDataManager'
export default {
       data(){
        return{
             profile: MockDataManager.getProfile(),
        }
    },
      props:{
        message:{
            type: Object
        },
         contact:{
            type: Object
        },
         showClose:{
            type: Boolean,
            default: false
        },
    },
      methods:{
        onCloseReplyClicked(){
              this.$emit('onCloseReplyClicked')
        },
        
    }
}
</script>

<style scoped>
.blue-line{
    background: #7eaad1;
    width: 2px;
}
.name{
    color: #7eaad1;
}
</style>
