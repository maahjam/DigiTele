<template>
  <router-link :to="'/ChatPage/' + chatListItem.chatId">
    <div>
     <div class="bg-white flex flex-row-revrese pt-2 pb-2 pl-6 pr-6 visited:text-purple-600 w-full" :class=" this.$route.params.chatId == chatListItem.chatId ? 'selected' : 'notSelected'">

            <div>
                <div class="circularImage">
                    <img class="rounded-full text-xs" :src="chatListItem.contact.profileURL" alt="Profile image" >
                </div>
            </div>

            <div class="pl-4 flex-shrink details">
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-sm font-medium truncate">
                            {{chatListItem.contact.name}}
                   </div>
                   <div class="text-right text-gray-400 w-1/2 clock">3/;00 am</div>
               </div>
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-xs font-medium text-gray-500 pt-2 truncate message">
                        {{chatListItem.lastMessage.isMine ? "You: " + chatListItem.lastMessage.text : chatListItem.lastMessage.text}}
                   </div>
                   <div class="w-1/2 text-right">
                       <div class="bg-green-400 text-center pt-1 badge text-white">
                           10
                       </div>
                   </div>
               </div>
            </div>

     </div>

    </div>
  </router-link>
</template>

<script>
export default {
    props:{
        chatListItem:{
            type: Object
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
  background-color: #6490b1;
}

.circularImage img{
  width:100%;
  height: 100%;
  object-fit: contain;
}

.badge{
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
  font-size: 10px;
}

.clock{
   font-size: 10px;
}

.details{
    width: 82%;
}
</style>