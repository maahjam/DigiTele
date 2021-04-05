<template>
    <div>
        
     <div class="bg-white flex flex-row-revrese p-4 hover:bg-blue-100 visited:text-purple-600">
            <div>
                <div class="circularImage">
                    <img class="rounded-full profileImage" src="" alt="" >
                </div>
            </div>

            <div class="w-full pl-4">
               <div class="flex flex-col">
                   <div class="w-1/2 text-sm font-bold truncate">
                       mahsa jamshidian
                   </div>
                   <div class="w-1/2 text-xs font-medium text-gray-500 pt-2 truncate">
                       last seen recently
                   </div>
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
.circularImage{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: blue;
  display:inline-block;
  vertical-align:middle;
}

.circularImage img{
  width:100%;
}

.badge{
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  display:inline-block;
  vertical-align:middle;
}
.clock{
    font-size: 10px;
}
</style>