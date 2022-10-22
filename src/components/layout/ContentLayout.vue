<template>
    
    <div
        class="flex p-5"
        :class="{
            [bgColor]: bgColor,
            [textColor]: textColor,
            [rounded]: rounded,
        }">
        <div class="self-end">
            <h2 class="bottom-0 text-5xl">{{title}}</h2>
            <h3 class="mt-6 mb-2 text-sm">{{description}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'content-layout',
    props: {
        // Styles props
        bgColor: String,
        textColor: String,
        rounded: String,
        // Data props
        title: String,
        description: String,
        contentName: String,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
