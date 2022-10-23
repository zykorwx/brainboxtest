<template>
  <div class="flex items-center justify-center h-full m-auto background">
    <div class="w-4/5 text-center">
      <div class="text-5xl lg:text-6xl">It is a time for</div>
      <div class="relative text-7xl lg:ml-8 lg:text-9xl">
        heroes.
      </div>
        <div class="w-4/5 m-auto text-2xl tracking-wider text-center">
          Technology with a purpose to make the world better.
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'home-section',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(@/assets/backgrounds/home.svg);
  }
</style>
