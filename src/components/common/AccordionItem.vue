<template>

    <article class="border-b" >
        <div class="border-l border-transparent">
            <header 
                @click="openAccordion()"
                class="flex items-center justify-between p-5 pl-8 pr-8 cursor-pointer select-none"
                :class="{[this.isOpen ? 'bg-[#e8e0fe]/90' : 'bg-[#e8e0fe]/30']: true}">
                <span class="text-xl font-bold" :class="{[isOpen ? 'text-[#6f74cf]' : 'text-gray-50']: true}">
                    {{title}}
                </span>
                <div class="flex items-center justify-center bg-white border rounded-full border-grey-100 w-7 h-7" v-show="!isOpen">
                    <icon-feather :src="require('@/assets/icons/chevron-down.svg')" styles=""></icon-feather>
                </div>
                <div class="flex items-center justify-center bg-[#6f74cf] border rounded-full border-indigo w-7 h-7" v-show="isOpen">
                    <icon-feather :src="require('@/assets/icons/chevron-up.svg')" styles=""></icon-feather>
                </div>
            </header>
            <Transition name="test">
                <div class="text-black bg-white border-l-4 border-[#6f74cf]" v-show="isOpen">
                    <div class="pb-5 pl-8 pr-8 text-grey-darkest">
                        <slot name="content"></slot>
                    </div>
                </div>
            </Transition>
        </div>
    </article>
</template>

<script>
import IconFeather from '@/components/common/IconFeather.vue'
export default {
    name: 'accordion-item',
    components: {
        IconFeather,
    },
    props: {
        title: String
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        openAccordion() {
            this.isOpen = !this.isOpen
        },
    },
}
</script>

<style scoped>
.test-enter-active,
.test-leave-active {
    transition: all .1s ease-in;
}

.test-leave-to,
.test-enter-from  {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
