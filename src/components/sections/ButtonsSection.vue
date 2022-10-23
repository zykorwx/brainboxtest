<template>
  <div id="containerButtons" class="fixed flex w-full mt-4 mb-2 bottom-1 sm:bottom-auto sm:mb-4 sm:mr-4 sm:right-0 sm:w-1/2 sm:mt-4">
    <div class="inline-flex w-full sm:grid sm:grid-cols-2 sm:items-stretch">
      <div class="inline-flex w-1/2 sm:w-auto sm:grid sm:grid-rows-2">
        <button-layout sectionName="OurFormulaSection"></button-layout>
        <button-layout sectionName="AboutSection"></button-layout>
        
      </div>
      <div class="inline-flex w-1/2 sm:w-auto sm:grid sm:grid-rows-2">
        <button-layout sectionName="OurProjectsSection"></button-layout>
        <button-layout sectionName="HelpSection"></button-layout>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLayout from '@/components/common/ButtonLayout.vue'

export default {
  components: { ButtonLayout },
  name: 'buttons-section',
}
</script>

<style scoped>
/* m-4 in tailwindcss is equals to 1 rem so we need then we subtract that amount to the height for top and bottom */
  #containerButtons {
    height: 30px;
  }
  @media (min-width: 640px) {
    #containerButtons {
        height: calc(100vh - 2rem);
    }
  }
</style>
