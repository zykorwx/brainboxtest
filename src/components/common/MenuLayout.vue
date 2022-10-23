<template>
    <div class="flex shadow-md" :class="{[store.menuBorder]: store.menuBorder}">
        <div class="flex">
            <div
                @click="goToHome"
                class="self-center w-10 p-2 cursor-pointer hover:bg-gray-600"
                :class="{['bg-gray-600']: isInHome}">
                <icon-feather :src="require('@/assets/icons/home.svg')" styles="text-white"></icon-feather>
            </div>
            <div 
                v-show="!isSearching"
                @click="setFocusToSearch"
                class="self-center w-10 p-2 cursor-pointer hover:bg-gray-600">
                <icon-feather :src="require('@/assets/icons/search.svg')" styles="text-white"></icon-feather>
            </div>
        </div>
        <div v-show="!isSearching" class="text-[#fefefe] h-10 px-3 py-2 w-full">{{currentSection.title}}</div>
        <div v-show="isSearching" class="flex">
            <input 
                @keyup.enter="onSearchPressEnter"
                ref="searchInput"
                class="h-10 px-3 py-2 text-gray-600 border border-gray-600 rounded"
                v-model="textToSearch" />
            <div v-show="isSearching" @click="onSearchPressEnter"
                class="self-center w-10 p-2 ml-1 cursor-pointer hover:bg-gray-600">
                <icon-feather :src="require('@/assets/icons/search.svg')" styles="text-white"></icon-feather>
            </div>
            <div class="text-[#fefefe] h-10 px-3 py-2">{{currentSection.title}}</div>
        </div>
    </div>
</template>

<script>
import { store } from '@/store/store.js'
// Common
import IconFeather from '@/components/common/IconFeather.vue'

const homeSection = 'HomeSection'
export default {
    name: 'menu-layout',
    data() {
        return {
            store,
            isSearching: false,
            textToSearch: '',
        }
    },
    components: {
        IconFeather,
    },
    methods: {
        goToHome() {
            store.changeSelectedSection(homeSection);
        },
        setFocusToSearch() {
            this.isSearching = true
            this.$nextTick(() => this.$refs.searchInput.focus())
        },
        onSearchPressEnter() {
            this.isSearching = false
            this.textToSearch = ''
        }
    },
    computed: {
        isInHome() {
            return this.store.selectedSection === homeSection
        },
        currentSection() {
            return this.store[this.store.selectedSection]
        }
    },
}
</script>

<style scoped>

</style>
