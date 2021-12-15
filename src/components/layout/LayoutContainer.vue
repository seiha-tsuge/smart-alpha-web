<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module>
.container {
  display: grid;
  grid-template:
    'header header' 6.4rem
    'sidebar main' 1fr / 24rem 1fr;
  width: 100vw;
  height: 100vh;
}

@media screen and (max-width: 576px) {
  .container {
    grid-template:
      'header' 5.6rem
      'main' 1fr / 1fr;
  }
}
</style>
