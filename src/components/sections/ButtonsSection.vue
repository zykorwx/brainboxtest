<template>
  <div id="containerButtons" class="flex mt-4 mb-4 mr-4">
    <div class="grid items-stretch w-full grid-cols-2">
      <div class="grid grid-rows-2">
        <button-layout v-bind="buttonExplore"></button-layout>
        <button-layout v-bind="buttonAbout"></button-layout>
        
      </div>
      <div class="grid grid-rows-2">
        <button-layout v-bind="buttonStories"></button-layout>
        <button-layout v-bind="buttonHelp"></button-layout>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLayout from '../layout/ButtonLayout.vue'

export default {
  components: { ButtonLayout },
  data() {
    return {
      buttonExplore: {
        title: 'Explore',
        description: 'Explore the best places deals',
        sectionName: 'ExploreSection',
        // Styles
        bgColor: 'bg-[#323ff8]',
        textColor: 'text-[#fefefe]',
        rounded: 'rounded-tl-[30px]',
        animationColor: 'rgb(234 225 254 / 20%)',
        animationDirection: 'alternate',
      },
      buttonStories: {
        title: 'Stories',
        description: 'Our customer and company stories',
        sectionName: 'StoriesSection',
        // Styles
        bgColor: 'bg-[#f77c2f]',
        textColor: 'text-[#fefefe]',
        rounded: 'rounded-tr-[30px]',
        animationColor: 'rgb(234 225 254 / 20%)',
        animationDirection: 'alternate-reverse',
      },
      buttonAbout: {
        title: 'About',
        description: 'Our company history',
        sectionName: 'AboutSection',
        // Styles
        bgColor: 'bg-[#e8e0fe]',
        textColor: 'text-[#6f74cf]',
        rounded: 'rounded-bl-[30px]',
        animationColor: 'rgb(50 63 248 / 20%)',
        animationDirection: 'alternate',
      },
      buttonHelp: {
        title: 'Help',
        description: 'FAQ and Support',
        sectionName: 'HelpSection',
        // Styles
        bgColor: 'bg-[#6f74cf]',
        textColor: 'text-[#fefefe]',
        rounded: 'rounded-br-[30px]',
        animationColor: 'rgb(234 225 254 / 20%)',
        animationDirection: 'alternate-reverse',
      },
    }
  },
  name: 'buttons-section',
}
</script>

<style scoped>
  /* m-4 in tailwindcss is equals to 1 rem so we need then we subtract that amount to the height for top and bottom */
  #containerButtons {
    height: calc(100vh - 2rem);
  }
</style>
