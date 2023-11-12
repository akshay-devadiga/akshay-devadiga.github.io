<template>
  <div class="default">
    <nav>
      <NuxtLink to="/"> Articles </NuxtLink>
    </nav>
    <div>
      <slot />
    </div>
  <footer>
    This is footer
  </footer>
  </div>
</template>

<style scoped>
.default {
  border: 1px solid #b9e39e;
  padding: 1rem;
  position: relative;
  background-color: #b8e39e87;
}
.default::before {
  position: absolute;
  top: 2px;
  left: 5px;
  color: #68b538;
  font-family: monospace;
}
</style>
