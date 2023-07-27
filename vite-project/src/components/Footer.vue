<template>
  <footer class="footer container">
    <span class="footer__copy"> &#169; Vadym Loik. All rights reserved. </span>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.footer__copy {
  display: block;
  margin: 2.5rem 0 2rem;
  text-align: center;
  font-size: $smaller-font-size;
  color: $text-color-light;
}
</style>
