<template>
    <div>
        
     <div id="show-reply" class="bg-white messageItem flex flex-row-revrese pt-2 pb-2 pl-24 pr-4" :class="selectedMessageId == message.id.toString() ? 'selected' : 'notSelected'" @click="onMessageClicked">

            <div>
                <div class="circularImage">
                    <img class="rounded-full text-xs" src="" alt="Profile image" >
                </div>
            </div>

            <div class="w-full pl-4 pr-10">
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-sm font-medium truncate">
                       {{message.id}}
                   </div>
                   <div class="text-right text-gray-400 w-1/2 clock">3/;00 am</div>
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
export default {
    data(){
        return{
            
        }
    },
    props:{
        message:{
            type: Object
        },
        selectedMessageId: {
            type: String
        },
    },
    methods:{
        onMessageClicked(){
              this.$emit('onMessageClicked', this.message.id.toString())
        },
        
    }
    
}
</script>

<style scoped>
.circularImage{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}

.notSelected{
  background-color: white;
}

.notSelected:hover{
  background-color: #f2f6fa;
}

.selected{
  background-color: #f2f6fa;
}

.circularImage img{
  width:100%;
  height: 100%;
  object-fit: contain;
}

.clock{
    font-size: 10px;
}

</style>