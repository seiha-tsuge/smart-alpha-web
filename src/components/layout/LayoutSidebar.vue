<template>
  <aside :class="$style.sidebar">
    <slot />
  </aside>
</template>

<style module>
.sidebar {
  grid-area: sidebar;
  background-color: yellow;
}

@media screen and (max-width: 576px) {
  .sidebar {
    position: fixed;
    top: 0;
    z-index: var(--z-index-sidebar);
    width: 75%;
    height: 100vh;
  }
}
</style>
