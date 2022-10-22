<template>
  <div class="grid grid-cols-2">
    <main-section></main-section>
    <buttons-section></buttons-section>
  </div>
</template>

<script>
  import MainSection from '@/components/MainSection.vue'
  import ButtonsSection from '@/components/sections/ButtonsSection.vue'

  export default {
    name: 'App',
    components: {
      ButtonsSection,
      MainSection,
    },
  }
</script>

<style>
  body {
    background: rgb(0, 0, 0);
    color: white;
  }
  .container {
    background-color: aliceblue;
  }
</style>
