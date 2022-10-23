<template>
  <div class="flex flex-col h-full background">
    <div class="w-4/5 p-4">
      <div class="text-6xl font-bold tracking-wider text-black myShadow">Talent in Action.</div>
      <div class="w-full ml-5 text-lg">
            Behind our teams are very talented people
      </div>
    </div>
    <div class="mt-6 ml-6">
      <image-team 
        name="Saul Pineda"
        :src="require('@/assets/about/saul.png')"
        description="I'm a full stack developer, I'm dedicated, I love programming, I like teamwork, I'm self-taught, I like to study about my area of work and learn new things, I like challenges." />
    </div>
    <div class="mr-6">
      <image-team
        name="Mike Mccray"
        :src="require('@/assets/about/dev1.png')" openTo="left"
        description="I am a web developer specializing in VueJS and Javascript. I have over 4 years of experience in the industry and have worked on a variety of projects." />
    </div>
    <div class="ml-6">
      <image-team 
        name="Matylda Beil"
        :src="require('@/assets/about/dev2.png')"
        description="I am a frontend developer with years of experience in VueJS and JavaScript. I am looking for a new opportunity to use my skills and knowledge to build amazing things." />
    </div>
  </div>
</template>

<script>
import ImageTeam from '@/components/common/ImageTeam.vue'

export default {
  components: { ImageTeam },
  name: 'about-section',
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
  background-image: url(@/assets/backgrounds/about.svg);
}

</style>
