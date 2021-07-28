<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module>
.container {
  display: grid;
  grid-template:
    'header header' 56px
    'sidebar main' 1fr / 240px 1fr;
  width: 100vw;
  height: 100vh;
}

@media screen and (max-width: 576px) {
  .container {
    grid-template:
      'header' 56px
      'main' 1fr / 1fr;
  }
}
</style>
