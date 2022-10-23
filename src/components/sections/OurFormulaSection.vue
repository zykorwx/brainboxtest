<template>
  <div class="flex flex-col h-full background">
    <div class="w-4/5 p-4 rounde">
      <div class="text-6xl font-bold tracking-wider text-black myShadow">Building the digital future.</div>
    </div>
    <div class="w-full mt-12 ">
      <div  class="grid grid-cols-4 p-4 text-lg rounded">
        <img class="col-span-2 p-4 rounded-full" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=50" />
        <div class="self-center col-span-2 ml-4">
          <span class="text-2xl font-semibold">We love </span> to help companies in their digital transformation process using the most efficient <span class="text-2xl font-semibold">technologies</span>
          <span class="text-2xl font-semibold"> and methodologies</span>.
        </div>
      </div>
      <div class="grid grid-cols-4 p-4 mt-5 text-lg rounded">
        <div class="self-center col-span-2 ml-4">
          <span class="text-2xl font-semibold">We want</span> to put all our talent at the service of a single purpose: making digital products that help to <span class="text-2xl font-semibold"> make the world a
          better place.</span>
        </div>
        <img class="col-span-2 p-4 rounded-full"
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=50" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'our-formula-section',
}
</script>

<style scoped>
.myShadow {
  text-shadow: -1px 0 #fefefe, 0 1px #fefefe, 1px 0 #fefefe, 0 -1px #fefefe;
}

.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(@/assets/backgrounds/ourFormula.svg);
}
</style>
