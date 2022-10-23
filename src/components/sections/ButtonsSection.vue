<template>
  <div id="containerButtons" class="fixed right-0 flex w-1/2 mt-4 mb-4 mr-4">
    <div class="grid items-stretch w-full grid-cols-2">
      <div class="grid grid-rows-2">
        <button-layout sectionName="OurFormulaSection"></button-layout>
        <button-layout sectionName="AboutSection"></button-layout>
        
      </div>
      <div class="grid grid-rows-2">
        <button-layout sectionName="OurProjectsSection"></button-layout>
        <button-layout sectionName="HelpSection"></button-layout>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLayout from '@/components/layout/ButtonLayout.vue'

export default {
  components: { ButtonLayout },
  name: 'buttons-section',
}
</script>

<style scoped>
  /* m-4 in tailwindcss is equals to 1 rem so we need then we subtract that amount to the height for top and bottom */
  #containerButtons {
    height: calc(100vh - 2rem);
  }
</style>
