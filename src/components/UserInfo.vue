<template>
    <div>
        <div class="header text-white flex flex-row pl-6 h-28">

            <div class="pt-4">
                <div class="circularImage">
                    <img class="bg-red-400 rounded-full" src="" alt="" >
                </div>
            </div>

            <div class=" w-full pl-6 pr-10 pt-6">
               <div class="flex flex-col">
                   <div class="text-sm font-medium truncate">
                        dfsd
                   </div>
                   <div class="text-left text-xs truncate pb-4 text-gray-400">
                       last seen
                   </div>
                   <div class="text-center text-sm truncate text-white rounded-sm w-20 h-5 bg-gray-300 hover:bg-blue-600">
                       message
                   </div>
               </div>
            </div>

        </div>
        
            <div class="bg-white p-6 pl-10 pb-0 h-40 flex flex-row">
                <div class="phoneIcon mr-4">
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
.circularImage{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}
.phoneIcon{
  width: 30px;
  height: 30px;
  display:inline-block;
}
.phoneIcon img{
    min-width: 30px;
}

.circularImage img{
  width:100%;
}
</style>
