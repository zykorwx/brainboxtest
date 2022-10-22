<template>
    <div id="mainSection" class="mt-4 mb-4 ml-4">
        <div>
            <icon-feather :src="require('@/assets/icons/search.svg')" :styles="text-white"></icon-feather>
        </div>
        <component :is="store.selectedSection"></component>
    </div>
</template>

<script>
import { store } from '@/store/store.js'
// Import left content
import HomeSection from './sections/HomeSection.vue'
import AboutSection from './sections/AboutSection.vue'
import HelpSection from './sections/HelpSection.vue'
import ExploreSection from './sections/ExploreSection.vue'
import StoriesSection from './sections/StoriesSection.vue'

// Common
import IconFeather from '@/components/common/IconFeather.vue'

export default {
    name: 'main-section',
    components: {
        HomeSection,
        AboutSection,
        HelpSection,
        ExploreSection,
        StoriesSection,
        IconFeather,
    },
    data() {
        return {
            store
        }
    },
    methods: {}
}
</script>

<style scoped>
#mainSection {
    height: calc(100vh - 2rem);
}
</style>
