<template>
  <router-link :to="'/ChatPage/' + chat.contact.username">
    <div>
     <div class="bg-white flex flex-row-revrese pt-2 pb-2 pl-4 justify-between w-full" :class=" this.$route.params.username == chat.contact.username ? 'selected' : 'not-selected'">

            <div class="circular-image">
                  <img class="text-xs" :src="chat.contact.photoURL" alt="Profile image" >
            </div>
            
            <div class="w-9/12 flex-shrink details">
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-sm font-medium truncate">
                            {{chat.contact.name}}
                   </div>
                   <div class="text-right text-gray-400 w-1/2 clock">{{chat.messages[chat.messages.length - 1].dateTime}}</div>
               </div>

               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-xs font-medium text-gray-500 pt-2 truncate message">
                        {{chat.messages[chat.messages.length - 1].isMine ? "You: " + chat.messages[chat.messages.length - 1].text : chat.messages[chat.messages.length - 1].text}}
                   </div>
                   <div class="w-1/2 text-right" :class="chat.unreadMessageCount == 0 ? 'hide-badge' : 'show-badge'">
                       <div class="bg-green-400 text-center pt-1 badge text-white">
                          {{chat.unreadMessageCount}}
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
        chat:{
            type: Object
        },
    }
}
</script>

<style scoped>
.circular-image{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
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
  background-color: #6490b1;
}

.circular-image img{
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

.hide-badge{
  display: none;
}

.show-badge{
  display: block;
}

.clock{
   font-size: 10px;
}

/* .details{
    width: 82%;
} */
</style>