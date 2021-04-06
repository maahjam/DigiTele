<template>
    <div>
        
     <div id="show-reply" class="bg-white cursor-pointer messageItem flex flex-row-revrese pt-2 pb-2 pl-24 pr-24" :class="selectedMessageId == message.id.toString() ? 'selected' : 'not-selected'" @click="onMessageClicked">
            <div>
                <div class="circular-image">
                    <img class="rounded-full text-xs" :src="message.isMine ? profile.photoURL : contact.photoURL" alt="Profile image" >
                </div>
            </div>

            <div class="w-full pl-4 pr-10">
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-sm font-medium truncate">
                       {{message.isMine ? profile.name : contact.name}}
                   </div>
                   <div class="text-right text-gray-400 w-1/2 clock">{{message.dateTime.toISOString()}}</div>
               </div>

               <div class="flex flex-row-revrese">
                   <div class="w-full text-xs font-medium text-gray-500 pt-2">
                       {{message.text}}
                   </div>
               </div>
            </div>
     </div>
    </div>
</template>

<script>
import MockDataManager from '../utilities/MockDataManager'
export default {
    data(){
        return{
             profile: null,
        }
    },
    props:{
        message:{
            type: Object
        },
         contact:{
            type: Object
        },
        selectedMessageId: {
            type: String
        },
    },
   watch: { 
      	selectedMessageId: function(newVal, oldVal) { 
          
        }
    },
    mounted (){
        this.profile = MockDataManager.getProfile()
    },
    methods:{
        onMessageClicked(){
              this.$emit('onMessageClicked', this.message.id)
        },
        
    }
    
}
</script>

<style scoped>
.circular-image{
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
}

.not-selected{
  background-color: white;
}

.not-selected:hover{
  background-color: #f2f6fa;
}

.selected{
  background-color: #f2f6fa;
}

.circular-image img{
  width:100%;
  height: 100%;
  object-fit: contain;
}

.clock{
    font-size: 10px;
}

</style>