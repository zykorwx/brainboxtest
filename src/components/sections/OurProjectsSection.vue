<template>
  <div class="flex flex-col pb-20 background">
    <div class="w-4/5 p-4 rounded">
      <div class="text-6xl font-bold tracking-wider text-black myShadow">We are proud of our work.</div>
    </div>
    <div class="self-center w-4/5 mt-12">
      <ol class="relative border-l border-gray-100 rounded dark:border-gray-700 bg-black/20">
        <li class="p-4 mb-10 ml-4 rounded cursor-pointer hover:bg-gray-600/60">
          <div
            class="absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <h3 class="text-xl font-semibold text-white">The new Telefonica.com</h3>
          <p class="mb-4 text-lg font-normal text-gray-200">A system comprised of 70+ components that we used to design Telefónica's new website and that will serve as the
          foundation for building the company's website ecosystem around the world.</p>
        </li>
        <li class="p-4 mb-10 ml-4 rounded cursor-pointer hover:bg-gray-600/60">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <h3 class="text-xl font-semibold text-white">Marketing UI design in Figma</h3>
          <p class="text-lg font-normal text-gray-200">All of the pages and components are first designed
            in Figma and we keep a parity between the two versions even as we update the project.</p>
        </li>
        <li class="p-4 ml-4 rounded cursor-pointer hover:bg-gray-600/60">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
          </div>
          <h3 class="text-xl font-semibold text-white">E-Commerce UI code in Tailwind CSS</h3>
          <p class="text-lg font-normal text-gray-200">Get started with dozens of web components and
            interactive elements built on top of Tailwind CSS.</p>
        </li>
      </ol>

    </div>
    <div>
      <button class></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'our-projects-section',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myShadow {
  text-shadow: -1px 0 #fefefe, 0 1px #fefefe, 1px 0 #fefefe, 0 -1px #fefefe;
}

.background {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(@/assets/backgrounds/world.svg)
}
</style>
