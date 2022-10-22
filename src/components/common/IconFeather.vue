<template>
    <img :src="src" :class="styles"/>
</template>

<script>

export default {
    name: 'icon-feather',
    props: {
        src: {
            type: String,
            required: true,
        },
        styles: String
    },
    data() {
        return {
            procesando: false,
            correcto: false,
            error: false,
            persona: {
                nombre: '',
                apellido: '',
                email: '',
            },
        }
    },
}
</script>