<template>
  <div class="flex flex-col justify-center h-full background">
    <div class="w-4/5 p-4 rounde">
      <div class="text-6xl font-bold tracking-wider text-black myShadow">Building the digital future.</div>
    </div>
    <div class="w-4/5 mt-12 text-2xl tracking-wider">
      We love to help companies in their digital transformation process using the most efficient technologies and
      methodologies.
      These companies, which are markedly start-up in nature, are behind the emergence of new solutions and technical
      architectures which have shaken up the IT world thanks to tools and ways of building and conceptualizing digital
      products that did not exist up until very recently.

    </div>
    <div>
      <button class></button>
    </div>
  </div>
</template>

<script>
import { store } from '@/store/store.js'

export default {
  name: 'our-formula-section',
  data() {
    return {
      store,
    }
  },
  computed: {
    currentSection() {
      return this.store[this.store.selectedSection]
    },
    mainColor() {
      return this.currentSection.mainColor
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myShadow {
  text-shadow: -1px 0 #fefefe, 0 1px #fefefe, 1px 0 #fefefe, 0 -1px #fefefe;
}

.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1187%26quot%3b)' fill='none'%3e%3cpath d='M195.22 152.58L297.42 211.58L297.42 329.58L195.22 388.58L93.03 329.58L93.03 211.58zM195.22 506.58L297.42 565.58L297.42 683.58L195.22 742.58L93.03 683.58L93.03 565.58zM706.19 -24.42L808.39 34.58L808.39 152.58L706.19 211.58L604 152.58L604 34.58zM808.39 152.58L910.58 211.58L910.58 329.58L808.39 388.58L706.19 329.58L706.19 211.58zM910.58 -24.42L1012.78 34.58L1012.78 152.58L910.58 211.58L808.39 152.58L808.39 34.58zM910.58 329.58L1012.78 388.58L1012.78 506.58L910.58 565.58L808.39 506.58L808.39 388.58zM1421.55 506.58L1523.74 565.58L1523.74 683.58L1421.55 742.58L1319.36 683.58L1319.36 565.58z' stroke='rgba(50%2c 63%2c 248%2c 0.34)' stroke-width='2'%3e%3c/path%3e%3cpath d='M183.42 152.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM285.62 211.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM285.62 329.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM183.42 388.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM81.23 329.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM81.23 211.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM183.42 506.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM285.62 565.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM285.62 683.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM183.42 742.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM81.23 683.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM81.23 565.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM694.39 -24.42 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM796.59 34.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM796.59 152.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM694.39 211.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM592.2 152.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM592.2 34.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM898.78 211.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM898.78 329.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM796.59 388.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM694.39 329.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM898.78 -24.42 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1000.98 34.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1000.98 152.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1000.98 388.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1000.98 506.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM898.78 565.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM796.59 506.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1409.75 506.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1511.94 565.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1511.94 683.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1409.75 742.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1307.56 683.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0zM1307.56 565.58 a11.8 11.8 0 1 0 23.6 0 a11.8 11.8 0 1 0 -23.6 0z' fill='rgba(50%2c 63%2c 248%2c 0.34)'%3e%3c/path%3e%3cpath d='M63.37 173.74L135.25 215.24L135.25 298.24L63.37 339.74L-8.51 298.24L-8.51 215.24zM279.02 49.24L350.9 90.74L350.9 173.74L279.02 215.24L207.13 173.74L207.13 90.74zM207.13 173.74L279.02 215.24L279.02 298.24L207.13 339.74L135.25 298.24L135.25 215.24zM350.9 -75.26L422.78 -33.76L422.78 49.24L350.9 90.74L279.02 49.24L279.02 -33.76zM494.66 173.74L566.55 215.24L566.55 298.24L494.66 339.74L422.78 298.24L422.78 215.24zM638.43 422.74L710.31 464.24L710.31 547.24L638.43 588.74L566.55 547.24L566.55 464.24zM782.19 422.74L854.07 464.24L854.07 547.24L782.19 588.74L710.31 547.24L710.31 464.24zM1213.48 173.74L1285.37 215.24L1285.37 298.24L1213.48 339.74L1141.6 298.24L1141.6 215.24zM1285.37 298.24L1357.25 339.74L1357.25 422.74L1285.37 464.24L1213.48 422.74L1213.48 339.74zM1572.9 298.24L1644.78 339.74L1644.78 422.74L1572.9 464.24L1501.01 422.74L1501.01 339.74z' stroke='rgba(111%2c 116%2c 207%2c 0.80)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1187'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
</style>
