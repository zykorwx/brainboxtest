<template>
    <div id="mainSection" class="mb-12 sm:mt-4 sm:mb-4 sm:ml-4">
        <menu-layout></menu-layout>
        <div class="p-1 sm:pt-8 sm:pl-12 sm:pr-12 h-5/6">
            <component :is="store.selectedSection"></component>
        </div>
    </div>
</template>

<script>
import { store } from '@/store/store.js'
// Import left content
import HomeSection from '@/components/sections/HomeSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import HelpSection from '@/components/sections/HelpSection.vue'
import OurFormulaSection from '@/components/sections/OurFormulaSection.vue'
import OurProjectsSection from '@/components/sections/OurProjectsSection.vue'
import MenuLayout from '@/components/layout/MenuLayout.vue'

export default {
    name: 'main-section',
    components: {
        HomeSection,
        AboutSection,
        HelpSection,
        OurFormulaSection,
        OurProjectsSection,
        MenuLayout,
    },
    data() {
        return {
            store
        }
    },
}
</script>

<style scoped>
#mainSection {
    height: calc(100vh - 2rem);
}
</style>
