<template>
    <div class="TaskCard">
        <div class="TaskCard__Title">
            {{title}}
        </div>
        <div class="TaskCard__Description">
            
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: String,
 })

</script>
<style>
.TaskCard {
    width: calc(100% - 4rem) ;
    height: 12rem;
    border-radius: 1rem;
    background: linear-gradient(to right, #fe6867, #ff4141);
    /* background-color:  #ff4c4e; */
    color: white;
    font-family: EncodeSans-SemiBold;
    font-weight: 600;
    padding: 2rem;
}

.TaskCard__Tag{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.TaskCard__Title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.5rem;
    margin-top: 1.5rem;
}
</style>