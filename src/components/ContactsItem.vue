<template>
    <div>
        <router-link :to="'/UserInfo'"> 
        <div class="bg-white flex flex-row-revrese p-4 hover:bg-blue-100 visited:text-purple-600">
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
                    <div class="w-1/2 text-xs font-medium text-gray-500 pt-2 truncate">
                        {{ contact.lastSeen}}
                    </div>
                </div>  
                </div>
        </div>
        </router-link>

    </div>
</template>

<script>
export default {
    props:{
        contact: Object
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

.circular-image img{
  width:100%;
}

</style>