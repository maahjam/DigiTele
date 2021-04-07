<template>
  <router-link :to="'/ChatPage/' + contact.username">
    <div>
        <div class="bg-white contact cursor-pointer flex flex-row-revrese pl-4 pr-4 pb-3 pt-3">
                <div>
                    <div class="circular-image">
                        <img class="rounded-full profileImage" :src="contact.photoURL" alt="" >
                    </div>
                </div>

                <div class="w-full pl-4">
                <div class="flex flex-col">
                    <div class="w-1/2 text-sm font-bold truncate">
                       {{ contact.name }}
                    </div>
                    <div class="w-full text-xs font-medium last-seen pt-1 ">
                        {{ contact.lastSeen}}
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
        contact: Object
    },

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

.circular-image img{
  width:100%;
}

.contact:hover{
    background: #f2f6fa;
}

.last-seen{
    color: #999;
}
</style>