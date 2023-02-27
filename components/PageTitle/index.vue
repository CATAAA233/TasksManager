<template>
    <div class="Page__Title">
        {{title}}
    </div>
</template>
<script setup lang="ts">
    defineProps({
        title: String
    })

</script>
<style>
.Page__Title {
    display: flex;
    align-items: center;
    height: 5rem;
    font-size: 1.5rem;
    font-family: IBM-SemiBold;
    border-bottom: 1px solid #bebebe;
}
</style>