<template>
  <header :class="$style.header">
    <slot />
  </header>
</template>

<style module>
.header {
  grid-area: header;
}
</style>
