<template>
    <div>
        
     <div id="show-reply" class="bg-white messageItem flex flex-row-revrese pt-2 pb-2 hover:bg-white-100" @click="showReply()">

            <div class="w-1/5">
                <div class="rounded-full w-5 h-5 bg-blue-400 ml-auto mr-auto mt-4">
                </div>
            </div>

            <div>
                <div class="circularImage">
                    <img class="bg-red-400 rounded-full profileImage" src="" alt="" >
                </div>
            </div>

            <div class="w-full pl-4 pr-10">
               <div class="flex flex-row-revrese">
                   <div class="w-1/2 text-sm font-medium truncate">
                           kfkfkf
                   </div>
                   <div class="text-right text-gray-400 w-1/2 clock">3/;00 am</div>
               </div>
               <div class="flex flex-row-revrese">
                   <div class="w-full text-xs font-medium text-gray-500 pt-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos exercitationem accusamus quasi doloribus voluptate doloremque enim unde porro provident commodi. Eos cumque dolor expedita voluptatum doloremque velit aliquid voluptate quam.
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
        chatListItem:{
            type: Object
        }
    },
    methods:{
        showReply(){
          let element = document.querySelector('#show-reply')
                if (element.style.background === "white") {
                    element.style.background = "#f2f6fa";
                } else {
                    element.style.background = "white";
                }
        }
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