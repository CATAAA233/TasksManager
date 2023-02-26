<template>
    <div class="ProfileStatics">
        <div class="ProfileInfo">
            <div class="ProfileInfo__Container">
                <div class="ProfileInfo__Image">
                    <img src="" alt="">
                    <div class="ProfileInfo__NotificationDot"/>
                </div>
                <div class="ProfileInfo__Description">
                    <div class="ProfileInfo__Description__Name">Carlos Catalan</div>
                    <div class="ProfileInfo__Description__Rol">Fullstack Developer</div>
                </div>
            </div>
        </div>
        <div class="Statics">
            <div class="Statics__Title">My Statics</div>
            <div class="Statics__Progress"></div>
            <div class="Statics__TasksInfo"></div>
        </div>
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
  .ProfileInfo{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    /* background-color: red; */
  }
  .ProfileInfo__Image{
    border: 1px solid black;
    border-radius: 1rem;
    width: 7rem;
    height:7rem;
  }
  .Statics{
    background-color: blue;

  }
</style>