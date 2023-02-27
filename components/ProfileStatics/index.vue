<template>
  <div class="ProfileStatics">
    <div class="ProfileInfo">
      <div class="ProfileInfo__Container">
        <div class="ProfileInfo__Image">
          <img src="/img/profileImage.jpg" alt="">
          <div class="ProfileInfo__NotificationDot">
            <div class="NotificationDot__Dot"></div>
          </div>
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
      <div class="Statics__TasksInfo">
        <div class="Statics__TasksInfo__Summary">
          <div class="Summary__Title">All tasks</div>
          <div class="Summary__Amount">24</div>
        </div>
        <div class="Statics__TasksInfo__Summary">
          <div class="Summary__Title">Expired tasks</div>
          <div class="Summary__Amount">24</div>
        </div>
        <div class="Statics__TasksInfo__Summary">
          <div class="Summary__Title">Today's tasks</div>
          <div class="Summary__Amount">24</div>
        </div>

        <div class="Statics__TasksInfo__Summary">
          <div class="Summary__Title">Next tasks</div>
          <div class="Summary__Amount">24</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ProfileStatics {
  display: grid;
  grid-template-rows: minmax( 100px , 0.8fr) minmax(100px, 1.2fr);
  width: 20rem;
  height: calc(100vh - 15rem);
  padding: 4rem;
  border-radius: 0.7rem;
  background-color: white;
}

.ProfileInfo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #f1f1f1;
  /* background-color: red; */
}

.ProfileInfo__Container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 1.5rem;
  font-family: IBM-Bold;
}

.ProfileInfo__Image {
  position: relative;
  border-radius: 1rem;
  width: 7rem;
  height: 7rem;
}

.ProfileInfo__Image>img {
  width: 100%;
  height: 100%;
  border-radius: 1rem;
}

.ProfileInfo__NotificationDot {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: white;
  top: -10px;
  right: -10px;
}

.NotificationDot__Dot {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: #fc6768;
}

.ProfileInfo__Description__Name {
  font-size: 1.5rem;
}

.ProfileInfo__Description__Rol {
  font-size: 1rem;
  color: #809ae7;
}

.Statics {
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
}

.Statics__TasksInfo__Summary {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f1f1f1;
  padding: 1.5rem 0;

}
.Statics__Title{
  font-family: IBM-SemiBold;
  font-size: 1.5rem;
}
.Summary__Title {
  font-family: IBM-Regular;
}

.Summary__Amount {
  font-family: IBM-SemiBold;

}</style>