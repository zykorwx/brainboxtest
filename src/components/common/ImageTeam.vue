<template>
    <div class="flex">
        <div v-show="openTo === 'left'" class="w-full pt-6 pb-1 -mr-20" :class="{['opacity-0']: !showInfo || openTo === 'left', ['opacity-100']: showInfo && openTo === 'left'}">
            <div class="w-full pt-2 pb-4 pl-4 pr-20 text-black bg-white h-28 rounded-3xl">
                <div class="text-2xl font-bold text-[#6f74cf]">{{name}}</div>
                <div class="text-[0.9vw]">{{description}}</div>
            </div>
        </div>
        <div class="relative self-end team-image" @mouseenter="changeShowInfo(true)" @mouseleave="changeShowInfo(false)">
            <div class="absolute z-0 img" :class="{[imageSize]: imageSize}">
                <img :src=src />
            </div>
            <svg class="z-10" :class="{[outerSize]: outerSize}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                <g fill="none" fill-rule="evenodd">
                    <g class="outer-circle">
                        <circle cx="60" cy="60" r="53" :stroke="outerCircleColor" transform="rotate(90 60 60)" />
                        <circle cx="60" cy="7" r="2" :fill="pointsColor" />
                        <circle cx="60" cy="113" r="2" :fill="pointsColor" />
                        <circle cx="113" cy="60" r="2" :fill="pointsColor" />
                        <circle cx="7" cy="60" r="2" :fill="pointsColor" />
                    </g>
        
                </g>
            </svg>
        </div>
        <div class="w-full pt-6 pb-1 -ml-20" v-show="showInfo && openTo === 'right'">
            <div class="w-full pt-2 pb-4 pl-20 text-black bg-white h-28 rounded-3xl">
                <div class="text-2xl font-bold text-[#6f74cf]">{{name}}</div>
                <div class="text-[0.9vw]">{{description}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'image-team',
    data() {
        return { showInfo: false, }
    },
    methods: {
        changeShowInfo(status) {
            this.showInfo = status
        }
    },
    props: {
        pointsColor: {
            type: String,
            default: '#fefefe'
        },
        outerCircleColor: {
            type: String,
            default: '#e8e0fe'
        },
        imageSize: {
            type: String,
            default: 'w-32'
        },
        outerSize: {
            type: String,
            default: 'w-40'
        },
        openTo: {
            type: String,
            default: 'right'
        },
        src: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped>
.outer-circle {
    transform-origin: 60px 60px;
    transition: transform 2s cubic-bezier(0.620, 0.005, 0.000, 1.005);
}

.team-image {
    cursor: pointer;
    width: fit-content;
}

.team-image > .img {
    top: 15px;
    left: 16px;
}

.team-image:hover .outer-circle {
    transform: rotate(360deg);
    fill: #e8e0fe;
}
</style>
