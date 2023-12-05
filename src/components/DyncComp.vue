<template>
    <h1>{{ id }}</h1>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';



export default defineComponent({
    setup() {
        const id = ref(0)
        const route = useRoute()
        id.value = route.params.id
        return {
            id
        }
    },
})
</script>
