<template>
    <div 
        @click="changeSection"
        @mouseover="this.showLongDescription = true"
        @mouseleave="this.showLongDescription = false"
        class="flex p-5 cursor-pointer background"
        :class="{
            [bgColor]: bgColor,
            [textColor]: textColor,
            [rounded]: rounded,
            ['bg-slate-600']: isSelectedSection,
        }">
        <div class="z-10 self-end">
            <h2 class="bottom-0 text-5xl animateText" :class="{['text-6xl']: showLongDescription}">{{title}}</h2>
            <h3 class="mt-6 mb-2 text-sm animateText" :class="{['text-base']: showLongDescription}">{{description}}</h3>
        </div>
        <span v-for="n in 20" :key="n"></span>
    </div>
</template>

<script>
import { store } from '../../store/store.js'
export default {
    name: 'button-layout',
    data() {
        return {
            showLongDescription: false,
            store
        }
    },
    props: {
        // Styles props
        bgColor: String,
        textColor: String,
        rounded: String,
        animationColor: String,
        animationDirection: String,
        // Data props
        title: String,
        description: String,
        sectionName: String,
    },
    methods: {
        changeSection() {
            store.changeSelectedSection(this.sectionName);
        },
    },
    computed: {
        pauseUnpauseAnimation() {
            if (this.store.selectedSection === this.sectionName) {
                return 'paused'
            }
            return 'running'
        },
        isSelectedSection() {
            if (this.pauseUnpauseAnimation === 'paused') {
                return true
            }
            return false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animateText {
    transition: font-size 0.5s;
}
.background {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.background span {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 5px;
    background: v-bind(animationColor);
    animation: animate;
    animation-play-state: v-bind(pauseUnpauseAnimation);
    animation-duration: 45s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: v-bind(animationDirection);
    bottom: -150px;
    z-index: 1;
}

.background span:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 5px;
    animation-delay: 0s;
}


.background span:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 5px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.background span:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 5px;
    animation-delay: 4s;
}

.background span:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.background span:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 5px;
    animation-delay: 0s;
}

.background span:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 5px;
    animation-delay: 3s;
}

.background span:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 5px;
    animation-delay: 7s;
}

.background span:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 5px;
    animation-delay: 5s;
    animation-duration: 45s;
}

.background span:nth-child(9) {
    left: 60%;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    animation-delay: 2s;
    animation-duration: 35s;
}

.background span:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.background span:nth-child(11) {
    left: 50%;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    animation-delay: 1s;
    animation-duration: 15s;
}
.background span:nth-child(12) {
    left: 55%;
    width: 80px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 15s;
}


.background span:nth-child(13) {
    left: 10%;
    width: 20px;
    height: 5px;
    animation-delay: 1s;
    animation-duration: 12s;
}

.background span:nth-child(14) {
    left: 30%;
    width: 20px;
    height: 5px;
    animation-delay: 3s;
    animation-duration: 10s;
}

.background span:nth-child(15) {
    left: 80%;
    width: 60px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.background span:nth-child(16) {
    left: 35%;
    width: 20px;
    height: 5px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.background span:nth-child(17) {
    left: 15%;
    width: 110px;
    height: 5px;
    animation-delay: 3s;
    animation-duration: 10s;
}

.background span:nth-child(18) {
    left: 5%;
    width: 150px;
    height: 5px;
    animation-duration: 42s;
    animation-delay: 0s;
}

.background span:nth-child(19) {
    left: 50%;
    width: 25px;
    height: 5px;
    animation-delay: 5s;
    animation-duration: 45s;
}

.background span:nth-child(20) {
    left: 80%;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    animation-delay: 45s;
    animation-duration: 18s;
}

@keyframes animate {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }

    50% {
        transform: translateY(-500px) rotate(360deg);
        opacity: 1;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
    }

}
</style>
