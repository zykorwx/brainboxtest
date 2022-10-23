<template>
  <div class="flex flex-col h-full background">
    <div class="w-4/5 p-4">
      <div class="text-6xl font-bold tracking-wider text-black myShadow">FAQ</div>
    </div>
    <div>
      <div class="mt-2 mb-1 text-lg font-semibold">How can we help you?</div>
      <accordion-layout></accordion-layout>
    </div>
    <div class="p-10 mt-8 text-center rounded">
      <div class="text-2xl">Need more help?</div>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="p-2 text-center border rounded cursor-pointer hover:bg-gray-600/60">
          <div class="text-2xl">Ask the Help Community</div>
          <div class="text-base text-gray-400">Get answers from community experts</div>
        </div>
        <div class="p-2 text-center border rounded cursor-pointer hover:bg-gray-600/60">
          <div class="text-2xl">Contact us</div>
          <div class="text-base text-gray-400">Tell us more and we’ll help you get there</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import AccordionLayout from '@/components/layout/AccordionLayout.vue'
export default {
  components: { AccordionLayout },
  name: 'help-section',
}
</script>

<style scoped>
.myShadow {
  text-shadow: -1px 0 #fefefe, 0 1px #fefefe, 1px 0 #fefefe, 0 -1px #fefefe;
}

.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(@/assets/backgrounds/help.svg);
}
</style>
