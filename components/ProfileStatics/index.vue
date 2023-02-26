<template>
    <div class="ProfileStatics">
        <div class="ProfileStatics__ProfileInfo">hola</div>
        <div class="ProfileStatics__Statics">hola</div>
    </div>
</template>

<style>

  .ProfileStatics{
    display: grid;
    grid-template-rows: minmax(300px, 0.8fr) minmax(100px, 1.2fr);
    width: 30rem;
    height: calc(100vh - 7rem ) ;
    padding: 1rem;
    border-radius: 0.7rem;
    background-color: white;
  }
  .ProfileStatics__ProfileInfo{
    background-color: red;
  }
  .ProfileStatics__Statics{
    background-color: blue;

  }
</style>