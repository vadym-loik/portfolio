<script setup>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import './assets/scss/variables.scss';

.container {
  margin: 0 auto;
}
/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: 0.6rem;
  border-radius: 0.5rem;
  border-color: hsl($hue, 8%, 66%);
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  border-color: hsl($hue, 8%, 54%);
}

::-webkit-scrollbar-thumb:hover {
  border-color: hsl($hue, 8%, 44%);
}
</style>
