<template>
    <div>

        <div class="actions h-32 m-auto flex flex-row items-center justify-around">
            <div class="w-28 h-8 color text-center text-white text-xs font-bold p-2 pt-2 rounded-sm" @click="onDeleteClicked">DELETE</div>
            <div class="w-28 h-8 color text-center text-white text-xs font-bold p-2 pt-2 rounded-sm" @click="onReplyClicked">REPLY</div>
            <div class="w-24 h-8 cancel text-center text-xs font-bold p-2 pt-2 rounded-sm" @click="onCancelClicked">CANCEL</div>
        </div>

    </div>
</template>

<script>
export default {
      methods:{
        onCancelClicked(){
              this.$emit('onCancelClicked')
        },
        onDeleteClicked(){
              this.$emit('onDeleteClicked')
        },
        onReplyClicked(){
            this.$emit('onReplyClicked')
        }
    }
}
</script>

<style scoped>
.color{
    background: #6490b1;
}
.color:hover{
    background:  #3a6d99;
}

.actions{
    width: 95%;
    border-top: 1px solid #F2F2F2;
}

.cancel{
    color: #4680b3;
}

.cancel:hover{
    background: #f2f6fa;
}
</style>