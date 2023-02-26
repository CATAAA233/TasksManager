<template>
    <NuxtPage />
</template>
<style>
  body{
    background-color: #f1f1f1;
    padding: 3.5rem;
    width: 100%;
    height: 100vh;
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
</style>