<template>
    <div id="mainSection" class="mt-4 mb-4 ml-4">
        <menu-layout></menu-layout>
        <div class="pt-8 pl-12 pr-12 h-5/6">
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
import WhatWeDoSection from '@/components/sections/WhatWeDoSection.vue'
import StoriesSection from '@/components/sections/StoriesSection.vue'
import MenuLayout from '@/components/layout/MenuLayout.vue'

export default {
    name: 'main-section',
    components: {
        HomeSection,
        AboutSection,
        HelpSection,
        WhatWeDoSection,
        StoriesSection,
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
