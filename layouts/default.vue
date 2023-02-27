<template>
  <div class="Page">
    <SideBar />
    <div class="Page__Body">
      <slot />
    </div>
    <div class="ProfileStatics__Container Container__Hidden">
      <ProfileStatics />
    </div>
  </div>
</template>

<style>
body {
  background-color: #f1f1f1;
  height: 100vh;
  padding: 3.5rem;
  overflow: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.Page {
  display: flex;
  height: calc(100vh - 7rem);
  column-gap: 3rem;
}

.Page__Body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 4rem;
  overflow-y: scroll;
}

@media screen and (max-height: 800px) {
  body {
    overflow-y: scroll;
  }

  .Page__Body {
    height: 43rem;
  }

}
</style>