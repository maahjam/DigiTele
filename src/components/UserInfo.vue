<template>
    <div>
        <div class="header text-white flex flex-row pl-6 pr-6 h-28 items-center justify-between">

            
                <div class="circular-image">
                    <img class="rounded-full text-xs" src="@/assets/png/message.png" alt="Profile image">
                </div>

                <div class="w-7/12 pl-3 pr-6 pt-6 ">
                    <p class="text-sm font-medium truncate">
                            dfsd
                    </p>
                    <p class="text-left text-xs truncate pb-4 text-gray-400">
                        last seen
                    </p>
                </div>

                <div class="text-center text-sm truncate text-white rounded-full pt-4 w-16 h-16 mt-28 bg-gray-300 hover:bg-blue-600">
                        <img src="@/assets/png/message.png" class="w-8 h-8 m-auto" alt="Message">
                </div>

        </div>
        
            <div class="bg-white p-6 pl-10 pb-0 h-40 flex flex-row">
                <div class="phone-icon mr-4">
                        <img src="@/assets/png/phone.png" alt="phone" >
                </div>
                <div class="w-full  pl-10 pr-6 flex flex-col">
                    <div class="h-1/2">
                        <p class="text-sm truncate">d</p>
                        <p class="text-xs text-gray-300 pt-2">Phone</p>
                    </div>
                    <div class="h-1/2">
                        <p class="text-sm truncate">maahjdddddam</p>
                        <p class="text-xs text-gray-300 pt-2">Username</p>
                    </div>
                    
                </div>
            </div>  
            
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
  background: #3a6d99;
}
.circular-image{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}
.phone-icon{
  width: 30px;
  height: 30px;
  display:inline-block;
}
.phone-icon img{
    min-width: 30px;
}

.circular-image img{
  width:100%; 
  height: 100%;
  object-fit: contain;
}
</style>
