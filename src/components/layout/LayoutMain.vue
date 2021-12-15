<template>
  <main :class="$style.main">
    <slot />
  </main>
</template>

<style module>
.main {
  grid-area: main;
  background-color: var(--color-gray-lightest);
}
</style>
